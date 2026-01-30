import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

// --- Individual Drone Parts ---

const Propeller = ({ position, rotationDir = 1, color = "#1a1a1a" }) => {
    const bladeRef = useRef();
    // Fast spin
    useFrame((state, delta) => {
        if (bladeRef.current) bladeRef.current.rotation.y += delta * 30 * rotationDir;
    });

    return (
        <group position={position}>
            {/* Motor Housing */}
            <mesh position={[0, -0.02, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.04, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.05, 8]} />
                <meshStandardMaterial color="#888" metalness={1} roughness={0} />
            </mesh>

            {/* Spinning Blade */}
            <group ref={bladeRef}>
                <mesh>
                    <boxGeometry args={[1.4, 0.005, 0.12]} />
                    <meshStandardMaterial color={color} transparent opacity={0.9} />
                </mesh>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[1.4, 0.005, 0.12]} />
                    <meshStandardMaterial color={color} transparent opacity={0.9} />
                </mesh>
            </group>

            {/* LED Marker */}
            <mesh position={[0, -0.08, 0]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial color="#00ffff" toneMapped={false} />
            </mesh>
            <pointLight position={[0, -0.1, 0]} color="#00ffff" intensity={2} distance={2} decay={2} />
        </group>
    );
};

const DroneBody = () => {
    return (
        <group>
            {/* Main Chassis */}
            <mesh castShadow receiveShadow scale={[1, 0.3, 1.5]}>
                <boxGeometry args={[0.6, 0.5, 0.8]} />
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} envMapIntensity={1} />
            </mesh>

            {/* Top Cover (Aerodynamic) */}
            <mesh position={[0, 0.1, 0]} scale={[1, 0.5, 1.2]}>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial color="#080808" metalness={1} roughness={0.1} />
            </mesh>

            {/* Arms connections */}
            <mesh position={[0.4, 0, 0.4]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[0.8, 0.05, 0.1]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.5} />
            </mesh>
            <mesh position={[-0.4, 0, 0.4]} rotation={[0, -Math.PI / 4, 0]}>
                <boxGeometry args={[0.8, 0.05, 0.1]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.5} />
            </mesh>
            <mesh position={[0.4, 0, -0.4]} rotation={[0, -Math.PI / 4, 0]}>
                <boxGeometry args={[0.8, 0.05, 0.1]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.5} />
            </mesh>
            <mesh position={[-0.4, 0, -0.4]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[0.8, 0.05, 0.1]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.5} />
            </mesh>

            {/* Camera Gimbal */}
            <group position={[0, -0.15, 0.5]}>
                <mesh>
                    <sphereGeometry args={[0.12, 32, 32]} />
                    <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
                </mesh>
                <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.08, 0.08, 0.1, 32]} />
                    <meshStandardMaterial color="#000" />
                </mesh>
                <mesh position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.06, 0.06, 0.01, 32]} />
                    <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
                </mesh>
            </group>
        </group>
    );
};

const Drone = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, speed = 1, pathOffset = 0 }) => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + pathOffset;
        if (group.current) {
            // Gentle hovering logic
            group.current.position.y += Math.sin(t * 2) * 0.002;

            // "Flying" path logic - simple circular/figure-8 movement
            // Adding dynamic movement based on position logic handled by parent or just slight wobble if static

            // Tilt based on movement (simulated)
            group.current.rotation.z = Math.sin(t) * 0.05;
            group.current.rotation.x = Math.sin(t * 0.5) * 0.05 + 0.1; // Slight forward tilt
        }
    });

    return (
        <group ref={group} position={position} rotation={rotation} scale={scale}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <DroneBody />
                {/* Propellers placed at arm ends */}
                <Propeller position={[0.7, 0.05, 0.7]} rotationDir={1} />
                <Propeller position={[-0.7, 0.05, 0.7]} rotationDir={-1} />
                <Propeller position={[0.7, 0.05, -0.7]} rotationDir={-1} />
                <Propeller position={[-0.7, 0.05, -0.7]} rotationDir={1} />
            </Float>
        </group>
    );
};

// --- Scene Manager ---

const DebugCube = () => {
    const meshRef = useRef();
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });
    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" wireframe />
        </mesh>
    );
};

const DroneScene = () => {
    return (
        <Canvas
            gl={{ alpha: true, antialias: true }}
            onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
            }}
            className="w-full h-full pointer-events-none"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, background: 'transparent' }}
        >
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

            {/*
         DEBUG CUBE - If you see this spinning red cube, 3D is working.
         If you don't, WebGL is failing or blocked.
      */}
            <DebugCube />

            {/* Lighting for Realism */}
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <pointLight position={[-10, -5, -5]} intensity={5} color="#00ffff" />

            {/* Environment Reflections - simplified */}
            {/* <Environment preset="city" background={false} /> */}

            {/* Drones */}
            {/* Foreground Drone */}
            <FlyingGroup
                startPos={[-8, -1, 4]}
                endPos={[8, 1, 2]}
                duration={12}
                scale={0.8}
                yOffset={0}
            />

            {/* Background Drone */}
            <FlyingGroup
                startPos={[8, 2, -5]}
                endPos={[-8, 0, -5]}
                duration={18}
                scale={0.4}
                yOffset={2}
            />
            {/* Mid Drone */}
            <FlyingGroup
                startPos={[-6, 3, -2]}
                endPos={[10, -2, -2]}
                duration={15}
                scale={0.5}
                yOffset={-1}
            />

        </Canvas>
    );
};

// Animated Group Wrapper to move drones across screen
const FlyingGroup = ({ startPos, endPos, duration, scale, yOffset }) => {
    const group = useRef();

    useFrame((state) => {
        const t = (state.clock.getElapsedTime() % duration) / duration;
        // Linear Interpolation
        if (group.current) {
            group.current.position.x = startPos[0] + (endPos[0] - startPos[0]) * t;
            group.current.position.y = (startPos[1] + (endPos[1] - startPos[1]) * t) + Math.sin(t * Math.PI * 4) * 0.5; // Add wave
            group.current.position.z = startPos[2] + (endPos[2] - startPos[2]) * t;

            // Banking into turn? No, linear path just tilt
            group.current.rotation.z = -0.1; // Forward forward tilt
        }
    });

    return (
        <group ref={group} position={startPos} scale={scale}>
            <Drone />
        </group>
    )
}

export default DroneScene;
