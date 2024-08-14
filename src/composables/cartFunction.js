import { ref } from "vue";

const list = ref([]);
const carts = ref([]);
const total = ref(0);

export function Cart() {
    const addList = (id, quantity) => {
        const there = ref(false);

        if (list.value.length != 0) {
            list.value.forEach(element => {
                if (element.id == id) {
                    there.value = true;
                }
            });
            if (there.value) {
                const item = list.value.find(item => item.id === id);
                item.quantity += 1;
                console.log('update', list.value);
            } else {
                list.value.push({ id: id, quantity: quantity });
                console.log('new', list.value)
            }
        } else {
            list.value.push({ id: id, quantity: quantity });
            console.log('list', list.value)
        }
    }

    const addCart = (user) => {
        if (list.value.length != 0) {
            carts.value.length = 0;

            const products = list.value.map(element => {
                return {
                    id: element.id,
                    quantity: element.quantity
                };
            });

            fetch('https://dummyjson.com/carts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user,
                    products: products
                })
            })
                .then(res => res.json())
                .then(data => {
                    const items = data.products;
                    data.products.forEach(element => {
                        carts.value.push({ id: element.id, title: element.title, thumbnail: element.thumbnail, quantity: element.quantity, price: element.price });
                    });

                    total.value = data.total;
                });
        }
    };

    const updateDecCart = (id, quant) => {
        if (quant > 1) {
            const listing = list.value.find(item => item.id === id);
            listing.quantity -= 1;
            addCart(1);
        } else {
            list.value = list.value.filter(cart => cart.id !== id);
            addCart(1);
        }
    }

    const updateInCart = (id, quant) => {
            const listing = list.value.find(item => item.id === id);
            listing.quantity += 1;
            addCart(1);
    }

    const deleteCart = (id) => {
        if (list.value.length > 1) {
            list.value = list.value.filter(cart => cart.id !== id);
            addCart(1);
        } else {
            carts.value.length = 0;
            list.value.length = 0;
            console.log('all carts deleted successfully')
        }
    }

    return {
        addList,
        addCart,
        updateDecCart,
        updateInCart,
        deleteCart,
        carts,
        list,
        total,
    }
}