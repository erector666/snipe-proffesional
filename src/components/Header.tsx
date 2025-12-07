import React from 'react';

export const Header: React.FC = () => {
return (
<header className="header">
<nav className="navbar container">
<a href="#" className="logo">
<i className="fas fa-cut"></i>
<span>Snipe Professional</span>
</a>
<ul className="nav-menu">
<li><a href="#home">Home</a></li>
<li><a href="#products">Products</a></li>
<li><a href="#brands">Brands</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
<div className="nav-actions">
<a href="#search"><i className="fas fa-search"></i></a>
<a href="#account"><i className="fas fa-user"></i></a>
<a href="#cart"><i className="fas fa-shopping-cart"></i><span className="cart-count">0</span></a>
</div>
<div className="hamburger">
<span></span>
<span></span>
<span></span>
</div>
</nav>
</header>
);
};
