import { useSelector } from 'react-redux';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import About from '../About/About';
import Cart from '../Cart/Cart';

const Page = () => {
  const currentPage = useSelector(state => state.page);

  switch (currentPage) {
    case 'home':
      return <Home />;
    case 'shop':
      return <Shop />;
    case 'about':
      return <About />;
    case 'cart':
      return <Cart />;
    default:
      return <Home />;
  }
};

export default Page;