import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import { getByCatSug, IArticle, readArticles } from "../../lib/article"
import remarkGfm from 'remark-gfm'

export default ({ article }: { article: IArticle }) => {
    const router = useRouter()
    const slug = (router.query.slug as string[]) || []
    return <div> <ReactMarkdown remarkPlugins={[remarkGfm]} children={article.content} /> </div>
}

export const getStaticPaths = async () => {
    const articles = await readArticles()
    const paths = [];
    for (const [cat, arts] of articles) {
        for (const art of arts) {
            paths.push({ params: { slug: [cat, art.slug] } })
        }
    }
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { slug: [cat, slug] } }: { params: { slug: string[] } }) {
    return {
        props: {
            article: await getByCatSug(cat, slug)
                || null
        }
    }
}
