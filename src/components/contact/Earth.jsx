import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Html } from "@react-three/drei";
import {
  TextureLoader,
  Vector3,
  Quaternion,
  BackSide,
} from "three";
import { useRef } from "react";

import earthDay from "../../assets/globe/earth_day.jpg";
import earthNight from "../../assets/globe/earth_night.jpg";
import earthClouds from "../../assets/globe/earth_clouds.jpg";

const EARTH_RADIUS = 1.7;

const locations = [
  {
    name: "Varanasi",
    country: "India",
    lat: 25.3176,
    lng: 82.9739,
  },
];

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;

  return new Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Marker({ location }) {
  const ref = useRef();

  const position = latLngToVector3(
    location.lat,
    location.lng,
    EARTH_RADIUS + 0.01
  );

  const normal = position.clone().normalize();

  const quaternion = new Quaternion().setFromUnitVectors(
    new Vector3(0, 1, 0),
    normal
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const scale =
      1 +
      Math.sin(clock.elapsedTime * 3) * 0.15;

    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group
      ref={ref}
      position={position}
      quaternion={quaternion}
    >
      {/* Pin */}

      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry
          args={[0.004, 0.004, 0.24]}
        />

        <meshBasicMaterial
          color="#60A5FA"
        />
      </mesh>

      {/* Glow */}

      <mesh scale={2.5}>
        <sphereGeometry
          args={[0.03, 24, 24]}
        />

        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Dot */}

      <mesh>
        <sphereGeometry
          args={[0.025, 24, 24]}
        />

        <meshBasicMaterial
          color="white"
        />
      </mesh>

      {/* Label */}

      <Html
        sprite
        center
        distanceFactor={7}
        position={[0, 0.28, 0]}
      >
        <div
          className="
            whitespace-nowrap

            rounded-full

            border
            border-blue-200

            bg-white/95

            px-3
            py-1.5

            text-[11px]
            font-semibold

            text-slate-800

            shadow-xl

            backdrop-blur-xl
          "
        >
          📍 {location.name}, {location.country}
        </div>
      </Html>
    </group>
  );
}

function EarthMesh() {
  const earthRef = useRef();
  const cloudRef = useRef();

  const [dayMap, nightMap, cloudMap] =
    useLoader(TextureLoader, [
      earthDay,
      earthNight,
      earthClouds,
    ]);

  useFrame(({ mouse }, delta) => {
    if (!earthRef.current) return;
    if (!cloudRef.current) return;

    earthRef.current.rotation.y +=
      delta * 0.08;

    cloudRef.current.rotation.y +=
      delta * 0.095;

    earthRef.current.rotation.x +=
      (
        mouse.y * 0.18 -
        earthRef.current.rotation.x
      ) *
      0.05;

    earthRef.current.rotation.z +=
      (
        -mouse.x * 0.18 -
        earthRef.current.rotation.z
      ) *
      0.05;

    cloudRef.current.rotation.x =
      earthRef.current.rotation.x;

    cloudRef.current.rotation.z =
      earthRef.current.rotation.z;
  });

  return (
    <>
      <group ref={earthRef}>

        {/* Earth */}

        <mesh>
          <sphereGeometry
            args={[
              EARTH_RADIUS,
              128,
              128,
            ]}
          />

          <meshStandardMaterial
            map={dayMap}
            emissiveMap={nightMap}
            emissive="#6EA8FF"
            emissiveIntensity={0.8}
            roughness={0.55}
            metalness={0.25}
          />
        </mesh>

        {/* Marker */}

        {locations.map((location) => (
          <Marker
            key={location.name}
            location={location}
          />
        ))}

        {/* Atmosphere */}

        <mesh scale={1.05}>
          <sphereGeometry
            args={[
              EARTH_RADIUS,
              128,
              128,
            ]}
          />

          <meshPhongMaterial
            color="#7FC4FF"
            transparent
            opacity={0.12}
            side={BackSide}
          />
        </mesh>

        {/* Outer Glow */}

        <mesh scale={1.10}>
          <sphereGeometry
            args={[
              EARTH_RADIUS,
              128,
              128,
            ]}
          />

          <meshBasicMaterial
            color="#60A5FA"
            transparent
            opacity={0.05}
            side={BackSide}
          />
        </mesh>

      </group>

      {/* Clouds */}

      <mesh ref={cloudRef}>
        <sphereGeometry
          args={[
            EARTH_RADIUS + 0.03,
            128,
            128,
          ]}
        />

        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}
function CameraAnimation() {
  useFrame(({ camera, clock }) => {
    camera.position.x =
      Math.sin(clock.elapsedTime * 0.18) * 0.12;

    camera.position.y =
      Math.sin(clock.elapsedTime * 0.32) * 0.08;

    camera.position.z = 6.6;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Earth() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.6],
        fov: 42,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      dpr={[1, 2]}
    >
      {/* ======================================
            STARS
      ====================================== */}

      <Stars
        radius={180}
        depth={80}
        count={7000}
        factor={5}
        saturation={0}
        fade
        speed={0.35}
      />

      {/* ======================================
            LIGHTING
      ====================================== */}

      <ambientLight intensity={0.9} />

      <directionalLight
        position={[5, 3, 5]}
        intensity={3}
      />

      <directionalLight
        position={[-5, -2, -5]}
        intensity={0.8}
        color="#9CCFFF"
      />

      <pointLight
        position={[0, 0, 5]}
        intensity={1.4}
        color="#B8DFFF"
      />

      {/* Rim Light */}

      <pointLight
        position={[0, 0, -5]}
        intensity={0.6}
        color="#4DA3FF"
      />

      {/* ======================================
            CAMERA
      ====================================== */}

      <CameraAnimation />

      {/* ======================================
            EARTH
      ====================================== */}

      <EarthMesh />
    </Canvas>
  );
}