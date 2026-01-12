import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Products.css'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Pumps & Motors', 'Valves & Controllers', 'Sensors & Actuators', 'Power Systems']

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="products-container">
      {/* Header */}
      <div className="products-header">
        <div className="header-content">
          <Link to="/" className="back-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="products-title">Our Product Catalog</h1>
          <p className="products-subtitle">
            Explore our range of precision-engineered components. Click on any product to view it in interactive 3D.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="filter-container">
          <span className="filter-label">Filter by Category:</span>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className={`product-card card-color-${(index % 4) + 1}`}>
            <div className="product-image-container">
              <img src={product.thumbnail} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <span className="view-3d-badge">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  View in 3D
                </span>
              </div>
            </div>

            <div className="product-content">
              <div className="product-category-badge">
                {product.category}
              </div>

              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <Link to={`/product/${product.id}`} className="btn-read-more">
                  Read More
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>No products found</h3>
          <p>Try selecting a different category</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="products-cta">
        <div className="cta-content">
          <h2>Can't find what you're looking for?</h2>
          <p>Contact our team for custom solutions tailored to your specific requirements</p>
          <button className="btn-contact">
            Contact Us
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
