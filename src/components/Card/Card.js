import React from 'react'
import './Card.scss'

function Card({ data }) {
    const { title, cover } = data
    return (
        <div className="card">
            {cover && (
                <img
                    className="card-cover"
                    src={cover}
                    alt={title}
                    onMouseDown={(e) => e.preventDefault()}
                />
            )}
            <span className="card-title">{title}</span>
        </div>
    )
}

export default Card
