import React from 'react'
import './BoardColumn.scss'

function BoardColumn() {
    return (
        <div className="column">
            <div className="column__content">
                <div className="column__header">Important</div>
                <ul className="column__list scroll-custom-fancy">
                    <li className="column__task">
                        <span>Hellow Task 1</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 2</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 3</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 1</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 2</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 3</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 1</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 2</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 3</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 1</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 2</span>
                    </li>
                    <li className="column__task">
                        <span>Hellow Task 3</span>
                    </li>
                </ul>
                <div className="column__footer">
                    <a className="column__footer-add">Thêm thẻ</a>
                </div>
            </div>
        </div>
    )
}

export default BoardColumn
