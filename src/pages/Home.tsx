import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import { CartState } from '../context/CartContext';

const Home = () => {

  const { state: { products },
    filterState: {
      byStock,
      byFastDelivery,
      sort,
      byRating,
      searchQuery
    } } = CartState();

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

  return (
    <div className='flex'>
      <Filters />
      <div className=' flex flex-wrap justify-around'>
        {filterProducts().map(prod => (
          <ProductPreview prod={{ ...prod }} key={prod.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;