import React from 'react';

interface ButtonProps {
children: React.ReactNode;
onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
return (
<button
onClick={onClick}
style={{ 
backgroundColor: '#004d99',
color: 'white',
padding: '10px20px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
fontSize: '16px',
fontFamily: 'var(--heading-font)'
}}
> 
{children}
</button>
);
};
