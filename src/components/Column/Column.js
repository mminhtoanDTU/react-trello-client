import React from 'react'
import { Card } from 'components'
import './Column.scss'
import { mapOrder } from 'utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd'

function BoardColumn({ column, onCardDrop }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header column-drag-handle">{column.title}</div>
                <div className="column__list scroll-custom-fancy">
                    <Container
                        groupName="col"
                        onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
                        getChildPayload={(index) => cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'card-drop-preview',
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {cards.map((card) => (
                            <Draggable key={card.id}>
                                <Card data={card} />
                            </Draggable>
                        ))}
                    </Container>
                </div>
                <div className="column__footer">
                    <div className="column__footer-add">
                        <i className="fa fa-plus icon" />
                        Thêm thẻ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardColumn
