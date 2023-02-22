import { useState, useRef } from "react";
import './Navbar.css';
import { Link } from "react-router-dom"
import { useOnClickOutside } from './UseOnClickOutside';
import { RiLoginCircleFill } from 'react-icons/ri'
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, dropdown, ()=> setDropdown(false))
  return (
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
      <li><Link to="/Login"><RiLoginCircleFill /></Link></li>
      <li ref={ref}>
        <button onClick={() => setDropdown((prev) => !prev)}>
          Services <span>&#8595;</span>
        </button>
        {dropdown&&(
        <ul>
          <li>Design</li>
          <li>Development</li>
        </ul>
        )}
      </li>
    </ul>
  </nav>
  );
};
export default Navbar;