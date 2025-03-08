import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[600px]"
    />
  );
}
