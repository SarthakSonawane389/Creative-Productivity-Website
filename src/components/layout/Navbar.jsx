import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{padding:"16px 0",borderBottom:"1px solid var(--border)",background:"#fff"}}>
      <div  style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
      <strong>Creative Productivity</strong>
      <div style={{ display: "flex", gap: "16px"}}>
      <Link to="/" >Home</Link>
      <Link to="/habits" >Habits</Link>
      <Link to="/about" >About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
