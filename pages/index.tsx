import type { NextPage } from "next";
import Page from "../components/Page";
import Redirect from "../components/Redirect";
import Css from "../styles/Home.module.css";
import { IArticle, readArticles } from "../lib/article";
type Props = { articles: [string, IArticle[]][] }

function Home({ articles }: Props) {
  return (
    <Page>
      <div className={Css.Home}>
        <h1 className="font-bold">Welcome to my website.</h1>
        <h2> I&apos; m Moizes J.Sousa (aka yxqsnz) </h2>
        <h3> I program mainly in Rust, Typescript, Python and C.</h3>

        <div className={`text-lg ${Css.BlogPosts} `}>
          {
            articles.map(([cat, arts]) => arts.map(({ title, slug }) => <Redirect key={slug} text={title} to={`/a/${cat}/${slug}`} />))
          }
        </div>
      </div>
    </Page>
  );
}

export const getStaticProps = async () => ({
  props: {
    articles: await readArticles()!
  },
});

export default Home;
