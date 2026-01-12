import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { getProductById, products } from '../data/products'
import './ProductDetail.css'

// Engine model component
function ProductModel({ explosionAmount, modelUrl }) {
  const { scene } = useGLTF(modelUrl)
  const [explodedParts, setExplodedParts] = React.useState([])

  React.useEffect(() => {
    if (!scene) return

    const parts = []
    const parentCenter = new THREE.Vector3(0, 0, 0)

    scene.traverse((child) => {
      if (child.isMesh) {
        const meshWorldPos = new THREE.Vector3()
        child.getWorldPosition(meshWorldPos)
        const explosionVector = meshWorldPos.clone().sub(parentCenter)

        if (explosionVector.length() < 0.001) {
          explosionVector.set(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize()
        }

        const originalPos = child.position.clone()

        // Colorful metallic materials
        const colors = [0x4facfe, 0x667eea, 0xf093fb, 0x43e97b, 0xffd89b]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        child.material = new THREE.MeshStandardMaterial({
          color: randomColor,
          metalness: 0.8,
          roughness: 0.3,
        })

        parts.push({
          mesh: child,
          originalPosition: originalPos,
          explosionVector: explosionVector.normalize(),
        })
      }
    })

    setExplodedParts(parts)
  }, [scene])

  React.useEffect(() => {
    explodedParts.forEach(({ mesh, originalPosition, explosionVector }) => {
      const displacement = explosionVector.clone().multiplyScalar(explosionAmount * 30)
      mesh.position.copy(originalPosition).add(displacement)
    })
  }, [explosionAmount, explodedParts])

  return <primitive object={scene} />
}

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const [explosionAmount, setExplosionAmount] = useState(0)

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn-back">Back to Products</Link>
      </div>
    )
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="product-detail-container">
      {/* Navigation Bar */}
      <div className="detail-nav">
        <button onClick={() => navigate(-1)} className="nav-back-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="nav-title">{product.name}</div>
        <Link to="/products" className="nav-products-link">
          All Products
        </Link>
      </div>

      {/* Main Content - Split Layout */}
      <div className="detail-content">
        {/* Left Side - 3D Viewer (Bigger - 65%) */}
        <div className="viewer-section">
          <div className="viewer-container">
            <Canvas camera={{ position: [80, 80, 80], fov: 50 }} gl={{ antialias: true }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[100, 100, 50]} intensity={1.2} />
              <directionalLight position={[-100, -100, -50]} intensity={0.6} />
              <pointLight position={[0, 50, 0]} intensity={0.7} color="#4facfe" />
              <pointLight position={[50, 0, 50]} intensity={0.5} color="#f093fb" />

              <ProductModel explosionAmount={explosionAmount} modelUrl={product.modelUrl} />

              <OrbitControls
                enableDamping
                dampingFactor={0.05}
                minDistance={20}
                maxDistance={200}
              />
            </Canvas>

            {/* Explosion Meter */}
            <div className="explosion-control">
              <div className="control-header">
                <svg className="control-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Exploded View</span>
                <span className="explosion-percentage">{(explosionAmount * 100).toFixed(0)}%</span>
              </div>
              <div className="slider-wrapper">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={explosionAmount}
                  onChange={(e) => setExplosionAmount(parseFloat(e.target.value))}
                  className="explosion-slider"
                />
                <div className="slider-track">
                  <div className="slider-fill" style={{ width: `${explosionAmount * 100}%` }} />
                </div>
              </div>
            </div>

            {/* 3D Controls Info */}
            <div className="controls-info">
              <div className="control-tip">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>Click and drag to rotate • Scroll to zoom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Product Info (Smaller - 35%) */}
        <div className="info-section">
          <div className="info-content">
            {/* Category Badge */}
            <div className="category-badge">{product.category}</div>

            {/* Product Name */}
            <h1 className="product-title">{product.name}</h1>

            {/* Price */}
            <div className="product-price-tag">{product.price}</div>

            {/* Short Description */}
            <p className="product-intro">{product.description}</p>

            {/* Specifications */}
            <div className="specifications-section">
              <h3 className="section-heading">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Specifications
              </h3>
              <div className="specs-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Description */}
            <div className="description-section">
              <h3 className="section-heading">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Product Details
              </h3>
              <div className="description-text">
                {product.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn-primary-action">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Request Quote
              </button>
              <button className="btn-secondary-action">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-section">
              <h3 className="related-heading">Related Products</h3>
              <div className="related-products">
                {relatedProducts.map(relatedProduct => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="related-product-card"
                  >
                    <img src={relatedProduct.thumbnail} alt={relatedProduct.name} />
                    <div className="related-info">
                      <p className="related-name">{relatedProduct.name}</p>
                      <p className="related-price">{relatedProduct.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
