import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import { getSortedPostsData } from '../lib/posts';

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
      <h1 className="text-4xl font-bold mb-4">My Developer Blog</h1>
      <div className="space-y-6">
        {allPostsData.map(({ slug, title, date }) => (
          <PostPreview key={slug} slug={slug} title={title} date={date} />
        ))}
      </div>
    </Layout>
  );
}
