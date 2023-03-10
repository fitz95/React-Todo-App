/* eslint-disable */
import { Link } from 'react-router-dom';
import Navbar from 'components/Navbar';

export default function NotFound() {
  return (
       <>
    <Navbar />
    <div className="wrapper">
        <h1>404 ERROR Page Not Found</h1>
        <div className="todos">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
    </>
  );
}
