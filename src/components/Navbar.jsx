import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="max-w-6xl mx-auto p-5">
        <Link href="/">E-commerce</Link>
      </div>
    </div>
  );
};

export default Navbar;
