import { Canvas } from '@react-three/fiber';
import React from 'react';
import  { createRoot } from 'react-dom/client';
import Scene from './components/Scene'
import './styles/normalize.css'
import './styles/index.css';
import { Physics } from '@react-three/cannon';

createRoot(document.getElementById('root')).render(
  <Canvas>
    <Physics
    broadphase='SAP'
      gravity={[0, -2.6, 0]}
    >
      <Scene />
    </Physics>
  </Canvas>
)

