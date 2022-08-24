import type { NextPage } from "next";
import Page from "../components/Page";
import Redirect from "../components/Redirect";
import Css from "../styles/Home.module.css";
import { readArticles } from "../lib/article";

const Home: NextPage<any> = (props: any) => (
  <Page>
    <div className={Css.Home}>
      <h1 className="font-bold">Welcome to my website.</h1>
      <h2> I&apos;m Moizes J. Sousa (aka yxqsnz) </h2>
      <h3> I program mainly in Rust, Typescript, Python and C. </h3>

      <div className={`text-lg ${Css.BlogPosts} `}></div>
    </div>
  </Page>
);

export const getStaticProps = () => {
  return {
    props: {
      articles: readArticles()
    },
  };
};
export default Home;
