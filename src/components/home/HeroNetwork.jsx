import { useEffect, useRef } from "react";

export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId;

    // ======================================
    // MOUSE
    // ======================================

    const mouse = {
      x: -1000,
      y: -1000,
    };

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    // ======================================
    // PARTICLES
    // ======================================

    const particles = [];

    const packets = [];

    function createParticles() {
      particles.length = 0;

      const particleCount = Math.max(
        160,
        Math.floor(
          (canvas.width * canvas.height) /
            9000
        )
      );

      for (
        let i = 0;
        i < particleCount;
        i++
      ) {
        particles.push({
          x:
            Math.random() *
            canvas.width,

          y:
            Math.random() *
            canvas.height,

          radius:
            Math.random() * 2 + 1,

          vx:
            (Math.random() - 0.5) *
            0.25,

          vy:
            (Math.random() - 0.5) *
            0.25,

          alpha:
            Math.random() * 0.5 +
            0.2,

          hub:
            Math.random() < 0.08,
        });
      }

      packets.length = 0;

      for (let i = 0; i < 8; i++) {
        packets.push({
          progress: Math.random(),

          speed:
            0.0012 +
            Math.random() *
              0.0015,

          from: Math.floor(
            Math.random() *
              particles.length
          ),

          to: Math.floor(
            Math.random() *
              particles.length
          ),
        });
      }
    }

    // ======================================
    // RESIZE
    // ======================================

    function resize() {
      const parent =
        canvas.parentElement;

      if (!parent) return;

      canvas.width =
        parent.clientWidth;

      canvas.height =
        parent.clientHeight;

      createParticles();
    }

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    // ======================================
    // ANIMATION
    // ======================================

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const time =
        performance.now() * 0.001;

      // ====================================
      // MOUSE GLOW
      // ====================================

      const gradient =
        ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        );

      gradient.addColorStop(
        0,
        "rgba(59,130,246,.12)"
      );

      gradient.addColorStop(
        1,
        "rgba(59,130,246,0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // ====================================
      // CONNECTIONS
      // ====================================

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const a = particles[i];
          const b = particles[j];

          const dx =
            a.x - b.x;

          const dy =
            a.y - b.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (distance > 130)
            continue;

          let opacity =
            ((130 - distance) /
              130) *
            0.18;

          const mouseDistance =
            Math.hypot(
              mouse.x - a.x,
              mouse.y - a.y
            );

          if (mouseDistance < 180) {
            opacity *= 2.2;
          }

          ctx.beginPath();

          ctx.moveTo(a.x, a.y);

          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle =
            `rgba(59,130,246,${opacity})`;

          ctx.lineWidth = 1;

          ctx.stroke();
        }
      }
            // ====================================
      // DATA PACKETS
      // ====================================

      packets.forEach((packet) => {
        if (
          !particles[packet.from] ||
          !particles[packet.to]
        ) {
          packet.from = Math.floor(
            Math.random() * particles.length
          );

          packet.to = Math.floor(
            Math.random() * particles.length
          );

          return;
        }

        const from =
          particles[packet.from];

        const to =
          particles[packet.to];

        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packet.progress = 0;

          packet.from = Math.floor(
            Math.random() * particles.length
          );

          packet.to = Math.floor(
            Math.random() * particles.length
          );
        }

        const x =
          from.x +
          (to.x - from.x) *
            packet.progress;

        const y =
          from.y +
          (to.y - from.y) *
            packet.progress;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          2.5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(96,165,250,.95)";

        ctx.shadowBlur =
          18 +
          Math.sin(time * 6) * 6;

        ctx.shadowColor =
          "#60A5FA";

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // ====================================
      // PARTICLES
      // ====================================

      particles.forEach((particle) => {
        particle.x += particle.vx;

        particle.y +=
          particle.vy +
          Math.sin(
            time +
              particle.x * 0.01
          ) *
            0.03;

        if (particle.x < 0)
          particle.x = canvas.width;

        if (particle.x > canvas.width)
          particle.x = 0;

        if (particle.y < 0)
          particle.y = canvas.height;

        if (particle.y > canvas.height)
          particle.y = 0;

        const dx =
          mouse.x - particle.x;

        const dy =
          mouse.y - particle.y;

        const distance =
          Math.sqrt(
            dx * dx +
              dy * dy
          );

        if (distance < 180) {
          particle.x += dx * 0.0007;
          particle.y += dy * 0.0007;
        }

        let size =
          particle.radius;

        size +=
          Math.sin(
            time * 1.5 +
              particle.x * 0.02
          ) * 0.15;

        if (particle.hub) {
          size +=
            Math.sin(
              time * 2 +
                particle.x
            ) * 0.6;
        }

        if (distance < 140) {
          size *= 2.2;
        }

        const opacity =
          distance < 140
            ? 1
            : particle.alpha;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(59,130,246,${opacity})`;

        ctx.shadowBlur =
          particle.hub
            ? 18
            : distance < 140
            ? 14
            : 0;

        ctx.shadowColor =
          "#3B82F6";

        ctx.fill();

        ctx.shadowBlur = 0;
      });
            // ====================================
      // NEXT FRAME
      // ====================================

      animationFrameId =
        requestAnimationFrame(
          animate
        );
    }

    // ====================================
    // START ANIMATION
    // ====================================

    animate();

    // ====================================
    // CLEANUP
    // ====================================

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0

        h-full
        w-full

        pointer-events-none

        -z-10
      "
    />
  );
}