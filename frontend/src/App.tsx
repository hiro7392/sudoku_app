import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {HomePage} from "./modules/sudoku/pages/HomePage.tsx";


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/*<Route path="/sudoku" element={<SudokuPage />} />*/}
                    {/*<Route path="/sudoku/:puzzleId" element={<SudokuPage />} />*/}
                    {/*<Route path="/sudoku/solve/:puzzleId" element={<SudokuSolvePage />} />*/}
                    {/*<Route path="/profile/:userId" element={<ProfilePage />} />*/}
                    {/*<Route path="/about" element={<AboutPage />} />*/}
                    {/*<Route path="*" element={<NotFoundPage />} />*/}
                </Routes>
            </Router>
        </>
    )

}

export default App
