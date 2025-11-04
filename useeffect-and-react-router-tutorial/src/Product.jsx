import { Link, Outlet } from "react-router-dom"

export default function Product() {
    return (
        <div>
            <h2>Product Page</h2>
            <nav>
                <Link to="phone">Phone</Link>  |
                <Link to="laptop">Laptop</Link>
            </nav>

            <Outlet />
        </div>
    )
}

// Outlet = jab bhi hum component load krte hai to vo kaha load hoga yhh outlet batata hai for ex- agar humne outlet ko niche likha hai to component ka data niche load hoga and agar upar likha hai to data upar load hoga