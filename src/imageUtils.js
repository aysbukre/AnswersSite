const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

// Import all images from the '../images' directory
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export const imageArray = Object.keys(images).map(key => ({
    url: images[key],
    title: key.split('.')[0],
    width: '30%',
}));
