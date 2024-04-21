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
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = AppState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        productDispatch({
          type: 'GET_PRODUCTS',
          payload: await productService.getProducts(0)
        });
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  const filterProducts = () => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === 'lowtohigh' ?
          Number(a.price) - Number(b.price) :
          Number(b.price) - Number(a.price)
      );
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.rating >= byRating
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      );
      // const regex = new RegExp(searchQuery, 'i');
      // filteredProducts = filteredProducts.filter(prod =>
      //   regex.test(prod.name)
      // );
    }
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