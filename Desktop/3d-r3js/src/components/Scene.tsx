/* eslint-disable @typescript-eslint/no-explicit-any */
import { PivotControls, useGLTF, useTexture } from "@react-three/drei";
import { angle } from "../../utils";
import * as THREE from "three";
import { useMemo, useEffect } from "react";

export function Model(props: any) {
    const { nodes }: any = useGLTF("/model/scene.gltf");

    const computerTexture = useTexture("/texture/computer2.webp");
    const tableTexture = useTexture("/texture/table.jpg");
    const planeTexture = useTexture("/texture/wall.jpg");

    // Configure computer texture
    useEffect(() => {
        const texture = computerTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return () => texture.dispose();
    }, [computerTexture]);

    const computerMaterial = useMemo(() => {
        const texture = computerTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [computerTexture]);

    const tableMaterial = useMemo(() => {
        const texture = tableTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [tableTexture]);

    const planeMaterial = useMemo(() => {
        const texture = planeTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [planeTexture]);

    return (
        <group
            {...props}
            position={[0, -1, 6]}
            rotation={[angle(-15), angle(-90), angle(-0)]}
            dispose={null}>
            <mesh
                name="Plane"
                geometry={nodes.Plane.geometry}
                material={planeMaterial}
                scale={7.628}
            />
            <mesh
                name="Table_Large_Rectangular_01_Circle004"
                geometry={nodes.Table_Large_Rectangular_01_Circle004.geometry}
                material={tableMaterial}
                position={[-6.002, 0, 0]}
                scale={0.238}
            />
            <group
                name="computer"
                position={[-5.756, 1.917, -0.059]}
                rotation={[1.344, -1.435, 1.279]}
                scale={3.293}>
                <mesh
                    name="mesh51422144"
                    geometry={nodes.mesh51422144.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_1"
                    geometry={nodes.mesh51422144_1.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_2"
                    geometry={nodes.mesh51422144_2.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_3"
                    geometry={nodes.mesh51422144_3.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_4"
                    geometry={nodes.mesh51422144_4.geometry}
                    material={computerMaterial}
                />
            </group>
            <PivotControls
                onDrag={e => {
                    console.log("🚀 ~ Model ~ e:", e.elements)
                }}
            >
                <mesh>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </PivotControls>
        </group>
    );
}

useGLTF.preload("/model/scene.gltf");
