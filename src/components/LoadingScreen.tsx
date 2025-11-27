import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-blue-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-center">
                <motion.div
                    className="mb-8"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <h1 className="text-6xl font-bold gradient-text">DARSHAN360</h1>
                </motion.div>

                <motion.div
                    className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />
                </motion.div>

                <motion.p
                    className="mt-4 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Loading your journey...
                </motion.p>
            </div>
        </motion.div>
    );
}
