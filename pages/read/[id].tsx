import { getAllPostIds, getPostData, IPost } from "../../lib/blog";
import Head from "next/head";
import Page from "../../components/Page";
import Css from "../../styles/Post.module.css";

export default function Post({ postData }: { postData: IPost }) {
  return (
    <Page>
      <div className={Css.Post}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className="font-bold">{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type Params = {
  id: string;
};

export async function getStaticProps({ params }: { params: Params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
