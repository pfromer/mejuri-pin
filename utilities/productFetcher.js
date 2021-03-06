import getMockedEndpoint from '../mocks/category_endpoints'

async function getApiResponse(category) {
    let jsonRes = [];

    if (process.env.NEXT_PUBLIC_MOCK_API == "true") {
        jsonRes = getMockedEndpoint(category); //I stored all api endpoints in a file. this was helpful when developing under poor network conditions
    } else {
        const url = process.env.NEXT_PUBLIC_BASE_API_URL + category + '.json';
        jsonRes = await fetch(url)
            .then(function (response) {
                return response.json();
            }).catch(function (err) {
                console.log("------fetch error------", err);
                return getMockedEndpoint(category); //hack -- in case of error on api fetch let's return the mocked data
            });
    }

    return jsonRes;
}

export async function fetchProducts(category) {
    const jsonRes = await getApiResponse(category);
    const randomInt = (min, max) => min + Math.floor((max - min) * Math.random());

    const mapProducts = (products) => products.map(function (p) {
        const variant = randomInt(0, p.variant_images.length - 1)
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.NEXT_PUBLIC_BASE_IMAGES_URL + p.variant_images[variant].attachment_url_small,
            variant: variant,
            category: category,
            slug: p.slug
        }
    });

    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products)), [])
}

//hack for product detail api endpoint
export async function fetchProductDetail(category, id, variant) {
    const jsonRes = await getApiResponse(category);

    const mapProducts = (products) => products.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: process.env.NEXT_PUBLIC_BASE_IMAGES_URL + p.variant_images[variant].attachment_url_medium,
            variant: variant,
            category: category,
            slug: p.slug,
            otherImages: p.variant_images.map(_variant => process.env.NEXT_PUBLIC_BASE_IMAGES_URL + _variant.attachment_url_small)
        }
    });

    const product = jsonRes.reduce(
        (accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products.filter(p => p.id == id))), [])
        .filter(p => p.id == id)[0];

    const otherVariants = product.otherImages.map(function (image, index) {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: image,
            variant: index,
            category: category
        }
    }).filter(p => p.variant != variant)

    return {
        product: product,
        otherVariants: otherVariants
    }
}