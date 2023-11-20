import { useState } from "react";

type Product = {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export const Cart = () => {
    const [product, setProduct] = useState<Product>({ id: 0, name: "", price: 0, quantity: 0 });
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Arroz", quantity: 2, price: 20 }
    ]);

    const addItem = (product: Product) => {
        const itemExists = products.find(element => element.id === product.id);

        if (itemExists) {
            const updatedProducts = products.map((item) => {
                return item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            });
            setProducts(updatedProducts);
        } else {
            setProducts([
                ...products, 
                product
            ]);
        }
    }

    return (
        <div className="flex">
            <form action="" className="flex flex-col">
                <label htmlFor="">
                    Id
                    <input type="text" className="py-2 px-4 border-2 border-blue-500" onChange={(e) => setProduct((prevInput) => ({
                        ...prevInput,
                        id: Number(e.target.value)
                    }))} />
                </label>
                <label htmlFor="">
                    Name
                    <input type="text" className="py-2 px-4 border-2 border-blue-500" onChange={(e) => setProduct((prevInput) => ({
                        ...prevInput,
                        name: e.target.value
                    }))} />
                </label>
                <label htmlFor="">
                    Quantidade
                    <input type="text" className="py-2 px-4 border-2 border-blue-500" onChange={(e) => setProduct((prevInput) => ({
                        ...prevInput,
                        quantity: Number(e.target.value)
                    }))} />
                </label>
                <label htmlFor="">
                    Preço
                    <input type="text" className="py-2 px-4 border-2 border-blue-500" onChange={(e) => setProduct((prevInput) => ({
                        ...prevInput,
                        price: Number(e.target.value)
                    }))} />
                </label>
                <button className="bg-blue-500 w-full" onClick={(e) => {
                    e.preventDefault();
                    addItem({
                        id: product.id,
                        name: product.name,
                        quantity: product.quantity,
                        price: product.price
                    });
                }}>Adicionar</button>
            </form>
            <div>
                <ul>
                    {products.map((element) => <li>ID: {element.id} - {element.name} - Preço R$ {element.price} - Quantidade: {element.quantity}</li>)}
                </ul>
            </div>
        </div>
    );
}