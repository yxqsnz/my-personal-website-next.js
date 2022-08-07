import type { NextPage } from "next";
import Page from "../components/Page";
import Redirect from "../components/Redirect";
import { getSortedPostsData, IPost } from "../lib/blog";
import Css from "../styles/Home.module.css";
type Props = { blog: { posts: IPost[] } };

const Home: NextPage<Props> = ({ blog: { posts } }: Props) => (
  <Page>
    <div className={Css.Home}>
      <h1 className="font-bold">Welcome to my website.</h1>
      <h2> I'm Moizes J. Sousa (aka yxqsnz) </h2>
      <h3> I program mainly in Rust, Typescript, Python and C. </h3>

      <div className={`text-lg ${Css.BlogPosts} `}>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Redirect to="/read/[id]" as={`/read/${id}`} text={title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Page>
);
export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      blog: {
        posts,
      },
    },
  };
}
export default Home;
