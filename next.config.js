module.exports = {
    images: {
        domains: ['dto508s2j2p46.cloudfront.net']
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/category/shop_all',
                permanent: true,
            },
        ]
    },

}