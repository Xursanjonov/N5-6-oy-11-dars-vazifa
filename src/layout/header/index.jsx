import React, { Fragment, memo } from 'react'
import { Link } from 'react-router-dom'
// import icons
import logo from '../../assets/icons/logo.svg'
import location from '../../assets/icons/location.svg'
import tel from '../../assets/icons/tel.svg'
import shop from '../../assets/icons/shop.svg'
import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import ok from '../../assets/icons/ok.svg'

const Header = () => {
    return (
        <Fragment>
            <div className="w-[100%] hidden xl:block 2xl:block mx-auto py-2 bg-[#F7EBE5]">
                <div className="header-top max-w-[1480px] text-sm mx-auto flex items-center justify-between">
                    <div className="flex items-center justify-start gap-8">
                        <p>Гарантия свежести</p>
                        <p>Доставка и оплата</p>
                        <p>Оптовые поставки</p>
                        <p>Контакты</p>
                    </div>
                    <ul className='flex items-center gap-8'>
                        <li className='flex items-center gap-1'>
                            <img src={location} alt="" />
                            <select name="" id="" className='bg-transparent'>
                                <option value="rus">Санкт-Петербург</option>
                                <option value="uzb">Toshkent</option>
                            </select>
                        </li>
                        <li className='flex items-center gap-1'>
                            <img src={tel} alt="" />
                            <p>8 812 309-82-88</p>
                        </li>
                        <li className='flex items-center gap-1'>
                            <img src={shop} alt="" />
                            <p>B корзине (4 товара)</p>
                        </li>
                    </ul>
                    <div className="flex items-center justify-end gap-3">
                        <img className='cursor-pointer' src={tg} alt="Telegram icon" />
                        <img className='cursor-pointer' src={vk} alt="VK icon" />
                        <img className='cursor-pointer' src={ok} alt="OK icon" />
                    </div>
                </div>
            </div>
            <header className='w-[100%] mx-auto bg-white shadow-md'>
                <nav className='max-w-[1480px] mx-auto py-2 flex items-center justify-between'>
                    <Link to={'/'} className='text-lg font-semibold' > СЛАДКИЕ ДНИ </Link>
                    <select className='text-lg font-semibold'>
                        <option value="value1">подарочные наборы</option>
                        <option value="value2">подарочные</option>
                        <option value="value3">наборы</option>
                    </select>
                    <Link to={'/'} className='text-lg font-semibold' > Собрать набор </Link>
                    <Link to={'/'} > <img className='w-[80px]' src={logo} alt="" /> </Link>
                    <Link to={'/'} className='text-lg font-semibold' > Создать дизайн </Link>
                    <select className='text-lg font-semibold'>
                        <option value="value1">КОМПАНИЯМ</option>
                        <option value="value2">КОМПАНИЯМ</option>
                        <option value="value3">КОМПАНИЯМ</option>
                    </select>
                    <select className='text-lg font-semibold'>
                        <option value="value1">ВЕСЬ КАТАЛОГ</option>
                        <option value="value2">ВЕСЬ</option>
                        <option value="value3">КАТАЛОГ</option>
                    </select>
                </nav>
            </header>
        </Fragment>
    )
}

export default memo(Header)