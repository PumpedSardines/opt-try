
/**
 * A try catch without the catch being necessary
 * @param func - The function to run with try
 * @param fail - An optional catch function used to debugging
 */
export function attempt(func: () => never, fail?: (err: unknown) => never) {
    try {
        func();
    } catch (err) {
        fail?.(err);
    }
}