const Navbar = ({ brand, navLinks, search, profile, toggle }) => {
  return (
    <nav className="w-full px-6 py-4 bg-[#e0e5ec] 
                    shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] 
                    flex items-center justify-between rounded-b-2xl text-gray-700">

      {/* Brand */}
      <div className="font-bold text-lg">{brand}</div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {navLinks}
      </div>

      {/* Right Side: Search + Theme Toggle + Profile */}
      <div className="flex items-center gap-4">
        {search}
        {toggle}
        {profile}
      </div>
    </nav>
  );
};

export default Navbar;
