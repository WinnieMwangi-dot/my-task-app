export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/tasks" className="hover:underline">Tasks</a>
          <a href="/api" className="hover:underline">API</a>
        </div>
      </div>
    </footer>
  );
}
