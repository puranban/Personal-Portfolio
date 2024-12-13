'use client';

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);
  if (!mount) {
    return null;
  }

  return (
    <Button
      size='sm'
      variant="outline"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      // size="icon"
    >
      {resolvedTheme === 'dark' ? 
        <Sun className="size-4 text-orange-300" />
        :
        <Moon className="size-4 text-sky-950" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
