import Link from 'next/link';

export default function PostPreview({ slug, title, date }) {
  return (
    <div>
      <Link href={`/posts/${slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
        {title}
      </Link>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
