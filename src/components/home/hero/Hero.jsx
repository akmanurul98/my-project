import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='SELAMAT DATANG DI WEBHOZZ' title='Keahlian Pendidikan Online Terbaik' />
            <p>UPGRADE YOUR SKILL!</p>
            <div className='button'>
              <button className='primary-btn'>
               MULAI SEKARANG <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
               LIHAT KURSUS <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
