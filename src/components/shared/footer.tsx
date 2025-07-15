"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Button
            variant="ghost"
            className="text-muted-foreground cursor-pointer"
          >
            <Lightbulb
              size={100}
              color="#B5FF6D"
              height="10px"
              width="10px"
              className="animate-caret-blink"
            />{" "}
            <span>Available For Work</span>
          </Button>
          <div className="flex gap-1">
            <span className="text-muted-foreground my-auto">made with </span>
            <Image src="/fire.gif" width={20} height={5} alt="fire" className="opacity-45"/>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/VAS-18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <GithubLogoIcon size={24} weight="regular" />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <XLogoIcon size={24} weight="regular" />
              <span className="sr-only">X / Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedinLogoIcon size={24} weight="regular" />
              <span className="sr-only">Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
