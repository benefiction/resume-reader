import { customLog } from '../logger';

const mockConsoleLog = jest.fn();

describe('customLog', () => {
    beforeEach(() => {
        globalThis.console.log = jest
            .fn()
            .mockImplementationOnce(mockConsoleLog);
    });
    it('should call console.log with one param', () => {
        const testMsg = 'test message';
        customLog(testMsg);
        expect(mockConsoleLog).toHaveBeenCalledWith(testMsg);
    });

    it('should call console.log multiple params', () => {
        const testMsg = ['test message', 1, 2, 3];
        customLog(...testMsg);
        expect(mockConsoleLog).toHaveBeenCalledWith(...testMsg);
    });
});
