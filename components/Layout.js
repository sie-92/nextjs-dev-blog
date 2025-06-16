import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav>
          <Link href="/">🏠 Home</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
