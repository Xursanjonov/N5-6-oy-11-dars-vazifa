import React, { memo, useState } from 'react'
import ProductsCart from './ProductsCart';


const ProductsWrapper = ({ data, setModal, modal }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', ...new Set(data.map(item => item.category))];
    const filteredData = selectedCategory === 'All' ? data : data.filter(item => item.category === selectedCategory);

    return (
        <div className='w-[100%] py-8 flex flex-col items-start justify-center gap-12'>
            <div className="tabs px-8 flex items-center gap-5">
                {categories.map((category, index) => (
                    <button className={`btn btn-warning font-bold rounded-3xl text-black`}
                        key={index} onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="w-[100%] flex flex-wrap items-center justify-between gap-10">
                {filteredData.map(product => (
                    <ProductsCart key={product.id} el={product} setModal={setModal} modal={modal} />
                ))}
            </div>
        </div>

    )
}

export default memo(ProductsWrapper)