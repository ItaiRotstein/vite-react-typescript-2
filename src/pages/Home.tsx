import { useEffect } from 'react';
import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import { CartState } from '../context/CartContext';
import productService from '../services/productService';

const Home = () => {

  const {
    productState: {
      products
    },
    filterState: {
      byStock,
      byFastDelivery,
      sort,
      byRating,
      searchQuery
    },
    productDispatch,
  } = CartState();

  useEffect(() => {
    const fetch = async () => {
      productDispatch({ type: 'GET_PRODUCTS', payload: await productService.getProducts() });
    };
    fetch();
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
  console.log(products);
  if (!products) return <h1>Loading...</h1>;

  return (
    <div className='flex'>
      <Filters />
      <div className=' flex flex-wrap justify-around'>
        {filterProducts().map(prod => (
          <ProductPreview prod={{ ...prod }} key={prod._id} />
        ))}
      </div>
    </div>
  );
};
export default Home;