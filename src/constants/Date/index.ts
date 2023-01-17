const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
export const date = new Date().toLocaleDateString('en', options);
