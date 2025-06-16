import Head from 'next/head';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import PostPreview from '../components/PostPreview';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>My Dev Blog</title>
      </Head>
      <section>
        <h1>Latest Posts</h1>
        {allPostsData.map(({ id, date, title }) => (
          <PostPreview key={id} id={id} title={title} date={date} />
        ))}
      </section>
    </Layout>
  );
}
