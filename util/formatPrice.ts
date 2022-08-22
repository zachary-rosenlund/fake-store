export default function formatPrice(price: number) {
    return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}
