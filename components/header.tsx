import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/hydrogen/production-methods">Production Methods</Link></li>
        <li><Link href="/hydrogen/advantages">Advantages</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
