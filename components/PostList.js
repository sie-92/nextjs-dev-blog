import Link from 'next/link';

const posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build your first app using Next.js...',
  },
  {
    slug: 'deploying-to-vercel',
    title: 'Deploying to Vercel',
    excerpt: 'How to deploy your Next.js project to Vercel...',
  },
];

export default function PostList() {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.slug} className="p-4 border rounded shadow-sm">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.excerpt}</p>
          <Link href={`/posts/${post.slug}`} className="text-blue-500 mt-2 inline-block">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
