import { motion } from 'motion/react';

export function FloatingElements() {
    const shapes = [
        { size: 60, delay: 0, duration: 6, x: '10%', y: '20%' },
        { size: 40, delay: 1, duration: 8, x: '80%', y: '30%' },
        { size: 80, delay: 2, duration: 7, x: '60%', y: '70%' },
        { size: 50, delay: 0.5, duration: 9, x: '20%', y: '80%' },
        { size: 35, delay: 1.5, duration: 6.5, x: '90%', y: '60%' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.x,
                        top: shape.y,
                        background: `radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent)`,
                        filter: 'blur(20px)',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
