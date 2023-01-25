enum Chapters {
    SHOP = 'Shop',
    WORK = 'Work',
    SCHOOL = 'School',
    READ = 'Read',
    WORK_OUT = 'Work out',
}
export const getProperIconName = (text: string) => {
    switch (text) {
        case Chapters.SHOP:
            return 'shopping-cart';
        case Chapters.WORK:
            return 'briefcase';
        case Chapters.WORK_OUT:
            return 'child';
        case Chapters.READ:
            return 'book';
        case Chapters.SCHOOL:
            return 'graduation-cap';
        default:
            return 'shopping-cart';
    }
};
