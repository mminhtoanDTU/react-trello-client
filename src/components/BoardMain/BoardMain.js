import React, { useEffect, useState } from 'react'
import { Column } from 'components'
import { initialData } from 'actions/initialData'
import { isEmpty } from 'lodash'
import './BoardMain.scss'
import { mapOrder } from 'utilities/sorts'

function BoardMain() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards[0]
        setBoard(boardFromDB)
        setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }, [])

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
                            {columns.map((column) => (
                                <Column key={column.id} column={column} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BoardMain
