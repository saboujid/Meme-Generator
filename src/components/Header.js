import React from 'react'
import troll from '../img/troll.png'

export default function Header() {
  return (
    <div className='Header'>
            <img src={troll} alt="" />
            <h2>MemeGenerator</h2>
    </div>
  )
}
