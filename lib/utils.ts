import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trimString(str: string): string {
  if (str.length > 250) {
    return str.slice(0, 250) + '...';
  }
  return str;
}

export function trimStringForEvent(str: string): string {
  if (str.length > 150) {
    return str.slice(0, 150) + '...';
  }
  return str;
}