const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-title">Chatingo</div>
        {props.signOut &&
          <ul className="navbar-items">
            <li onClick={props.signOut}>
              <i className="material-icons">exit_to_app</i>
              <span className="navbar-item-title">Sign Out</span>
            </li>
          </ul>
        }
      </div>
    </nav>
  )
}

export default Navbar
