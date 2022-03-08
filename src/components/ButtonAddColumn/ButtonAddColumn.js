import React, { useEffect, useRef, useState } from 'react'
import './ButtonAddColumn.scss'

function ButtonAddColumn({ onNewColumn }) {
    const [isIdle, setIsIdle] = useState(true)
    const [newTitleInput, setNewTitleInput] = useState('')
    const inputColumnRef = useRef(null)

    useEffect(() => {
        if (inputColumnRef && inputColumnRef.current) {
            inputColumnRef.current.focus()
            inputColumnRef.current.select()
        }
    }, [isIdle])

    const handleOpenInput = () => {
        setIsIdle(false)
    }
    const handleCloseInput = () => {
        setIsIdle(true)
    }

    const handleSubmitNewColumn = (e) => {
        e.preventDefault()
        if (!newTitleInput) {
            inputColumnRef.current.focus()
            return
        }
        const newColumnToAdd = {
            id: Math.random().toString(36).substring(2, 5),
            boardId: 'board-1',
            title: newTitleInput.trim(),
            cardOrder: [],
            cards: [],
        }
        onNewColumn(newColumnToAdd)
        setIsIdle(true)
        setNewTitleInput('')
    }

    return (
        <div className={`add-column ${isIdle ? 'is-idle' : ''}`}>
            <form onSubmit={handleSubmitNewColumn}>
                <a className="add-column__open" onClick={handleOpenInput}>
                    <i className="fa fa-plus icon" />
                    Add another list
                </a>
                <input
                    type="text"
                    className="add-column__input"
                    placeholder="Enter list title"
                    ref={inputColumnRef}
                    value={newTitleInput}
                    onChange={(e) => setNewTitleInput(e.target.value)}
                />
                <div className="add-column__control">
                    <input type="submit" className="add-column__control-btn" value="Add list" />
                    <i className="fa fa-close icon" onClick={handleCloseInput}></i>
                </div>
            </form>
        </div>
    )
}

export default ButtonAddColumn
