import React from 'react'
import { Task } from 'components'
import './Column.scss'

function BoardColumn() {
    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header">Important</div>
                <ul className="column__list scroll-custom-fancy">
                    <Task />
                </ul>
                <div className="column__footer">
                    <div className="column__footer-add">Thêm thẻ</div>
                </div>
            </div>
        </div>
    )
}

export default BoardColumn
