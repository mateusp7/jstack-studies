import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeSessionStorageGetItem<T>(key: string): T | null {
  try {
    const item = sessionStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return null;
  }
}
