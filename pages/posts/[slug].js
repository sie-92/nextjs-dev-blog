import Layout from '../../components/Layout';
import { getAllPostSlugs, getPostData } from '../../lib/posts';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
