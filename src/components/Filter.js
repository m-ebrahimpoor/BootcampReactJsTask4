import { useState } from "react";

function Filter({ onSort, onSearch, sort, searchValue }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <label 
                    htmlFor="search-input" 
                    className="text-slate-500 text-lg"
                >
                    search
                </label>
                <input 
                    type="text" 
                    name="search-input" 
                    id="search-input" 
                    className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                    value={searchValue}
                    onChange={onSearch}
                />
            </div>
            <div className="flex items-center justify-between mb-6">
                <label 
                    htmlFor="sort-products" 
                    className="text-slate-500 text-lg"
                >
                    sort
                </label>
                <select 
                    name="sort-products" 
                    id="sort-products" 
                    class="bg-transparent text-slate-400 rounded-xl"
                    value={sort}
                    onChange={onSort}
                >
                    <option className="bg-slate-500 text-slate-300" value="">select a category</option>
                    <option className="bg-slate-500 text-slate-300" value="latest">latest</option>
                    <option className="bg-slate-500 text-slate-300" value="earliest">erliest</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;