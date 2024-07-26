import React, { useContext, useState } from 'react'
import { SaleContext } from '../../context/SaleProvider';

const Button = () => {
    const saleData = useContext(SaleContext)
    const [activeButton, setActiveButton] = useState(0);
    const buttons = [
        { label: 'Günlük', startDate: new Date(2024, 5, 10), endDate: new Date(2024, 5, 10) },
        { label: 'Həftəlik', startDate: new Date(2024, 5, 3), endDate: new Date(2024, 5, 9) },
        { label: 'Aylıq', startDate: new Date(2024, 4, 1), endDate: new Date(2024, 4, 31) },
        { label: 'İllik', startDate: new Date(2024, 0, 1), endDate: new Date(2024, 11, 31) }
    ];
    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    style={{
                        background: activeButton === index ? '#80BD34' : 'none',
                        color: activeButton === index ? 'white' : 'black'
                    }}>
                    {button.label}
                </button>
            ))}
        </>
    )
}

export default Button