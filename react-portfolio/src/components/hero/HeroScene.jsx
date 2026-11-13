import { useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Instance, Instances, Lightformer } from "@react-three/drei";

// Dwa kolory akcentu + czerń i biel.
const PALETTE = [
  { color: "#4b3bd9", weight: 0.32 },
  { color: "#e85c7a", weight: 0.22 },
  { color: "#141019", weight: 0.17 },
  { color: "#ffffff", weight: 0.29 },
];

const PUSH_RADIUS = 2.4;
const PUSH_STRENGTH = 1.15;

/** Deterministyczny PRNG - ten sam układ brył przy każdym montażu. */
const mulberry32 = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pickColor = (random) => {
  let threshold = random();
  for (const entry of PALETTE) {
    threshold -= entry.weight;
    if (threshold <= 0) return entry.color;
  }
  return PALETTE[PALETTE.length - 1].color;
};

const buildItems = (count) => {
  const random = mulberry32(count * 7919 + 13);

  return Array.from({ length: count }, (_, index) => {
    const ring = random() < 0.26;

    return {
      index,
      ring,
      color: pickColor(random),
      base: [
        (random() - 0.5) * 11,
        (random() - 0.5) * 6.4,
        (random() - 0.5) * 4.5 - 0.6,
      ],
      rotation: [random() * Math.PI, random() * Math.PI, random() * Math.PI],
      spin: [
        (random() - 0.5) * 0.3,
        (random() - 0.5) * 0.3,
        (random() - 0.5) * 0.22,
      ],
      scale: ring ? 0.55 + random() * 0.5 : 0.42 + random() * 0.72,
      phase: random() * Math.PI * 2,
      drift: 0.1 + random() * 0.22,
    };
  });
};

/** Własna geometria: ikosaedr z przesuniętymi wierzchołkami, płaskie normalne. */
const createPebbleGeometry = () => {
  const geometry = new THREE.IcosahedronGeometry(0.5, 1);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const wobble =
      1 +
      0.17 * Math.sin(vertex.x * 4.1) * Math.cos(vertex.y * 3.3) +
      0.09 * Math.sin(vertex.z * 5.7);
    vertex.multiplyScalar(wobble);
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
};

const createRingGeometry = () => new THREE.TorusGeometry(0.4, 0.13, 10, 26);

const Shapes = ({ items }) => {
  const refs = useRef([]);
  const pointer = useRef(new THREE.Vector2());

  const geometries = useMemo(
    () => ({ pebble: createPebbleGeometry(), ring: createRingGeometry() }),
    [],
  );

  useEffect(
    () => () => {
      geometries.pebble.dispose();
      geometries.ring.dispose();
    },
    [geometries],
  );

  const pebbles = useMemo(() => items.filter((item) => !item.ring), [items]);
  const rings = useMemo(() => items.filter((item) => item.ring), [items]);

  useFrame((state, delta) => {
    const step = Math.min(delta, 0.05);
    // Wygładzony kursor: parallax grupy + odpychanie pojedynczych brył.
    pointer.current.lerp(state.pointer, 1 - Math.pow(0.0015, step));

    const pointerX = pointer.current.x * state.viewport.width * 0.5;
    const pointerY = pointer.current.y * state.viewport.height * 0.5;
    const time = state.clock.elapsedTime;

    for (const item of items) {
      const mesh = refs.current[item.index];
      if (!mesh) continue;

      const x =
        item.base[0] + Math.sin(time * item.drift + item.phase) * 0.24;
      const y =
        item.base[1] + Math.cos(time * item.drift * 0.8 + item.phase) * 0.32;

      const dx = x - pointerX;
      const dy = y - pointerY;
      const distance = Math.hypot(dx, dy);

      let pushX = 0;
      let pushY = 0;
      if (distance > 0.0001 && distance < PUSH_RADIUS) {
        const falloff = 1 - distance / PUSH_RADIUS;
        const force = falloff * falloff * PUSH_STRENGTH;
        pushX = (dx / distance) * force;
        pushY = (dy / distance) * force;
      }

      mesh.position.set(x + pushX, y + pushY, item.base[2]);
      mesh.rotation.set(
        item.rotation[0] + time * item.spin[0],
        item.rotation[1] + time * item.spin[1],
        item.rotation[2] + time * item.spin[2],
      );
    }
  });

  const register = (item) => (element) => {
    refs.current[item.index] = element;
  };

  return (
    <>
      <Instances limit={pebbles.length} range={pebbles.length}>
        <primitive object={geometries.pebble} attach="geometry" />
        <meshStandardMaterial
          roughness={0.17}
          metalness={0.42}
          envMapIntensity={1.15}
        />
        {pebbles.map((item) => (
          <Instance
            key={item.index}
            ref={register(item)}
            color={item.color}
            scale={item.scale}
          />
        ))}
      </Instances>

      <Instances limit={rings.length} range={rings.length}>
        <primitive object={geometries.ring} attach="geometry" />
        <meshStandardMaterial
          roughness={0.12}
          metalness={0.6}
          envMapIntensity={1.25}
        />
        {rings.map((item) => (
          <Instance
            key={item.index}
            ref={register(item)}
            color={item.color}
            scale={item.scale}
          />
        ))}
      </Instances>
    </>
  );
};

Shapes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/** Światło liczone lokalnie, frames={1} - bez plików HDR z zewnątrz. */
const SoftStudio = () => (
  <>
    <ambientLight intensity={0.55} />
    <directionalLight position={[4, 6, 6]} intensity={1.1} />
    <Environment resolution={192} frames={1}>
      <color attach="background" args={["#efecf9"]} />
      <Lightformer
        form="rect"
        intensity={2.4}
        position={[0, 4, 3]}
        scale={[10, 3, 1]}
        color="#ffffff"
      />
      <Lightformer
        form="rect"
        intensity={1.3}
        position={[-5, 0, 2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[6, 5, 1]}
        color="#cdc3ff"
      />
      <Lightformer
        form="rect"
        intensity={1}
        position={[5, -2, 1]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[6, 5, 1]}
        color="#ffd2dd"
      />
    </Environment>
  </>
);

const HeroScene = ({ count = 42, active = true }) => {
  const items = useMemo(() => buildItems(count), [count]);

  return (
    <Canvas
      className="hero-scene-in"
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 38, near: 0.1, far: 40 }}
    >
      <SoftStudio />
      <Shapes items={items} />
    </Canvas>
  );
};

HeroScene.propTypes = {
  count: PropTypes.number,
  active: PropTypes.bool,
};

export default HeroScene;
