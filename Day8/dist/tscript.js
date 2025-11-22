// A: sum numbers
export function sum(a, b) {
    return a + b;
}
// B: capitalize a string
export function capitalize(str) {
    if (!str)
        return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// C: pick (utility for objects)
export function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
// D: delay (async helper)
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// E: safelyParseJSON
export function safelyParseJSON(value) {
    try {
        return JSON.parse(value);
    }
    catch {
        return null;
    }
}
