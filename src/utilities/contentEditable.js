const selectAllInLineText = (e) => {
    console.log(e)
    e.target.focus()
    e.target.select()
}

const saveAfterPressEnter = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        e.target.blur()
    }
}

export { selectAllInLineText, saveAfterPressEnter }
