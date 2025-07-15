"use client";

import { Disc3Icon, FolderOpenDot, Home, UserRound } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const{ resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    top: {
      paddingLeft: "10rem",
      paddingRight: "10rem",
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
    },
    scrolled: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      backgroundColor: "hsla(var(--background) / 0.8)",
      borderColor: "hsl(var(--border))",
      backdropFilter: "blur(10px)",
      boxShadow:
        resolvedTheme === 'dark' ? "0 5px 10px 0px rgba(255,255,255,1)" : "0 5px 10px 0px rgba(0,0,0,0.5)",
    },
  };
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center justify-center h-12 border-b rounded-full "
        variants={navVariants}
        animate={isScrolled ? "scrolled" : "top"}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 80,
        }}
      >
        {/* ICONS */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost">
              <Home />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">
              <UserRound />
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost">
              <FolderOpenDot />
            </Button>
          </Link>
          <Link href="media">
            <Button variant="ghost">
              <Disc3Icon />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
