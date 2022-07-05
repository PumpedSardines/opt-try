type OptTryReturn<Args extends ReadonlyArray<unknown>, Return> = Return extends Promise<unknown> ?
    ((...args: Args) => Promise<Awaited<Return> | undefined>) :
    ((...args: Args) => Return | undefined)

/**
 * Try call a function and if it throws return undefined
 * @param func - The func to optRun
 * @returns Func results or undefined
 */
function optTry<Args extends ReadonlyArray<unknown>, Return>(func: (...args: Args) => Return): OptTryReturn<Args, Return> {
    // These type come from https://github.com/facebookexperimental/Recoil/blob/main/typescript/recoil.d.ts
    // useRecoilCallback hook types
    // Thanks facebook devs :)
    const test = ((...args: Args) => {
        try {
            const maybePromise = func(...args);

            if (maybePromise instanceof Promise) {
                return maybePromise
                    .catch(() => undefined);

            } else {
                return maybePromise;
            }
        } catch {
            return undefined
        }

    }) as OptTryReturn<Args, Return>;

    return test;
}

export { optTry };