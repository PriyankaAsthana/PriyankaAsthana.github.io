import { motion } from "framer-motion";
import { useMemo } from "react";

const WIDTH = 1000;
const HEIGHT = 900;

const NODE_RADIUS = 5;

const LEVELS = [
  { count: 1, y: 60 },
  { count: 3, y: 175 },
  { count: 5, y: 300 },
  { count: 6, y: 430 },
  { count: 6, y: 560 },
  { count: 5, y: 690 },
  { count: 4, y: 810 },
  { count: 3, y: 885 },
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
          random(-25, 25),

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
      (otherNode) =>
        otherNode.row === node.row + 1
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
      filter="url(#graphGlow)"
      animate={{
        opacity: [0.35, 1, 0.35],
        r: [5, 7, 5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
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
      initial={{
        pathLength: 0,
        opacity: 0,
      }}
      animate={{
        pathLength: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    />
  );
}

export default function AnimatedKnowledgeGraph() {
  const nodes = useMemo(
    () => generateNodes(),
    []
  );

  const edges = useMemo(
    () => connectNodes(nodes),
    [nodes]
  );

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          {/* NODE GLOW */}

          <filter
            id="graphGlow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
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

          {/* BACKGROUND BLUE GLOW */}

          <radialGradient id="graphBackgroundGlow">
            <stop
              offset="0%"
              stopColor="#60A5FA"
              stopOpacity="0.18"
            />

            <stop
              offset="65%"
              stopColor="#60A5FA"
              stopOpacity="0.07"
            />

            <stop
              offset="100%"
              stopColor="#60A5FA"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* ============================= */}
        {/* BACKGROUND GLOW */}
        {/* ============================= */}

        <motion.circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r="380"
          fill="url(#graphBackgroundGlow)"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ============================= */}
        {/* ENTIRE GRAPH FLOAT */}
        {/* ============================= */}

        <motion.g
          animate={{
            x: [-3, 3, -3],
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* EDGES */}

          {edges.map((edge, index) => (
            <Edge
              key={`edge-${index}`}
              edge={edge}
              nodes={nodes}
            />
          ))}

          {/* NODES */}

          {nodes.map((node, index) => (
            <Node
              key={`node-${node.id}`}
              node={node}
              delay={index * 0.1}
            />
          ))}

          {/* ============================= */}
          {/* TRAVELLING LIGHTS */}
          {/* ============================= */}

          {edges.map((edge, index) => {
            const from = nodes[edge.from];
            const to = nodes[edge.to];

            return (
              <motion.circle
                key={`pulse-${index}`}
                r="3"
                fill="#60A5FA"
                filter="url(#graphGlow)"
                animate={{
                  cx: [
                    from.x,
                    to.x,
                  ],

                  cy: [
                    from.y,
                    to.y,
                  ],

                  opacity: [
                    0,
                    1,
                    1,
                    0,
                  ],
                }}
                transition={{
                  duration: 2.8,
                  delay: index * 0.13,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}