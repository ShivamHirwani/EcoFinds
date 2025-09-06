import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-green-600 text-white flex justify-between">
      <h1 className="font-bold text-xl">EcoFinds</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
