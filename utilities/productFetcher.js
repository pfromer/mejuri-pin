import getMockedEndpoint from '../mocks/category_endpoints'

export async function fetchProducts(category) {

    let jsonRes = [];

    if (process.env.NEXT_PUBLIC_MOCK_API) {
        jsonRes = getMockedEndpoint(category);
    } else {
        const url = process.env.NEXT_PUBLIC_BASE_API_URL + category + '.json';
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
            image: process.env.NEXT_PUBLIC_BASE_IMAGES_URL + p.variant_images[variant].attachment_url_small,
            variant: variant,
            category: category
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products)), [])
}

//hack for product details api endpoint
export async function fetchProductDetail(category, id, variant) {

    let jsonRes = [];

    if (process.env.MOCK_API) {
        jsonRes = getMockedEndpoint(category);
    } else {
        const url = process.env.NEXT_PUBLIC_BASE_API_URL + category + '.json';
        const res = await fetch(url);
        jsonRes = await res.json();
    }

    const mapProducts = (products) => products.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.NEXT_PUBLIC_BASE_IMAGES_URL + p.variant_images[variant].attachment_url_small,
            variant: variant,
            category: category,
            otherImages: p.variant_images.map(_variant => process.env.NEXT_PUBLIC_BASE_IMAGES_URL + _variant.attachment_url_small)
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products.filter(p => p.id == id))), []).filter(p => p.id == id)[0];
}