import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* LEFT LINK  */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Homepage</Link>
        <Link href="/">Homepage</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl">
        <Link href="/">MaaKAli</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINK  */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Homepage</Link>
        <Link href="/">Homepage</Link>
      </div>
    </div>
  );
};

export default Navbar;
