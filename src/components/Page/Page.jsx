import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import About from '../About/About';
import Cart from '../Cart/Cart';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Page;