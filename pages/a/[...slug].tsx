import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { getByCatSug, IArticle, readArticles } from "../../lib/article";
import remarkGfm from "remark-gfm";
import Code from "../../components/Code";
import Head from 'next/head'

export async function getStaticPaths() {
  const articles = await readArticles();
  const paths = articles.map(([cat, arts]) => arts.map((art) => ({ params: { slug: [cat, art.slug] } }))
  ).at(0);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: {
    slug: [cat, slug],
  },
}: {
  params: { slug: string[]; };
}) {
  return ({
    props: {
      article: await getByCatSug(cat, slug)!,
    },
  });
}

export default function Slug({
  article: { title, description, content },
}: {
  article: IArticle;
}) {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  return (
    <div>
      <Head>
        <title> {title} </title>
      </Head>

      <article className="space-y-5 pt-5">
        <div className="flex flex-col items-center justify-center space-y-1">
          <h1 className="text-xl font-bold border-b-2 border-secondary">
            {title}
          </h1>
          <p className="font-extralight text-xs text-gray-500">
            {description}
          </p>
        </div>
        <div className="px-20">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1({ children }) {
                return <p className="font-bold text-xl text-white-200 dark:text-gray-200"> {children} </p>
              },

              h2({ children }) {
                return <p className="font-bold text-x text-gray-400 pl-1"> {children}</p>
              },

              h3({ children }) {
                return <p className="font-bold text-xx text-gray-500 pl-3"> {children}</p>
              },

              p({ children }) {
                return <p className="pl-2"> {children} </p>
              },

              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                const getLang = () => {
                  if (match) {
                    return match[1]
                  } else {
                    return 'javascript'
                  }
                }

                return <Code lang={getLang()} code={String(children!)} {...props} />
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
