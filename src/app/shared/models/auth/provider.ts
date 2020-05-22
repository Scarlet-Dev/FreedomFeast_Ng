export interface Provider {
    name: string,
    owner: string,
    specialty: string,
    email: string,
    password: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string
    },
    menu: {
        name: string
        type: string,
        description: string,
        vegetarian: boolean,
        price: number
    },
    orders: {
        order_id: Number
    },
    date_opened: [string],
    time_opened: [string],
    image_path: string
}
