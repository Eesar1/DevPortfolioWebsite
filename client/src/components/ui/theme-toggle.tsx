import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <i className="ri-sun-line text-xl"></i>
      ) : (
        <i className="ri-moon-line text-xl"></i>
      )}
    </Button>
  );
}
