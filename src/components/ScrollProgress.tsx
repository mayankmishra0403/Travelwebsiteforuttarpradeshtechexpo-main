import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (scrollPx / winHeightPx) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
            style={{
                background: `linear-gradient(90deg, #fb923c ${scrollProgress}%, transparent ${scrollProgress}%)`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
        />
    );
}
