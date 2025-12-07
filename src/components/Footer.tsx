import React from 'react';

export const Footer: React.FC = () => {
return (
<footer style={{ backgroundColor: '#004d99', color: 'white', padding: '10px', textAlign: 'center', fontFamily: 'var(--heading-font)' }}>
<p>&copy; {new Date().getFullYear()} Snipe-IT</p>
</footer>
);
};
