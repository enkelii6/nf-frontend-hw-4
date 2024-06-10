export const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">OLX</a>
        </div>
        <div className="flex space-x-4">
        <a href="/" className="text-white hover:text-gray-400">Home</a>
        <a href="/add" className="text-white hover:text-gray-400">Add product</a>          
        </div>
      </div>
    </nav>
  )
}
