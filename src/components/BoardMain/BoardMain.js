import { initialData } from 'actions/initialData'
import { Column } from 'components'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { mapOrder } from 'utilities/sorts'
import './BoardMain.scss'

function BoardMain() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards[0]
        setBoard(boardFromDB)
        setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }, [])

    const onColumnDrop = (dropResult) => {
        console.log(dropResult)
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
                                        <Column column={column} />
                                    </Draggable>
                                ))}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BoardMain
