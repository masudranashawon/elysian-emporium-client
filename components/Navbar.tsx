import { BsBag } from "react-icons/bs";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 h-20 bg-light/90 backdrop-blur-xl border-b border-dark/10 z-[100]'>
      <div className='wrapper w-full h-full flex justify-between items-center'>
        {/* NAV LEFT */}
        <nav>
          <Link href='/' className='text-xl font-semibold link-item'>
            Elysian Emporium
          </Link>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/products' className='link-item'>
                Products
              </Link>
            </li>
            <li>
              <Link href='/about' className='link-item'>
                About
              </Link>
            </li>
            <li>
              <Link href='/contact' className='link-item'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav className='flex items-center gap-5'>
          <Link href='/cart' className='relative'>
            <BsBag />
            <span className='absolute text-xs w-4 h-4 -right-2 -bottom-2 rounded-full bg-dark text-light flex justify-center items-center'>
              10
            </span>
          </Link>
          <Button href='/login' placeholder='Login' />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
