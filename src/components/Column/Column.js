import React from 'react'
import { Card } from 'components'
import './Column.scss'
import { mapOrder } from 'utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd'

function BoardColumn({ column }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    const onCardDrop = (cardResult) => {
        console.log(cardResult)
    }
    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header column-drag-handle">{column.title}</div>
                <div className="column__list scroll-custom-fancy">
                    <Container
                        groupName="col"
                        onDrop={onCardDrop}
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
                    <div className="column__footer-add">Thêm thẻ</div>
                </div>
            </div>
        </div>
    )
}

export default BoardColumn
