import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

import { AppState } from '../context/AppContext';

import productService from '../services/productService';

import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import Pagination from '../components/Pagination';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    productState: { products },
    filterState,
    productDispatch,
  } = AppState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await productService.getProducts(filterState);
        productDispatch({
          type: 'GET_PRODUCTS',
          payload: productsData.data
        });
        productDispatch({
          type: 'GET_PRODUCTS_COUNT',
          payload: productsData.metadata.totalCount
        });
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [filterState]);

  const filterProducts = () => {
    let filteredProducts = products;

    // if (searchQuery) {
    //   filteredProducts = filteredProducts.filter((prod) =>
    //     prod.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // }
    return filteredProducts;
  };

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <>    <div className='flex'>
      <Filters />
      <div className=' flex flex-wrap justify-around'>
        {filterProducts().map(prod => (
          <ProductPreview prod={{ ...prod }} key={prod._id} />
        ))}
      </div>
    </div>
      <Pagination />
    </>

  );
};
export default Home;