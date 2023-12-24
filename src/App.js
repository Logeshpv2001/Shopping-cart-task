import React, { useState } from 'react';
import Footer from './Footer';

const Navbar = ({ cartItems }) => {
  const navbarStyle = {

    padding: '10px',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '100px'
  };

  const linkStyle = {
    marginRight: '10px',
    listStyleType: 'none',
  };

  const cartButtonStyle = {
    marginLeft: 'auto',
    fontSize: '20px',
  };

  const cartNameStyle = {
    marginRight: '10px',
  };

  return (
    <nav style={navbarStyle}>
      <div className='guvi' style={cartNameStyle}> <h1>Guvi's Shopping Cart </h1></div>
      <ul style={{ display: 'flex', alignItems: 'center' }}>
        <li style={linkStyle}>Home</li>
        <li style={linkStyle}>About</li>
        <li style={linkStyle}>Contact</li>
      </ul>
      <button className='btn' style={cartButtonStyle}> 🛒 Cart ({cartItems.length})</button>
    </nav>
  );
};


const Header = () => {
  const headerStyle = {
    backgroundColor: '#212529',
    textAlign: 'center',
    padding: '20px',
    color: 'white'

  };

  return (
    <div style={headerStyle}>
      <h1>Shop in style</h1>
      <p>With this shop homepage template</p>
    </div>
  );
};




const ProductList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div>
      <br />
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            {cartItems.includes(product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Quantity: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>
            Item {item}{' '}
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {

  const initialProducts = [
    { id: 1, name: 'Iphone 15 ', price: 19.99, description: 'Description 1', image: 'https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Iphone 15', price: 29.99, description: 'Description 2', image: 'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Iphone 15 Pro', price: 39.99, description: 'Description 3', image: 'https://m.media-amazon.com/images/I/81CgtwSII3L._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 1, name: 'Iphone 15', price: 19.99, description: 'Description 1', image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Iphone 15', price: 29.99, description: 'Description 2', image: 'https://m.media-amazon.com/images/I/71zFRCcMS2L._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Iphone 15 Pro', price: 39.99, description: 'Description 3', image: 'https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 1, name: 'Iphone 15', price: 19.99, description: 'Description 1', image: 'https://m.media-amazon.com/images/I/71nvkHnPpZL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Iphone 15', price: 29.99, description: 'Description 2', image: 'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg' },


  ];



  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((prevItems) => [...prevItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== productId));
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Header />
      <ProductList
        products={initialProducts}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
