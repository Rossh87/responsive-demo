import testCheck from './index';

describe('The function testCheck', () => {
    it('should return a reassuring message', () => {
        const affirmation = testCheck();
        expect(affirmation).toEqual('Tests are working!');
    });
});