import { createContext, useReducer, useContext, ReactNode } from 'react';
import { Product } from './../types/Product';

// 🧠 Actions ที่ทำได้
type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product };

// 🧠 State Structure
type State = {
  products: Product[];
};

// 🧠 สร้าง Context Interface
interface ProductContextProps extends State {
  dispatch: React.Dispatch<Action>;
}

// 🧠 Reducer
const productReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};

// 🧠 สร้าง Context
const ProductContext = createContext<ProductContextProps | undefined>(undefined);

// 🧠 สร้าง Provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// 🧠 Hook ดึงข้อมูลจาก Context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within ProductProvider');
  }
  return context;
};