import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>Rp</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>MEMULAI</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
