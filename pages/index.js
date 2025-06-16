import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to My Dev Blog</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          I write about web development, JavaScript, and building cool things.
        </p>
        <Link
          href="/posts"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
        >
          View Blog Posts
        </Link>
      </section>
    </Layout>
  );
}
