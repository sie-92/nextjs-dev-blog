import Link from 'next/link';

export default function PostPreview({ id, title, date }) {
  return (
    <div className="mb-6 p-4 bg-white rounded shadow hover:shadow-md transition">
      <h2 className="text-2xl font-semibold text-blue-600">
        <Link href={`/posts/${id}`}>{title}</Link>
      </h2>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
