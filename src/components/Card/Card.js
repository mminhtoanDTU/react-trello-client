import React from 'react'
import './Card.scss'

function Card({ title }) {
    return (
        <li className="card">
            <span>{title}</span>
        </li>
    )
}

export default Card
