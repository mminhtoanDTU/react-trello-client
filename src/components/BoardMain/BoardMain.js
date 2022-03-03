import React from 'react'
import { Column } from 'components'
import './BoardMain.scss'

function BoardMain() {
    return (
        <main className="board-main">
            <div className="board-wrapper">
                <div className="board-content">
                    <div className="board-header">Board header</div>
                    <div className="board-canvas">
                        <div className="board-columns scroll-custom">
                            <Column />
                            <Column />
                            <Column />
                            <Column />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BoardMain
