import { useRouter } from 'next/router';
import Head from 'next/head';

const postMap = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js',
    content: 'Next.js is a React framework for production...',
  },
  'deploying-to-vercel': {
    title: 'Deploying to Vercel',
    content: 'Vercel is the fastest way to deploy Next.js apps...',
  },
};

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = postMap[slug];

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
