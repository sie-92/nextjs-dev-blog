import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="mb-8">
        <nav>
          <Link href="/" className="text-blue-600 font-bold text-xl">🏠 Home</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
