import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "Profile" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-5">
      <div className=" md:hidden text-3xl" onClick={()=>{setOpen(!open)}}>
        {
            open === true ? <RiCloseLargeLine  />: <RiMenu2Fill />
            
        }

      </div>

      <ul className={`${open? "top-16": "-top-32"} md:flex duration-1000 gap-4 absolute md:static bg-yellow-200 text-black shadow-lg md:shadow-none `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
