// ---------------------------------------------------
// Day 9 — Objects, Functions & Generics
// ---------------------------------------------------

// ---------- Interfaces & Types ----------
interface User {
  id: number;
  name: string;
}

type OptionalUser = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserRoles = Record<string, string>;

// ---------- Function Type ----------
type TransformFn<T, U> = (value: T) => U;

// ---------- Generic Result<T> ----------
export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// ---------- safeMap ----------
export function safeMap<T, U>(
  arr: T[],
  mapper: TransformFn<T, U>
): Result<U[]> {
  try {
    const output = arr.map(mapper);
    return { success: true, data: output };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || "Unknown error during map",
    };
  }
}

// ---------- safeFilter ----------
export function safeFilter<T>(
  arr: T[],
  predicate: (item: T) => boolean
): Result<T[]> {
  try {
    const output = arr.filter(predicate);
    return { success: true, data: output };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || "Unknown error during filter",
    };
  }
}

// ---------- Example Usage ----------
const numbers = [1, 2, 3, 4];

console.log("safeMap →", safeMap(numbers, (n) => n * 2));
console.log("safeFilter →", safeFilter(numbers, (n) => n > 2));
