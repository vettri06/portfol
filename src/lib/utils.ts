import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Language = "ja" | "en";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
