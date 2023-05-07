import React from 'react';


const date = new Date();

const Footer = () => {
    return (
        <footer>
            <strong>Copyright {date.getFullYear()}!!</strong>
        </footer>
    );
};

export default Footer;