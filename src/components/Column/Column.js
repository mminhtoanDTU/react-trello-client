import React, { useCallback, useEffect, useState } from 'react'
import { Card } from 'components'
import './Column.scss'
import { mapOrder } from 'utilities/sorts'
import { selectAllInLineText, saveAfterPressEnter } from 'utilities/contentEditable'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'
import ModalConfirm from 'components/Common/ModalConfirm'
import { MODAL_ACTION_CONFIRM } from 'utilities/constants'

function BoardColumn({ column, onCardDrop, onUpdateColumn }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    const [columnTitle, setColumnTitle] = useState('')
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    useEffect(() => {
        setColumnTitle(column.title)
    }, [column.title])

    const toggleShowConfirmModal = () => setIsShowConfirmModal(!isShowConfirmModal)

    const handleConfirmModalAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            const newColumn = {
                ...column,
                _destroy: true,
            }
            onUpdateColumn(newColumn)
        }
        toggleShowConfirmModal()
    }

    const handleColumnTitleChange = (e) => {
        setColumnTitle(e.target.value)
    }

    const handleColumnTitleBlur = () => {
        const newColumn = {
            ...column,
            title: columnTitle,
        }
        onUpdateColumn(newColumn)
    }

    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header column-drag-handle">
                    {/* <span className="column__header-title">{column.title}</span> */}
                    <div className="column__header-title">
                        <Form.Control
                            className="input-editable"
                            type="text"
                            size="sm"
                            value={columnTitle}
                            onChange={handleColumnTitleChange}
                            onClick={selectAllInLineText}
                            onBlur={handleColumnTitleBlur}
                            onKeyDown={saveAfterPressEnter}
                            onMouseDown={(e) => e.preventDefault()}
                        />
                    </div>
                    <DropdownButton className="column__header-dropdown" title="" size="sm">
                        <Dropdown.Item>Add card</Dropdown.Item>
                        <Dropdown.Item onClick={toggleShowConfirmModal}>
                            Remove column
                        </Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
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
            <ModalConfirm
                isShow={isShowConfirmModal}
                title="Remove column"
                body={`Are you sure you want to remove ${column.title}`}
                onAction={handleConfirmModalAction}
            />
        </div>
    )
}

export default BoardColumn
