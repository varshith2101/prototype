import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Suprajit Engineering
          </h1>
          <p className="hero-subtitle">
            Explore our cutting-edge hydraulic and automation components
          </p>
          <p className="hero-description">
            We design and manufacture precision-engineered components for industrial automation,
            hydraulic systems, and advanced machinery. Each product is built to the highest standards
            of quality and reliability.
          </p>

          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">
              <span>Explore Products</span>
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon icon-blue">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <p>High Precision</p>
          </div>

          <div className="floating-card card-2">
            <div className="card-icon icon-purple">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p>Energy Efficient</p>
          </div>

          <div className="floating-card card-3">
            <div className="card-icon icon-green">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p>Reliable</p>
          </div>

          <div className="hero-gradient"></div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="features-section">
        <h2 className="section-title">Why Choose Our Products?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-blue">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3>3D Visualization</h3>
            <p>Explore every component in detail with interactive 3D models. Rotate, zoom, and see exploded views of complex assemblies.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-purple">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Quality Assured</h3>
            <p>Every product undergoes rigorous testing to ensure it meets the highest industry standards for performance and reliability.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-green">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Energy Efficient</h3>
            <p>Our components are designed with efficiency in mind, reducing energy consumption while maximizing performance.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-yellow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Long Lasting</h3>
            <p>Built with premium materials and precision engineering, our products deliver years of dependable service.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Products Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">150+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to See Our Products?</h2>
        <p>Explore our catalog and experience the power of 3D visualization</p>
        <Link to="/products" className="btn btn-primary btn-large">
          <span>View All Products</span>
          <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home
