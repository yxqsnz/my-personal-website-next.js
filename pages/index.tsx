import type { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";
import { getSortedPostsData, IPost } from "../lib/blog";
import Css from "../styles/Home.module.css";
type Props = { blog: { posts: IPost[] } };

const Home: NextPage<Props> = ({ blog: { posts } }: Props) => (
  <Page>
    <div className={Css.Home}>
      <h1 className="font-bold">Welcome to my website.</h1>
      <div className={`text-lg ${Css.BlogPosts}`}>
        <h2>See: </h2>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/read/[id]" as={`/read/${id}`}>
                <label style={{ cursor: "pointer" }} className="text-sky-400">
                  {title}
                </label>
              </Link>
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
