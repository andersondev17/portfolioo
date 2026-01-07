import * as THREE from "three";

const HeroLights = () => (
    <>
        {/* lamp's light */}
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            penumbra={0.2}
            intensity={100}
            color="white"
        />
        {/* bluish overhead lamp */}
        <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            penumbra={0.5}
            intensity={50}
            color="#3B82F6" // Mario Blue
        />
        {/* purplish side fill */}
        <pointLight 
            position={[0, 3, 4]} 
            intensity={80} 
            distance={10}
            color="#FFD700"
            decay={2}
        />
        
        {/* Green light - Warp Pipe */}
        <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={60}
            color="#2ECC71" // Warp Pipe Green
        />
        {/* area light for soft moody fill */}
        <primitive
            object={new THREE.RectAreaLight("#FFFFFF", 8, 3, 2)}
            position={[1, 3, 4]}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            intensity={15}
        />
        {/* subtle point light for atmospheric tone */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#FF6B6B" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#4CC9F0" />
    </>
);

export default HeroLights;