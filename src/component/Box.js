import React from 'react'

function Box(props) {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src='https://pixy.org/src/54/thumbs350/547045.jpg'
      />
      <h2>WIN</h2>
    </div>
  )
}

export default Box
