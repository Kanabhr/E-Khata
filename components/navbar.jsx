import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white font-bold">
        <Link href={"/"}>Home</Link>
      </nav>
    </>
  );
}
