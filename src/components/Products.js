import { useState } from "react";

function ProductsForm({ categories, setProducts }) {
    const [productsFormData, setProductsFormData] = useState({
        title: "",
        quantity: 0,
        categoryId: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProductsFormData({...productsFormData, [name]: value });
    };

    const addNewProduct = (e) => {
        e.preventDefault();
        const newProduct = { ...productsFormData, createdAt: new Date().toISOString(), id: new Date().getTime(), };
        setProducts((prevState) => [...prevState, newProduct ]);
        setProductsFormData({ title: "", quantity : "", categoryId: "" });
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
            <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
                <div>
                    <label htmlFor="product-title" className="block mb-1 text-slate-400">
                        title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="product-title"
                        className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
                        value={productsFormData.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="product-quantity" className="block mb-1 text-slate-400">
                        quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        id="product-quantity"
                        className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
                        value={productsFormData.quantity}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="product-category" className="block mb-1 text-slate-400">
                        category
                    </label>
                    <select
                        value={productsFormData.categoryId}
                        onChange={changeHandler}
                        name="categoryId"
                        id="product-category"
                        className ="bg-transparent rounded-xl text-slate-400 w-full"
                    >
                        <option className="bg-slate-500 text-slate-300" value="">
                            select a category
                        </option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id} className="bg-slate-500 text-slate-300" value={category.id}>
                                    {category.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="flex items-center justify-between gap-x-4 ">
                    {/* <button 
                        id="" 
                        className="flex-1 border border-slate-400 text-slate-400 py-2 rounded-xl"
                    >
                        Cancel
                    </button> */}
                    <button 
                        onClick={addNewProduct}
                        id="add-new-product" 
                        className="flex-1 text-slate-200 py-2 rounded-xl bg-slate-500"
                    >
                        Add New Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductsForm;