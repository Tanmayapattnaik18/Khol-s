import React from 'react';

function CategorySection() {
  return (
    <section className="category-section">
      <div className="category">
        <h3>Shop by Category</h3>
        <ul>
          <li><a href="-">Home</a></li>
          <li><a href="w">Women</a></li>
          <li><a href="m">Men</a></li>
          <li><a href="k">Kids</a></li>
          <li><a href="b">Beauty</a></li>
          <li><a href="s">Shoes</a></li>
          <li><a href="j">Jewelry & Accessories</a></li>
          <li><a href="p">Pet</a></li>
        </ul>
      </div>
    </section>
  );
}

export default CategorySection;
