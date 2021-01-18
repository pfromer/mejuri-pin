export default async function fetchProducts(category) {

    const url = 'http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/' + category + '.json';

    const res = await fetch(url);
    const jsonRes = await res.json();

    const mapProducts = (products) => products.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.variant_images[0].attachment_url_small
        }
    });


    return jsonRes.reduce((accumulator, currentValue) => accumulator.concat(mapProducts(currentValue.products)),
        [])

}