export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded p-4 border border-gray-200">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
