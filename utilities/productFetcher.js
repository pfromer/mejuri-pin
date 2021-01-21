import getMockedEndpoint from '../mocks/category_endpoints'

export default async function fetchProducts(category) {

    let jsonRes = [];

    if (process.env.MOCK_API) {
        jsonRes = getMockedEndpoint(category);
    } else {
        const url = process.env.BASE_API_URL + category + '.json';
        const res = await fetch(url);
        jsonRes = await res.json();
    }

    const randomInt = (min, max) => min + Math.floor((max - min) * Math.random());


    const mapProducts = (products) => products.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.BASE_IMAGES_URL + p.variant_images[randomInt(0, p.variant_images.length - 1)].attachment_url_small
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products)), [])
}