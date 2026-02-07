import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import StartingSoon from "./pages/StartingSoon.jsx";
import Home from "./pages/Home.jsx";
import StreamLayout from "./pages/StreamLayout.jsx";

export default function App() {
  useEffect(() => {
    const canvas = document.getElementById("cursor-canvas");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    let mouse = { x: 0, y: 0 };

    const colors = [
      "rgba(255,182,193,0.8)", // baby pink
      "rgba(255,210,230,0.7)",
      "rgba(255,200,215,0.6)",
    ];

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 2,
          y: mouse.y + (Math.random() - 0.5) * 2,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * -0.6,
          size: Math.random() * 2 + 1.5,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          return;
        }

        ctx.beginPath();
        ctx.fillStyle = p.color.replace("0.", `${p.alpha}`);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16; // 🔥 stronger glow
        ctx.arc(p.x, p.y, p.size + 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<StartingSoon />} />

      <Route
        path="/home"
        element={
          <StreamLayout>
            <Home />
          </StreamLayout>
        }
      />
    </Routes>
  );
}
