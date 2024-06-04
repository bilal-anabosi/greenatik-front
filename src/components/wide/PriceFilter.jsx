
import React from 'react';

const PriceFilter = ({ selectedPriceRange, onPriceChange }) => {
    const priceRanges = [
        { label: '$0 - $10', min: 0, max: 10 },
        { label: '$10 - $50', min: 10, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and up', min: 200, max: Infinity }
    ];

    return (
        <div>
            <h5 className="mb-3">Price</h5>
            <div>
                {priceRanges.map((range, index) => (
                    <div key={index} className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priceRange"
                            id={`priceRange${index}`}
                            checked={selectedPriceRange.label === range.label}
                            onChange={() => onPriceChange(range)}
                        />
                        <label className="form-check-label" htmlFor={`priceRange${index}`}>
                            {range.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceFilter;

