import React from 'react';
import './Card.css'

const Card = (props) => {
  const {title, image, onPlay} = props;
  return (
    <div className="card" onClick={onPlay}>
      <img src={image}/>
      <h3>{title}</h3>
    </div>
  )
}

export default Card;
