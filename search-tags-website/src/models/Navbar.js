import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-300 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tag Search 🔍</h1>
        {/* Você pode adicionar mais links de navegação aqui */}
      </div>
    </nav>
  );
}

export default Navbar;
