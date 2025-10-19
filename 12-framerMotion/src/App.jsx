import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        💫 Framer Motion Demo
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMostrar(!mostrar)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 mb-6"
      >
        {mostrar ? 'Ocultar Card' : 'Mostrar Card'}
      </motion.button>

      <AnimatePresence mode="wait">
        {mostrar && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 max-w-md"
          >
            <motion.h2 className="text-xl font-semibold mb-2" layoutId="title">
              🚀 Animações com Framer Motion
            </motion.h2>
            <p className="text-gray-600 mb-4">
              Este é um exemplo simples de como usar animações em React com a biblioteca Framer Motion.
            </p>
            <motion.div whileHover={{ rotate: 5, scale: 1.05 }} className="bg-blue-100 p-4 rounded-xl">
              <p className="text-blue-700 font-medium">Passe o mouse aqui ✨</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
