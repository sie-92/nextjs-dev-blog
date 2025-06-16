export default function Layout({ children }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <main>{children}</main>
    </div>
  );
}
