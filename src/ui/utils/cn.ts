import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names. Uses clsx for conditional classes.
 * Compatible with forgecore and design system tooling.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
