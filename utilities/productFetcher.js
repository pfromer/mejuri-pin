import getMockedEndpoint from '../mocks/category_endpoints'

export async function fetchProducts(category) {

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
        const variant = randomInt(0, p.variant_images.length - 1)
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.BASE_IMAGES_URL + p.variant_images[variant].attachment_url_small,
            variant: variant,
            category: category
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products)), [])
}

//hack for single product url which I don´t have
export async function fetchProductDetail(category, id, variant) {

    let jsonRes = [];

    if (process.env.MOCK_API) {
        jsonRes = getMockedEndpoint(category);
    } else {
        const url = process.env.BASE_API_URL + category + '.json';
        const res = await fetch(url);
        jsonRes = await res.json();
    }

    const mapProducts = (products) => products.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.BASE_IMAGES_URL + p.variant_images[variant].attachment_url_small,
            variant: variant,
            category: category
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products.filter(p => p.id == id))), []).filter(p => p.id == id)[0];
}