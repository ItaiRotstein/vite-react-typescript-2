import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

//--Get products--
const getProducts = async (page: number) => {
    // console.log(page);
    
    const response = await axios.get(`${API_URL}/?p=${page}`);
    return await response.data;
    
};

//--Get products count--
const getProductsCount = async () => {
    const response = await axios.get(`${API_URL}/count`);
    return await response.data;
};

// //--Get product by ID--
// const getProductById = async (productId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL + productId, config);
//   return response.data;
// };

// //--Add product--
// const addProduct = async (product, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(API_URL, product, config);
//   return response.data;
// };

// //--Update product--
// const updateProduct = async (product, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.put(API_URL + product._id, product, config);
//   return response.data;
// };

// //--Delete product--
// const deleteProduct = async (productId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + productId, config);
//   return response.data;
// };

const productService = {
    getProducts,
    getProductsCount
    //   getProductById,
    //   addProduct,
    //   updateProduct,
    //   deleteProduct,
};

export default productService;