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

    // it('Should open color picker', async () => {
    //     await element(by.id('CategoryColor')).tap()
    //     const picker = element(by.id('CategoryColor').withAncestor(by.id('CategoryColor')))
    //     await picker.swipe("up", 'fast')
    // });
    //
    // it('Should open icon picker', async () => {
    //     await element(by.id('CategoryIcon')).tap()
    //     const picker = element(by.id('CategoryIcon').withAncestor(by.id('CategoryIcon')))
    //     await picker.swipe("up", 'fast')
    // });

    it('Button save', async () => {
        const button = element(by.id('CategorySave'))
        await expect(button).toBeVisible();

    });

    it('Button cancel', async () => {
        const button = element(by.id('CategoryCancel'))
        await expect(button).toBeVisible();
        await button.tap();
    });




});
