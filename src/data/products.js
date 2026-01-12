// Mock product data
export const products = [
  {
    id: 1,
    name: 'Hydraulic Pump XR-500',
    category: 'Pumps & Motors',
    description: 'High-performance hydraulic pump designed for industrial applications. Features advanced pressure control and energy-efficient operation.',
    longDescription: `The Hydraulic Pump XR-500 represents the pinnacle of modern hydraulic engineering.

    Built with precision-machined components and advanced materials, this pump delivers consistent performance under demanding conditions. The innovative design includes a variable displacement system that automatically adjusts to load requirements, maximizing energy efficiency while maintaining optimal pressure levels.

    Key features include corrosion-resistant coatings, integrated temperature monitoring, and a modular design that simplifies maintenance and reduces downtime. The XR-500 is ideal for manufacturing, construction, and heavy machinery applications.`,
    specifications: {
      dimensions: '250 x 180 x 120 mm',
      weight: '18.5 kg',
      maxPressure: '350 bar',
      flowRate: '45 L/min',
      material: 'Aerospace-grade aluminum alloy',
      operatingTemp: '-20°C to 80°C'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$2,450'
  },
  {
    id: 2,
    name: 'Control Valve CV-200',
    category: 'Valves & Controllers',
    description: 'Precision control valve with electronic feedback system. Ideal for automated fluid control systems.',
    longDescription: `The Control Valve CV-200 sets new standards in precision fluid control.

    Engineered with state-of-the-art servo technology, this valve provides millisecond-level response times and micrometer-precision positioning. The integrated electronic feedback system continuously monitors valve position and automatically compensates for wear and environmental factors.

    The CV-200's robust construction ensures reliable operation in harsh environments, while its compact design allows for easy integration into existing systems. Advanced diagnostics capabilities enable predictive maintenance, reducing unplanned downtime and extending service life.`,
    specifications: {
      dimensions: '180 x 140 x 90 mm',
      weight: '8.2 kg',
      maxPressure: '250 bar',
      flowRange: '0-30 L/min',
      material: 'Stainless steel 316',
      operatingTemp: '-40°C to 120°C'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918484-8313e1f77e5e?w=400&h=300&fit=crop',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$1,850'
  },
  {
    id: 3,
    name: 'Pressure Sensor PS-100',
    category: 'Sensors & Actuators',
    description: 'Industrial-grade pressure sensor with digital output. High accuracy and long-term stability.',
    longDescription: `The Pressure Sensor PS-100 delivers unmatched accuracy and reliability in pressure measurement.

    Utilizing advanced MEMS technology and temperature-compensated circuitry, the PS-100 maintains exceptional accuracy across a wide operating range. The sensor features a digital output with multiple protocol support (Modbus RTU, CANopen, Industrial Ethernet), enabling seamless integration with modern control systems.

    Hermetically sealed construction protects sensitive components from contamination and moisture, ensuring long-term stability even in demanding environments. The PS-100 is the sensor of choice for critical applications requiring the highest levels of precision and dependability.`,
    specifications: {
      dimensions: '80 x 60 x 45 mm',
      weight: '0.4 kg',
      pressureRange: '0-400 bar',
      accuracy: '±0.1% FS',
      material: 'Titanium alloy',
      operatingTemp: '-55°C to 150°C'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&sat=-100',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$890'
  },
  {
    id: 4,
    name: 'Electric Motor EM-750',
    category: 'Power Systems',
    description: 'Three-phase electric motor with variable speed control. Energy-efficient and low maintenance.',
    longDescription: `The Electric Motor EM-750 represents the future of electric drive systems.

    Featuring a high-efficiency permanent magnet design, the EM-750 delivers exceptional power density while minimizing energy consumption. The integrated variable frequency drive allows for precise speed control across a wide range, from near-zero to maximum rated speed.

    Advanced thermal management ensures consistent performance under continuous operation, while the sealed bearing design eliminates the need for regular lubrication. The EM-750's compact footprint and flexible mounting options make it ideal for space-constrained applications. Built-in diagnostic features provide real-time monitoring of temperature, vibration, and electrical parameters.`,
    specifications: {
      dimensions: '320 x 280 x 250 mm',
      weight: '42 kg',
      power: '7.5 kW',
      voltage: '380-480V AC',
      material: 'Cast iron housing',
      efficiency: '94%'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&hue=120',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$3,200'
  },
  {
    id: 5,
    name: 'Servo Actuator SA-300',
    category: 'Sensors & Actuators',
    description: 'High-precision servo actuator for automated positioning. Sub-micron repeatability.',
    longDescription: `The Servo Actuator SA-300 delivers unparalleled positioning accuracy for demanding automation applications.

    Utilizing a closed-loop control system with high-resolution encoders, the SA-300 achieves sub-micron repeatability and exceptional dynamic response. The actuator's frameless design allows for direct integration into custom mechanisms, maximizing compactness and performance.

    Advanced motion profiling capabilities enable smooth acceleration and deceleration, reducing mechanical stress and extending system life. The SA-300 is the ideal choice for precision assembly, inspection systems, and high-speed packaging applications where accuracy and reliability are paramount.`,
    specifications: {
      dimensions: '160 x 120 x 95 mm',
      weight: '5.8 kg',
      stroke: '0-150 mm',
      force: '3000 N',
      material: 'Aluminum alloy',
      repeatability: '±0.001 mm'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918484-8313e1f77e5e?w=400&h=300&fit=crop&hue=240',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$4,100'
  },
  {
    id: 6,
    name: 'Hydraulic Cylinder HC-400',
    category: 'Pumps & Motors',
    description: 'Heavy-duty hydraulic cylinder for industrial machinery. Double-acting with adjustable cushioning.',
    longDescription: `The Hydraulic Cylinder HC-400 is engineered for the most demanding industrial applications.

    Constructed from high-strength steel with chrome-plated piston rods, the HC-400 delivers reliable performance under extreme loads and harsh operating conditions. The double-acting design provides force in both extend and retract directions, while adjustable cushioning ensures smooth deceleration at end-of-stroke.

    Precision honing of cylinder bores and high-quality sealing systems minimize internal leakage and maximize efficiency. The HC-400's modular design allows for easy seal replacement and service without complete disassembly. Ideal for mobile equipment, manufacturing machinery, and material handling systems.`,
    specifications: {
      dimensions: '650 x 180 x 180 mm',
      weight: '38 kg',
      maxPressure: '300 bar',
      bore: '100 mm',
      material: 'Steel with chrome plating',
      stroke: '400 mm'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&hue=60',
    modelUrl: 'https://assets-sup.netlify.app/test.glb',
    price: '$2,850'
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}
