import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Escomp Blogposter </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Create New Blog
        </Link>

        <Link
          to="/edit"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "6px",
          }}
        >Edit Blog
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
