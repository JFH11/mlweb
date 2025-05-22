document.addEventListener('alpine:init', () => {
    Alpine.data('produk', () => ({
        data: [

            {
                namaProduk: 'Wush Club 16S Boxy Fit Heavyweight Tee',
                gambarProduk: 'Wush Club.webp',
                hargaProduk: 'Rp 64.000',
            },

            {
                namaProduk: 'Infinide T-Shirt Kaos Polos BIG OVERSIZE',
                gambarProduk: 'Infinide T-Shirt.webp',
                hargaProduk: 'Rp 50.000',
            },

            {
                namaProduk: 'POLOS BOXY FIT OVERSIZE T SHIRT',
                gambarProduk: 'POLOS BOXY FIT.webp',
                hargaProduk: 'Rp 54.000',
            },

            {
                namaProduk: 'Okechuku SAM Celana Panjang Pria Loose Pants',
                gambarProduk: 'Okechuku SAM.webp',
                hargaProduk: 'Rp 125.000',
            },

            {
                namaProduk: 'Madless Celana Pendek Pria Hitam',
                gambarProduk: 'Madless Celana Pendek.webp',
                hargaProduk: 'Rp 67.000',
            },

            {
                namaProduk: 'FortKlass Kaos SPORTY Regular Fit',
                gambarProduk: 'FortKlass Kaos SPORTY Regular Fit.webp',
                hargaProduk: 'Rp 54.000',
            },

            {
                namaProduk: 'Nathalie Short Pants Wanita Ice Silk',
                gambarProduk: 'Nathalie Short Pants Wanita Ice Silk.webp',
                hargaProduk: 'Rp 46.800',
            },

            {
                namaProduk: 'Celana Pendek Wanita Hot Pants Kekinian',
                gambarProduk: 'Celana Pendek Wanita Hot Pants Kekinian.webp',
                hargaProduk: 'Rp 17.499',
            },

            {
                namaProduk: 'Roughneck H452 Black Aura Camouflage 1991',
                gambarProduk: 'Roughneck H452 Black Aura Camouflage 1991.webp',
                hargaProduk: 'Rp 54.000',
            },
        ],

        searchQuery: '',

        get filteredData() {
            if (!this.searchQuery) {
                return this.data;
            }
            return this.data.filter(item =>
                item.stock.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    }));
});