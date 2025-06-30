import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 My App</h1>
        <ul className="flex space-x-4 items-center">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/tasks" className="hover:underline">Tasks</a></li>
          <li><a href="/api" className="hover:underline">API</a></li>
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded bg-white text-black hover:bg-gray-200"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
