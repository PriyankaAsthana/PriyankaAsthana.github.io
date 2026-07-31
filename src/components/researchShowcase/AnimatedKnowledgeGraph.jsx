import { motion } from "framer-motion";
import { useMemo } from "react";

const WIDTH = 1000;
const HEIGHT = 700;

const NODE_RADIUS = 5;

const LEVELS = [
  { count: 1, y: 80 },
  { count: 3, y: 180 },
  { count: 5, y: 300 },
  { count: 6, y: 420 },
  { count: 5, y: 540 },
  { count: 3, y: 650 },
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(a, b) {
  return Math.sqrt(
    (a.x - b.x) * (a.x - b.x) +
      (a.y - b.y) * (a.y - b.y)
  );
}

function generateNodes() {
  const nodes = [];

  LEVELS.forEach((level, row) => {
    const spacing = WIDTH / (level.count + 1);

    for (let i = 0; i < level.count; i++) {
      nodes.push({
        id: nodes.length,

        x:
          spacing * (i + 1) +
          random(-45, 45),

        y:
          level.y +
          random(-30, 30),

        row,
      });
    }
  });

  return nodes;
}

function connectNodes(nodes) {
  const edges = [];

  nodes.forEach((node) => {
    const below = nodes.filter(
      (n) => n.row === node.row + 1
    );

    below
      .sort(
        (a, b) =>
          distance(node, a) -
          distance(node, b)
      )
      .slice(0, 2)
      .forEach((target) => {
        edges.push({
          from: node.id,
          to: target.id,
        });
      });
  });

  return edges;
}

function Node({ node, delay }) {
  return (
    <motion.circle
      cx={node.x}
      cy={node.y}
      r={NODE_RADIUS}
      fill="#2563EB"
      filter="url(#glow)"
      animate={{
        opacity: [0.3, 1, 0.3],
        r: [5, 7, 5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
    />
  );
}

function Edge({ edge, nodes }) {
  const from = nodes[edge.from];
  const to = nodes[edge.to];

  return (
    <motion.line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="#CBD5E1"
      strokeWidth="1.2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.5,
      }}
    />
  );
}

export default function AnimatedKnowledgeGraph() {
  const nodes = useMemo(() => generateNodes(), []);

  const edges = useMemo(
    () => connectNodes(nodes),
    [nodes]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="edgeGradient"
            x1="0%"
            x2="100%"
          >
            <stop
              offset="0%"
              stopColor="#CBD5E1"
            />

            <stop
              offset="100%"
              stopColor="#E2E8F0"
            />
          </linearGradient>
          <radialGradient id="backgroundGlow">
  <stop
    offset="0%"
    stopColor="#60A5FA"
    stopOpacity="0.18"
  />
  <stop
    offset="100%"
    stopColor="#60A5FA"
    stopOpacity="0"
  />
</radialGradient>
        </defs>
        <circle
  cx={WIDTH / 2}
  cy={HEIGHT / 2}
  r="280"
  fill="url(#backgroundGlow)"
/>
        <motion.g
  animate={{
    y: [-6, 6, -6],
    x: [-3, 3, -3],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {edges.map((edge, index) => (
    <Edge
      key={index}
      edge={edge}
      nodes={nodes}
    />
  ))}

  {nodes.map((node, index) => (
    <Node
      key={node.id}
      node={node}
      delay={index * 0.12}
    />
  ))}

  {edges.map((edge, index) => {
    const from = nodes[edge.from];
    const to = nodes[edge.to];

    return (
      <motion.circle
        key={`pulse-${index}`}
        r="3"
        fill="#60A5FA"
        filter="url(#glow)"
        animate={{
          cx: [from.x, to.x],
          cy: [from.y, to.y],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          delay: index * 0.15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  })}
</motion.g>
                {/* Animated travelling pulses */}
        {edges.map((edge, index) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];

          return (
            <motion.circle
              key={`pulse-${index}`}
              r="3"
              fill="#60A5FA"
              filter="url(#glow)"
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.8,
                delay: index * 0.15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Soft background glow */}
        <motion.circle
          cx="500"
          cy="350"
          r="250"
          fill="url(#backgroundGlow)"
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <defs>
          <radialGradient id="backgroundGlow">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>


    </div>
  );
}