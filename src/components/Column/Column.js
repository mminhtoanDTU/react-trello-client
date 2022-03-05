import React from 'react'
import { Card } from 'components'
import './Column.scss'
import { mapOrder } from 'utilities/sorts'

function BoardColumn({ column }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header">{column.title}</div>
                <ul className="column__list scroll-custom-fancy">
                    {cards.map((card) => (
                        <Card key={card.id} title={card.title} />
                    ))}
                </ul>
                <div className="column__footer">
                    <div className="column__footer-add">Thêm thẻ</div>
                </div>
            </div>
        </div>
    )
}

export default BoardColumn
