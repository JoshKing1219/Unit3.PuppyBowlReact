import { Link } from "react-router-dom";

function NavBar() {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/player/:id">Single Player</Link>
          <Link to="/player-form">New Player Form</Link>
        </div>
      </>
    );
  }
  
  export default NavBar;