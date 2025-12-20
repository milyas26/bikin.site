import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  Atom,
  Box,
  Server,
  Database,
  Layers,
  Leaf,
  Flame,
  Link as LinkIcon,
  Braces,
  Hexagon,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const stackIcon = (label: string) => {
  const key = label.toLowerCase();
  if (key.includes("react")) return Atom;
  if (key.includes("next")) return Braces;
  if (key.includes("bootstrap")) return Box;
  if (key.includes("express")) return Server;
  if (key.includes("mysql")) return Database;
  if (key.includes("redux")) return Layers;
  if (key.includes("mongo")) return Leaf;
  if (key.includes("sass")) return Flame;
  if (key.includes("signal")) return LinkIcon;
  if (key.includes("laravel")) return Hexagon;
  if (key.includes("jquery")) return Braces;
  if (key.includes("firebase")) return Flame;
  return Box;
};
