import { Link } from 'wouter';

const NavBar = () => {
  return <nav>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/title'>Title</Link></li>
      <li><Link href='/stars'>Stars</Link></li>
      <li><Link href='/price'>Price</Link></li>
    </ul>
  </nav>;
};

export default NavBar;