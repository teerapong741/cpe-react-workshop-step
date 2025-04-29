import { useContext } from "react";
import { ProductStore } from "../stores/product.store";

// 🧠 Hook ดึงข้อมูลจาก Context
export const useProductContext = () => {
  const context = useContext(ProductStore);
  if (!context) {
    throw new Error('useProductContext must be used within ProductProvider');
  }
  return context;
};