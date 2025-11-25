import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./components/Scene";
import * as THREE from "three";

function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 1, 2], fov: 75 }}>
        <OrbitControls makeDefault />
        <Environment preset="sunset" />
        <mesh scale={50}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#B0486A" side={THREE.DoubleSide} />
        </mesh>
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
