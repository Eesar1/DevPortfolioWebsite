import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300 overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === 'light' ? (
          <motion.i 
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="ri-sun-line text-xl text-amber-500"
          />
        ) : (
          <motion.i 
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="ri-moon-line text-xl text-indigo-400"
          />
        )}
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white dark:from-slate-900 dark:to-slate-800 rounded-full"
        initial={false}
        animate={{ 
          scale: theme === 'light' ? [0.8, 1] : [0.8, 1],
          opacity: 1 
        }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 0 }}
      />
    </Button>
  );
}
