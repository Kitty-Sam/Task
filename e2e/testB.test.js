describe('Todos screen', () => {
    beforeAll(async () => {
        await device.launchApp();
        await element(by.id('Launch')).tap();
    });


    const typedInitText = 'hello, world';
    it('Should type Hello world', async () => {
        const input = element(by.id('Search'))
        await input.typeText(typedInitText)
        await input.clearText();
    });

    const typedProperText = 'edit';
    it('Should type edit', async () => {
        const input = element(by.id('Search'))
        await input.typeText(typedProperText)
        await expect(element(by.id('categoryItem.2'))).toBeVisible();
        await input.clearText();
    });

    it('Period item Today', async () => {
        await expect(element(by.id('Today'))).toBeVisible();
        await expect(element(by.id('Today.label'))).toHaveText("Today");
    });

    it('Period item Week', async () => {
        await expect(element(by.id('Week'))).toBeVisible();
        await expect(element(by.id('Week.label'))).toHaveText("Week");
    });

    it('Period item Month', async () => {
        await expect(element(by.id('Month'))).toBeVisible();
        await expect(element(by.id('Month.label'))).not.toHaveText("Today");
    });

    it('Category should not have shop title', async () => {
        await expect(element(by.id('categoryItem.2'))).toBeVisible();
        await expect(element(by.id('categoryItem.2.label'))).not.toHaveText("shop");
    });

    it('Category should have add title', async () => {
        await expect(element(by.id('categoryItem.1'))).toBeVisible();
        await expect(element(by.id('categoryItem.1.label'))).toHaveText("add");
        await element(by.id('categoryItem.1')).tap();
        await element(by.id('CategoryCancel')).tap();
    });


});
