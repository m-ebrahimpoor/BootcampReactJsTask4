import { useState } from "react";
import './App.css';
import CategoryForm from './components/Category';
import NavBar from './components/NavBar';
import ProductList from "./components/ProductList";
import ProductsForm from './components/Products';

// const products = [
//   {
//     id: 1,
//     title: "yogurt",
//     category: "dairy",
//     cratetedAt: "2025-01-09T15:35:06.875Z",
//   },
//   {
//     id: 2,
//     title: "milk",
//     category: "dairy",
//     cratetedAt: "2025-01-09T15:35:43.216Z",
//   },
//   {
//     id: 3,
//     title: "cheese",
//     category: "dairy",
//     cratetedAt: "2025-01-09T15:36:24.520Z",
//   },
//   {
//     id: 4,
//     title: "butter",
//     category: "dairy",
//     cratetedAt: "2025-01-09T15:36:52.929Z",
//   },
//   {
//     id: 5,
//     title: "egg",
//     category: "protein",
//     cratetedAt: "2025-01-09T15:48:48.822Z",
//   },
//   {
//     id: 6,
//     title: "chicken meat",
//     category: "protein",
//     cratetedAt: "2025-01-09T15:56:13.180Z",
//   },
//   {
//     id: 7,
//     title: "fish",
//     category: "protein",
//     cratetedAt: "2025-01-09T15:56:18.919Z",
//   },
//   {
//     id: 8,
//     title: "beef",
//     category: "protein",
//     cratetedAt: "2025-01-09T15:56:21.475Z",
//   },
// ];

// const categories = [
//   {
//     id: 1,
//     title: "dairy",
//     description: "dairy products",
//     cratetedAt: "2025-01-09T15:40:20.372Z",
//   },
//   {
//     id: 2,
//     title: "protein",
//     description: "protein products",
//     cratetedAt: "2025-01-09T15:46:52.143Z",
//   },
// ];

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="">
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <ProductList products={products} />
        </div>
      </div>
    </div> 
  );
}

export default App;

// 1. data flow =>  form : products + categories
// 2. storage =>
// 3. context API ??
// 4.