import { initialData } from 'actions/initialData'
import { Column } from 'components'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { mapOrder } from 'utilities/sorts'
import { applyDrag } from 'utilities/dragDrop'
import './BoardMain.scss'
import ButtonAddColumn from 'components/ButtonAddColumn/ButtonAddColumn'

function BoardMain() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards[0]
        setBoard(boardFromDB)
        setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }, [])

    const onColumnDrop = (dropResult) => {
        let newColumn = [...columns]
        let newBoard = { ...board }
        newColumn = applyDrag(newColumn, dropResult)
        newBoard.columnOrder = newColumn.map((c) => c.id)
        newBoard.columns = newColumn
        setColumns(newColumn)
        setBoard(newBoard)
    }

    const onCardDrop = (columnId, cardResult) => {
        if (cardResult.addedIndex !== null || cardResult.removedIndex !== null) {
            let newColumn = [...columns]
            let currentColumn = newColumn.find((c) => c.id === columnId)
            currentColumn.cards = applyDrag(currentColumn.cards, cardResult)
            currentColumn.cardOrder = currentColumn.cards.map((c) => c.id)

            setColumns(newColumn)
        }
    }

    const handleAddNewColumn = (value) => {
        let newColumn = [...columns]
        newColumn.push(value)

        let newBoard = { ...board }
        newBoard.columnOrder = newColumn.map((c) => c.id)
        newBoard.columns = newColumn

        setColumns(newColumn)
        setBoard(newBoard)
    }

    const handleUpdateColumn = (newColumnToUpdate) => {
        const columnIdToUpdate = newColumnToUpdate.id

        let newColumn = [...columns]
        const columnIndexToUpdate = newColumn.findIndex((i) => i.id === columnIdToUpdate)
        if (newColumnToUpdate._destroy) {
            newColumn.splice(columnIndexToUpdate, 1)
        } else {
            newColumn.splice(columnIndexToUpdate, 1, newColumnToUpdate)
        }

        let newBoard = { ...board }
        newBoard.columnOrder = newColumn.map((c) => c.id)
        newBoard.columns = newColumn

        setColumns(newColumn)
        setBoard(newBoard)
    }

    if (isEmpty(board)) {
        return <div>Board Not found</div>
    }

    return (
        <main className="board-main">
            <div className="board-wrapper">
                <div className="board-content">
                    <div className="board-header">Board header</div>
                    <div className="board-canvas">
                        <div className="board-columns scroll-custom">
                            <Container
                                orientation="horizontal"
                                onDrop={onColumnDrop}
                                dragHandleSelector=".column-drag-handle"
                                getChildPayload={(index) => columns[index]}
                                dropPlaceholder={{
                                    animationDuration: 150,
                                    showOnTop: true,
                                    className: 'column-drop-preview',
                                }}
                            >
                                {columns.map((column) => (
                                    <Draggable key={column.id}>
                                        <Column
                                            column={column}
                                            onCardDrop={onCardDrop}
                                            onUpdateColumn={handleUpdateColumn}
                                        />
                                    </Draggable>
                                ))}
                            </Container>
                            <ButtonAddColumn onNewColumn={handleAddNewColumn} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BoardMain
