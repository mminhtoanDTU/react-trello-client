import { Card } from 'components'
import ModalConfirm from 'components/Common/ModalConfirm'
import { cloneDeep } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import { Container, Draggable } from 'react-smooth-dnd'
import { MODAL_ACTION_CONFIRM } from 'utilities/constants'
import { saveAfterPressEnter } from 'utilities/contentEditable'
import { mapOrder } from 'utilities/sorts'
import './Column.scss'

function BoardColumn({ column, onCardDrop, onUpdateColumn }) {
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    const [columnTitle, setColumnTitle] = useState('')
    const [newCardTitle, setNewCardTitle] = useState('')
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [openNewCardForm, setOpenNewCardForm] = useState(false)
    const inputTitleRef = useRef()
    const textareaCardRef = useRef()

    useEffect(() => {
        setColumnTitle(column.title)
    }, [column.title])

    useEffect(() => {
        if (textareaCardRef && textareaCardRef.current) {
            textareaCardRef.current.focus()
            textareaCardRef.current.select()
        }
    }, [openNewCardForm])

    const toggleShowConfirmModal = () => setIsShowConfirmModal(!isShowConfirmModal)
    const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

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

    const handleSubmitNewCard = () => {
        if (!newCardTitle) {
            textareaCardRef.current.focus()
            return
        }
        const newCardToAdd = {
            id: Math.random().toString(36).substring(2, 5),
            boardId: column.boardId,
            columnId: column.id,
            title: newCardTitle.trim(),
            cover: null,
        }

        const newColumn = cloneDeep(column)
        newColumn.cards.push(newCardToAdd)
        newColumn.cardOrder.push(newCardToAdd.id)

        onUpdateColumn(newColumn)
        setNewCardTitle('')
        toggleOpenNewCardForm()
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
                            ref={inputTitleRef}
                            value={columnTitle}
                            onFocus={(e) => e.target.select()}
                            onChange={handleColumnTitleChange}
                            onBlur={handleColumnTitleBlur}
                            onKeyDown={saveAfterPressEnter}
                            //onMouseDown={(e) => e.preventDefault()}
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

                    {openNewCardForm && (
                        <div className="column__add-card-area">
                            <Form.Control
                                className="textarea-new-card"
                                as="textarea"
                                size="sm"
                                ref={textareaCardRef}
                                rows={3}
                                placeholder="Enter a title for this card..."
                                value={newCardTitle}
                                onChange={(e) => setNewCardTitle(e.target.value)}
                                // onKeyDown={(e) => e.key === 'Enter' && handleSubmitNewCard()}
                            />
                            <Button
                                variant="success"
                                size="sm"
                                onClick={handleSubmitNewCard}
                                className="button-new-card"
                            >
                                Add card
                            </Button>
                            <i className="fa fa-close icon" onClick={toggleOpenNewCardForm} />
                        </div>
                    )}
                </div>
                <div className="column__footer">
                    {!openNewCardForm && (
                        <div className="column__footer-add" onClick={toggleOpenNewCardForm}>
                            <i className="fa fa-plus icon" />
                            Thêm thẻ
                        </div>
                    )}
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
