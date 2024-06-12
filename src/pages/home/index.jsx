import React, { memo, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import baseUrl from '../../config'
import ProductsWrapper from '../../components/products/ProductsWrapper'
import Modal from '../../components/modal'
import ProductsCart from '../../components/products/ProductsCart'

const next = '>'

const Home = () => {
    const local = JSON.parse(localStorage.getItem('all')) || null
    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState(local)
    const limit = searchParams.get('limit') ?? 6

    function getData() {
        baseUrl(`/products`, { params: { limit: limit } })
            .then(res => setData(res.data.products))
            .catch(er => console.error(er))
    }
    useEffect(() => {
        getData()
    }, [limit])
    
    useEffect(() => {
        localStorage.setItem('all', JSON.stringify(data))
    }, [data])

    const show = searchParams.get('modal')

    return (
        <section className='w-[100%] mx-auto my-12 flex flex-col items-center gap-5'>
            <p className='text-center'>
                Главная {next} Каталог {next} <span className='text-blue-500'>Готовые наборы</span>
            </p>
            <h2 className='text-center mb-5 text-4xl font-bold'>Готовые наборы</h2>
            {
                data ? <ProductsWrapper key={nanoid()} data={data} setModal={setSearchParams} modal={searchParams} /> : <></>
            }
            <button onClick={() => setSearchParams({ limit: +searchParams.get('limit') + 3 })} className="`w-[250px] mt-5 btn btn-outline
                text-lg font-semibold rounded-sm text-black hover:btn-info border-blue-500 text-black`">
                Показать ещё
            </button>
            {
                show ? (
                    <Modal key={nanoid()} >
                        <ProductsCart setModal={setSearchParams} key={nanoid()} />
                    </Modal>
                ) : <></>
            }
        </section >
    )
}

export default memo(Home)