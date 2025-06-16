import Link from 'next/link';

export default function PostPreview({ id, title, date }) {
  return (
    <div className="post-preview">
      <h2>
        <Link href={`/posts/${id}`}>{title}</Link>
      </h2>
      <small>{date}</small>
    </div>
  );
}
