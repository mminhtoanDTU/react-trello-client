import React from 'react'
import { BoardColumn, Header } from './components'
import './App.scss'
import { WorkPage } from './pages'

function App() {
    return (
        <div className="app theme-purple">
            <Header />
            <WorkPage />
        </div>
    )
}

export default App
