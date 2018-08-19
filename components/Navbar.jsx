const Navbar = (props) => (
  <nav className="navbar">
    <div className="navbar-wrapper">
      <div className="navbar-title">Chatingo</div>
      <ul className="navbar-items">
        <li onClick={props.signOut}>
          <i className="material-icons">exit_to_app</i>
          <span class="navbar-item-title">Sign Out</span>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
