import React from 'react';

function Header() {
  return (
    <header>
      <div className="top-bar">
        <span className='a'>Free shipping with $49 purchase. <a href="ad">details</a></span>
        <span className='b'>Fast & free store pickup! <a href="bd">details</a></span>
        <span className='b'>Take 20% off Kitchen & Dining with code KITCHEN20. <a href="b1d">details</a></span>
      </div>
      <div className='b'>
      <div className="logo">
        <h1>Kohl's</h1>
        <input  type="text" placeholder='&#128269; What are you looking for today ?'/>
      </div>
      <div className="header-links">
        <a href="sign">Sign in or Join</a>
        <img src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/4296/4296929.png" alt="" />
      </div>
      </div>
      
    </header>
  );
}

export default Header;
