import { Link } from 'wouter';

const NavBar = () => {
  return <nav>Order Products by:
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/title'>Titles</Link></li>
      <li><Link href='/stars'>Stars</Link></li>
      <li><Link href='/price'>Prices</Link></li>
      <li><Link href='/specifictitle'>SpecificTitle</Link></li>
    </ul>
  </nav>;
};

export default NavBar;