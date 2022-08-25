import { join } from "path";
import { readdir as readDir, readFile } from "fs/promises";
import { Trace, zip } from "./utils";
import matter, { GrayMatterFile, Input } from "gray-matter";
const articleDirectory = join(process.cwd(), "articles");
let internalStorage: Map<string, IArticle[]> = new Map();

export interface IArticle {
  tags: string[];
  title: string;
  description: string;
  slug: string;
  content: string;
}

const parseAllArticles = async () => {
  internalStorage.clear()
  const cats = await readDir(articleDirectory);
  Trace.debug(`(lib/article:readArticles): Found ${cats}`);

  const rawFiles = await Promise.all(
    cats
      .map((cat) => join(articleDirectory, cat))
      .map((catDir) => readDir(catDir)),
  )
    .then((catFiles) => zip(cats, catFiles))
    .then((catFiles) => catFiles as [[string, string[]]])
    .then((files) =>
      files.map(([cat, files]) => [
        cat,
        files.map((file) => join(articleDirectory, cat, file)),
      ])
    );

  const meta = rawFiles.flatMap(([_, name]) => name as string).map((path) =>
    path.replace(/\.md$/, "")
  ).map((path) => path.split("/").slice(-2));

  const files = await Promise.all(
    rawFiles
      .map(([_, fx]) => fx as string[])
      .map((fx) => fx.map((f) => readFile(f)))
      .map((fx) => Promise.all(fx)),
  ).then((item) => item.flatMap((buffer) => buffer))
    .then((item) => item.map((it) => it.toString()))
    .then((item) => item.map((file) => matter(file)))
    .then((self) => zip(self, meta))
    .then((self) => self as [GrayMatterFile<Input>, [string, string]][]);

  for (const [{ content, data }, [cat, slug]] of files) {
    const article: IArticle = {
      title: data.title,
      description: data.description,
      tags: data.tags,
      content,
      slug
    }

    if (!internalStorage.get(cat)) {
      internalStorage.set(cat, [article])
    } else {
      internalStorage.get(cat)!.push(article)
    }
  }
};

export async function readArticles() {
  if (internalStorage.size == 0 && process.env.NODE_ENV == "production") {
    await parseAllArticles();
  } else {
    await parseAllArticles();
  }
  return Array.from(internalStorage.entries());
}


export async function getByCatSug(remoteCat: string, slug: string) {
  for (const [cat, arts] of await readArticles()) {
    if (cat == remoteCat) {
      return arts.find((item) => item.slug == slug);
    }
  }
}

