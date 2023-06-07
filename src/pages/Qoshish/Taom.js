import React from 'react'
import { useState } from 'react'
import TaomStyle from './Taomstyl'

export default function Taom() {
  // const [addrasm, setadFut] = useState('')
  return (
    <TaomStyle>
        {/* <h1>ss</h1> */}
        <input type="text" className='mt-5' placeholder="Rasmga yo'l" />
        <input type="text" placeholder='Taom nomi' />
        <textarea placeholder="Ta'rif"></textarea>
        <input type="text" placeholder='Narxi' />
        <input type="text" placeholder='Kategoriya' />
        <div className="box w-100 d-flex mt-5 justify-content-center">
        <button className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3">
          Qo'shish
        </button>
      </div>
    </TaomStyle>
  )
}
