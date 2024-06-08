import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav>
      <ul className='navbar'>
        <div className='nav-item' onClick={handleDropdownToggle}>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/128/3502/3502458.png" alt="Shop by category" />
          </li>
          <p>Shop by category</p>
          {isDropdownVisible && (
            <div className="dropdown">
              <a href="/gift-ideas">Gift Ideas</a>
              <a href="/back-to-school">Back to School & College</a>
              <a href="/summer-shop">Summer Shop</a>
              <a href="/home">Home</a>
              <a href="/women">Women</a>
              <a href="/men">Men</a>
              <a href="/kids-baby-toys">Kids, Baby & Toys</a>
              <a href="/shoes">Shoes</a>
              <a href="/beauty-sephora">Beauty | SEPHORA</a>
              <a href="/jewelry-accessories">Jewelry & Accessories</a>
              <a href="/sale-clearance">Sale & Clearance</a>
            </div>
          )}
        </div>
        <div className='nav-item'>
          <li><img src="https://cdn-icons-png.flaticon.com/128/1828/1828961.png" alt="My Store" /></li>
          <p>My Store: Select Store</p>
        </div>
        <li><a href="/">Home</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/sale">Sale & Clearance</a></li>
        <div className='nav-item'>
          <li><a href="/card"><img src="https://t4.ftcdn.net/jpg/03/07/14/09/240_F_307140983_MDNd4Mtv5qgd3LAUK40ru1EPyYWL4elG.jpg" alt="Kohl's Card" />Kohl's Card</a></li>
        </div>
        <div className='nav-item'>
          <li><a href="/coupons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoIQdX-1wb5SsQCjCgD8Q843JO4Fx09WKA0ZrOutUG_jbIZvLfCHGKbXe4w&s" alt="Kohl’s Coupons" />Kohl’s Coupons</a></li>
        </div>
        <div className='nav-item end'>
          <li><img src="https://img.icons8.com/?size=100&id=646&format=png&color=000000" alt="Help" /></li>
          <p>Help</p>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
