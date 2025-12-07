import React from 'react';

export const Footer: React.FC = () => {
return (
<footer className="bg-[#1a1a1a] p-4">
<div className="container mx-auto text-center">
<p className="text-[#d4af7a]">© {new Date().getFullYear()} Snipe Professional. All rights reserved.</p>
</div>
</footer>
);
};
