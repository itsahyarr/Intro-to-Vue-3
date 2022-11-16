const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            // inStock: false
            inventory: 10,
            
            // My code challenge solution
            onSale: true
        }
    }
})
