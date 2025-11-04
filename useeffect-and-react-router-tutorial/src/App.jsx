import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Product from "./Product"
import Phone from "./Phone"
import Laptop from "./Laptop"

function App() {

  function User() {
    console.log(useParams());
    const { id } = useParams()
    return <h2>User Profile for Id : {id}</h2>
  }

  function NotFound() {
    return <h2>404 - Page Not Found</h2>
  }

  return (
    <BrowserRouter>
      <h2>React Router Example</h2>

      {/* With the help of anchor tag */}
      {/* <a href="/">Home</a> |
      <a href="/about">About</a> | 
      <a href="/contact">Contact</a> */}

      {/* // With the help of Link tag */}
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> |
        <Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user/:id" element={<User />}></Route>

        {/* Nested Route */}
        <Route path="/products" element={<Product />}>
            <Route path="phone" element={<Phone />}></Route>
            <Route path="laptop" element={<Laptop />}></Route>
        </Route>

        {/* FallBack Route or Universal route */}
        <Route path="*" element={<NotFound />}></Route> 
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
