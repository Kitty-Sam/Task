describe('Launch screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('launch screen should have button with proper title', async () => {
       await expect(element(by.id('Launch'))).toBeVisible();
       await expect(element(by.id('Launch.label'))).toHaveText('Get started');
    });

    it('should tap on a button', async () => {
        await element(by.id('Launch')).tap();
    });

});
