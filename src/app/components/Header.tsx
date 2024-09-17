import { CalendarDays } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className='flex gap-4 justify-between py-6 text-gray-600 font-light'>
      <div className='flex gap-10 items-center'>
        <Link
          href={"/"}
          className='text-blue-600 font-bold text-2xl flex items-center gap-1'
        >
          <CalendarDays size={26} />
          Calndly
        </Link>

        <nav className='flex gap-4'>
          <Link href={"/features"}>Features</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav>
      </div>

      <nav className='flex gap-4 items-center'>
        <Link href={"/"}>Sign in</Link>
        <Link
          href={"/"}
          className='bg-blue-600 text-white rounded-full py-2 px-4'
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}

export default Header;
