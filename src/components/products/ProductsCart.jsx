import React from 'react'
import { Link } from 'react-router-dom'
import shop from '../../assets/icons/shop.svg'

const ProductsCart = ({ el, setModal }) => {
    return (
        <div className="product-cart w-[400px] h-[550px] mx-auto flex flex-col justify-between border-2 rounded-md bg-white">
            <div className="w-[396px] h-[400px] border-b-2" onClick={() => setModal({})} >
                <img className='w-[100%] h-[100%] cursor-pointer object-contain' src={el.images[0]} alt="" />
            </div>
            <div className="product-cart-info px-5">
                <Link to={`/products/${el.id}`} className='text-xl font-bold'>
                    <span className='text-green-500'>{el.id}.</span> {el.title}
                </Link>
                <p className='w-[100%]'>24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов </p>
            </div>
            <div className="product-cart-price w-[100%] flex justify-between">
                <p className='flex-1 px-5 py-2 text-xl font-bold border-t-2 text-red-500'>{el.price}0 руб</p>
                <button className='px-5 py-2 text-md font-bold flex items-center gap-3 border-t-2 border-s-2'>
                    <img src={shop} alt="shop icon" />
                    B корзину
                </button>
            </div>
        </div>
    )
}

export default ProductsCart