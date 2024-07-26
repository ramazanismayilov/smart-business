import React from 'react'

export default function MainPart({ image, text, progressBar, price }) {
  return (
    <div className="item">
      <div className="image d-flex align-items-center justify-content-center rounded-3 p-2">
        {image}
      </div>
      <div className="text mt-3">
        {text}
        <div className="progress">
          {progressBar}
        </div>
        <div className="price mt-3">
          {price}
        </div>
      </div>
    </div>

  )
}