import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://www.jiomart.com/images/product/500x630/rvucldy77x/puma-men-s-scorch-runner-sports-running-shoes-black-high-risk-red-product-images-rvucldy77x-0-202207310146.jpg',
      name: ' Puma Shoes',
      category: 'Shoes',
      seller: 'Seller: Suhas Sagar',
      price: 1499
    },
    {
      url: 'https://www.gizmochina.com/wp-content/uploads/2020/09/Apple-Watch-Series-6-Aluminum-2-500x500.jpg',
      name: 'Apple Black Watch',
      category: 'Watches',
      seller: 'Seller: Nagendra M ',
      price: 2499
    },
    {
      url: 'https://s.yimg.com/uu/api/res/1.2/NjAJ8EV4F16wbxLQrpvV8g--~B/aD01MDA7dz01MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/2ed2c970-6764-11ed-b537-1a327a09ed9c',
      name: 'Mac Book Laptop',
      category: 'Laptops',
      seller: 'Seller: Abhisheek ',
      price: 75000
    },
    {
      url: 'https://5.imimg.com/data5/GI/AQ/LW/SELLER-17968898/dome-cctv-camera-500x500.jpg',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Seller: Miller',
      price: 3200
    },
    {
      url: 'https://i.ebayimg.com/images/g/BxEAAOSwoftivyPU/s-l500.jpg',
      name: 'Rolex Watch',
      category: 'Watches',
      seller: 'Seller: Pavan',
      price: 1500
    },
    {
      url: 'https://m.media-amazon.com/images/I/51tpWB42YPL.jpg',
      name: 'Hanuman Coffe Cup',
      category: 'Cup',
      seller: 'Seller: Jhon',
      price: 200
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;