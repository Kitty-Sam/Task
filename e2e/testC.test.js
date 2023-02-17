describe('Add category modal screen', () => {
    beforeAll(async () => {
        await device.launchApp();
        await element(by.id('Launch')).tap();
        await element(by.id('categoryItem.1')).tap();
    });


    const typedTitleText = 'car';
    it('Should type car', async () => {
        const input = element(by.id('CategoryTitle'))
        await input.typeText(typedTitleText)
    });

    it('Should open icon picker', async () => {
        const picker = element(by.id('CategoryIcon'))
        await picker.tap()
        const proper_item = element(by.id('car'))
        await proper_item.tap()
    });

    it('Button cancel', async () => {
        const button = element(by.id('CategoryCancel'))
        await expect(button).toBeVisible();
    });

    it('Button save', async () => {
        const button = element(by.id('CategorySave'))
        await expect(button).toBeVisible();
        await button.tap();

    });






});
