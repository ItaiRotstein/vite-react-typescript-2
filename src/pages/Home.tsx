import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import { CartState } from '../context/CartContext';
import { ProductType } from '../types/ProductType';

type State = {
  products: ProductType[];
};

const Home = () => {

  const { state: { products } }: { state: State; } = CartState();

  return (
    <div className='flex'>
      <Filters />
      <div className=' flex flex-wrap justify-around'>
        {products.map(product => (
          <ProductPreview product={{ ...product }} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;