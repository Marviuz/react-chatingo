import Head from 'next/head'

const Navbar = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="../static/font.css"/>
    </Head>
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-title">
          <i className="icon-chatingo"></i>
          <span>Chatingo</span>
        </div>
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
  </div>
)

export default Navbar
