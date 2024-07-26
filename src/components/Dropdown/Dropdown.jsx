import React, { useState } from 'react'

export default function Dropdown({ mainComponent, children, isOpen, onClick }) {
    return (
        <div className="dropdown">
            <button className='d-flex align-items-center gap-2' onClick={onClick}>
                {mainComponent}
            </button>

            {isOpen && (
                children
            )}
        </div>
    )
}