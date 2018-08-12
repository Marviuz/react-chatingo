import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar