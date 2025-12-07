import React from 'react';
import Link from 'next/link';

const Header = () => {
return (
<header className="header">
<nav className="navbar">
<div className="logo">
<i className="fas fa-razor"></i>
<span>Snipe Professional</span>
</div>
<ul className="nav-menu">
<li><Link href="#"><a>Home</a></Link></li>
<li><Link href="#products"><a>Products</a></Link></li>
<li><Link href="#brands"><a>Brands</a></Link></li>
<li><Link href="#"><a>About</a></Link></li>
<li><Link href="#"><a>Contact</a></Link></li>
</ul>
<div className="nav-actions">
<a href="#">Login</a>
<a href="#">Cart</a>
</div>
</nav>
</header>
);
};

export default Header;