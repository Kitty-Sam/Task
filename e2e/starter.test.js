describe('Launch screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('launch screen should have button with proper title', async () => {
        expect(element(by.id('Launch'))).toBeVisible();
        expect(element(by.id('Launch.label'))).toHaveText('Get started');
    });
    it('should tap on a button', async () => {
        await element(by.id('Launch')).tap();
    });
});
