export const cellVariants = {
  initial: { scale: 0.8, opacity: 0, backgroundColor: "rgba(255, 255, 255, 0)" },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15 
    }
  },
  win: { 
    scale: [1, 1.2, 1],
    opacity: 1,
    backgroundColor: "rgba(76, 175, 80, 0.3)",
    transition: { 
      duration: 0.6, 
      repeat: 1 
    }
  }
};
