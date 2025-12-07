import React from 'react';
import Link from 'next/link';

const Header = () => {
return (
<header className="header">
<div className="container">
<div className="navbar">
<div className="logo">
<i className="fas fa-razor"></i>
<span>Snipe Professional</span>
</div>
<nav className="nav-menu">
<Link href="#">Home</Link>
<Link href="#products">Products</Link>
<Link href="#brands">Brands</Link>
<Link href="#advantages">Advantages</Link>
<Link href="#subscribe">Subscribe</Link>
</nav>
<div className="nav-actions">
<Link href="#cart"><i className="fas fa-shopping-cart"></i></Link>
</div>
</div>
</div>
</header>
);
};

export default Header;