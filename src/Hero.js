import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return (
  <section className="hero">
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          millions of companies of all sizes-from startups to fortune 500s use 
          stripes software anbnd apis to accept payments, send payouts and 
          mange theiur busneseess online
        </p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt="phone" />
      </article>
    </div>
  </section>
    )
}

export default Hero
