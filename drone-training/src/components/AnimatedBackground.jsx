import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Drone-like hud elements
        const particles = Array.from({ length: 20 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.1
        }));

        const drawHexagon = (x, y, r) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x_i = x + r * Math.cos(angle);
                const y_i = y + r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x_i, y_i);
                else ctx.lineTo(x_i, y_i);
            }
            ctx.closePath();
            ctx.stroke();
        };

        const draw = () => {
            ctx.fillStyle = '#020617'; // Base dark color
            ctx.fillRect(0, 0, width, height);

            // Draw Grid (Flight map style)
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
            ctx.lineWidth = 1;
            const gridSize = 100;
            const offset = (Date.now() / 50) % gridSize;

            // Moving floor grid effect
            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines (moving down)
            for (let y = offset; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Floating Particles (Simulating drone lights/dust)
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Occasional connecting lines
                particles.forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist / 100)})`;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            // Randomized Scanning Line
            const scanY = (Date.now() / 10) % (height + 200) - 100;
            ctx.fillStyle = 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.1), transparent)'; // Canvas gradient is harder, simple rect for now
            // Approximate gradient with alpha
            ctx.fillStyle = 'rgba(6, 182, 212, 0.03)';
            ctx.fillRect(0, scanY, width, 50);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.08)';
            ctx.fillRect(0, scanY + 20, width, 10);

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default AnimatedBackground;
