# Exploded View Engine

Interactive 3D exploded view visualization for Blender engine models using Three.js and React.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Place your `test.glb` file in the `public/` directory

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Usage

- **Drag**: Rotate the view around the model
- **Scroll**: Zoom in/out
- **Slider**: Control the explosion amount (0% = intact, 100% = fully exploded)

## Documentation

See [test.md](./test.md) for detailed documentation, customization options, and technical details.

## Tech Stack

- React 18
- Three.js
- @react-three/fiber
- @react-three/drei
- Vite
