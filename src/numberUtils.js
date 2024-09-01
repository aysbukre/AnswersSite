const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

const images = importAll(require.context('./images/numberImages', false, /\.(png|jpe?g|svg)$/));

export const numberArray = Object.keys(images).map(key => ({
    url: images[key],
    title: key.split('.')[0],
    width: '30%',
}));
