import React from 'react'
import "./Card.css"

const Card = ({ item }) => {
  return (
    <div className="card" >
      <img src={item?.data?.current?.condition?.icon} alt="" />
      <span>{item?.data?.current?.condition?.text}</span>
      <h1>{item?.data?.current?.temp_c}°C</h1>
      <h2>{item?.data?.location?.name}, {item?.data?.location?.country}</h2>
    </div>
  )
}
export default Card
