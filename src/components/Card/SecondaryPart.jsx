import React from 'react'

export default function SecondaryPart({ image, text, price }) {
    return (
        <div className="item">
            <div className='d-flex align-items-center gap-3'>
                <div className="image d-flex align-items-center justify-content-center rounded-3 p-2 border-0">
                    {image}
                </div>
                <div className="text mt-3">
                    {text}
                </div>
            </div>
            <div className="price">
                {price}
            </div>
        </div>
    )
}