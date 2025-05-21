import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {theme === "light" ? (
            <motion.i
              key="sun"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ri-sun-line text-xl text-amber-500"
            />
          ) : (
            <motion.i
              key="moon"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ri-moon-line text-xl text-indigo-400"
            />
          )}
        </AnimatePresence>
      </span>
    </Button>
  );
}
