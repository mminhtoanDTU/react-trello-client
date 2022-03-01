import React from 'react'
import { BoardColumn } from '../../components'
import './work.scss'

function Work() {
    return (
        <main className="board-main">
            <div className="board-wrapper">
                <div className="board-content">
                    <div className="board-header">Board header</div>
                    <div className="board-canvas">
                        <div className="board-columns scroll-custom">
                            <BoardColumn />
                            <BoardColumn />
                            <BoardColumn />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Work
