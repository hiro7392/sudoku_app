import './App.css'
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {HomePage} from "./modules/sudoku/pages/HomePage.tsx";
import {SudokuPage} from "./modules/sudoku/pages/SudokuPage.tsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/sudoku" element={<SudokuPage/>}/>
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
