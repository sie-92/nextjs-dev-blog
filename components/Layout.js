import Head from 'next/head';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          📝 Dev Blog
        </Link>
        <DarkModeToggle />
      </header>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
    </div>
  );
}
