async function hasText(id, text) {
    try {
        await expect(element(by.id(id))).toHaveText(text);
        return true;
    } catch (err) {
        return false;
    }
}

describe('Todos', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('todos category list should contain School title', async () => {
        expect(element(by.id('listItem.3'))).toHaveText('School');
    });

    it('todos category list should contain Read title', async () => {
        expect(element(by.id('listItem.2'))).toHaveText('Read');
    });

    it('todos category list should not have Shop title on the second position', async () => {
        await expect(element(by.id('listItem.2'))).toBeVisible();
        let result = await hasText('listItem.2', 'Shop');
        if (result) {
            throw new Error('Should not have Shop, but did.');
        }
    });
});
