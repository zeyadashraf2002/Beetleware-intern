// A: sum numbers
export function sum(a: number, b: number): number {
return a + b;
}


// B: capitalize a string
export function capitalize(str: string): string {
if (!str) return "";
return str.charAt(0).toUpperCase() + str.slice(1);
}


// C: pick (utility for objects)
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
const result = {} as Pick<T, K>;
for (const key of keys) {
if (key in obj) {
result[key] = obj[key];
}
}
return result;
}


// D: delay (async helper)
export function delay(ms: number): Promise<void> {
return new Promise(resolve => setTimeout(resolve, ms));
}


// E: safelyParseJSON
export function safelyParseJSON<T = unknown>(value: string): T | null {
try {
return JSON.parse(value) as T;
} catch {
return null;
}
}