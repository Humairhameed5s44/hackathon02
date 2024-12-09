import Link from 'next/link';
import { useState } from 'react';
import { SearchIcon, MenuIcon } from '@heroicons/react/outline'; // Importing Heroicons
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';

const NHeaders: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[132px] w-[1440px]">

      <header className="flex items-center w-full justify-between px-4 py-2 border-b h-[66px] bg-white">
        <div className="flex items-center space-x-4">
          <SearchIcon className="h-6 w-6 text-gray-700" />
        </div>

        <div className="text-center flex-1">
          <h1 className="text-xl font-bold text-gray-800">
          <Link href={"/"}>  Avion </Link></h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href={"/Shoppingbasket"}><ShoppingCartIcon className="h-6 w-6 text-gray-700" /></Link>
          <UserIcon className="h-6 w-6 text-gray-700" />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </header>
      <div className="border-b"></div>

      <nav className="hidden md:flex justify-center space-x-10 py-3 h-[66px] bg-white">
        <Link className="text-gray-700 hover:text-blue-500" href={"/About"}>About</Link>
      <Link className="text-gray-700 hover:text-blue-500" href={"/Plantpots"}>Plant pots</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Ceramics"}>Ceramics</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Tables"}>Tables</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Chairs"}>Chairs</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Crockery"}>Crockery</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Tableware"}>Tableware</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Cutlery"}>Cutlery</Link>
      </nav>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t py-3`}
      >
        <div className="flex flex-col items-center space-y-4">
        <Link className="text-gray-700 hover:text-blue-500" href={"/Plantpots"}>Plant pots</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Ceramics"}>Ceramics</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Tables"}>Tables</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Chairs"}>Chairs</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Crockery"}>Crockery</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Tableware"}>Tableware</Link>
          <Link className="text-gray-700 hover:text-blue-500" href={"/Cutlery"}>Cutlery</Link>
        </div>
      </div>
    </div>
  );
};

export default NHeaders;
