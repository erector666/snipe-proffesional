import React from 'react';

export const Header: React.FC = () => {
return (
<header className="bg-[#1a1a1a] p-4">
<div className="container mx-auto flex items-center justify-between">
<a href="/" className="text-2xl font-bold text-[#d4af7a]">Snipe Professional</a>
<nav>
<ul className="flex space-x-6">
<li><a href="#" className="text-[#d4af7a] hover:underline">Products</a></li>
<li><a href="#" className="text-[#d4af7a] hover:underline">Services</a></li>
<li><a href="#" className="text-[#d4af7a] hover:underline">About</a></li>
<li><a href="#" className="text-[#d4af7a] hover:underline">Contact</a></li>
</ul>
</nav>
</div>
</header>
);
};
