import Link from 'next/link';
import { GiClothes } from "react-icons/gi"

const Header = () => {
  return (
    <header>
      <div>
        <GiClothes/>
      </div>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href="/about"><a>About us</a></Link>
        <Link href='/reviews'><a>SALE</a></Link>
        <Link href='/clothes/'><a>Clothes</a></Link>
      </nav>
    </header>
  );
};

export default Header;
