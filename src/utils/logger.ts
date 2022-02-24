export const customLog = (...args: any[]): void => {
    console.log.apply(console, args);
};
