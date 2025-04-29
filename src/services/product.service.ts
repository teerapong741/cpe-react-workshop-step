import { ProductModel } from '../types/Product.model';

const API_URL = 'http://localhost:3001/products';

// จำลองการดึงข้อมูล (Mock API)
export const ProductService = {
  getProductList: async (): Promise<ProductModel[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  },

  getProductById: async (id: number): Promise<ProductModel> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  },

  addProduct: async (product: Omit<ProductModel, 'id'>): Promise<ProductModel> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    return await response.json();
  },
};