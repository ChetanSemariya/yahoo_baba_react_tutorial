import ProductCard from "./ProductCard"

const products = [
    {id:1,name:"Laptop",price:800},
    {id:2,name:"Phone",price:500},
    {id:3,name:"HeadPhones",price:100},
    {id:4,name:"KeyBoard",price:300},
    {id:5,name:"Mouse",price:50},
    {id:6,name:"Charger",price:200},
    {id:6,name:"Plug",price:900},
    {id:6,name:"KeyCover",price:100},
]


export default function ProductList() {
    return (
        <div className="row">
            {products.map((p) => (
                <div key={p.id} className="col-md-3 mb-4">
                    <ProductCard product={p} />
                </div>
            ))}
        </div>
    )
}