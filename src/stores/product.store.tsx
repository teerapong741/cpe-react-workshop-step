import { createContext, useReducer, ReactNode } from 'react';
import { ProductModel } from '../types/Product.model';

type Actions =
  | { type: 'SET_PRODUCTS'; payload: ProductModel[] }
  | { type: 'ADD_PRODUCT'; payload: ProductModel };

type State = {
  products: ProductModel[];
};

interface ProductStateProps extends State {
  dispatch: React.Dispatch<Actions>;
}

const productReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};


export const ProductStore = createContext<ProductStateProps | undefined>(undefined);

export const ProductStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  return (
    <ProductStore.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductStore.Provider>
  );
};

