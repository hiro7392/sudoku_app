"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var HomePage_tsx_1 = require("./modules/sudoku/pages/HomePage.tsx");
var core_1 = require("@mantine/core");
var SudokuPage_tsx_1 = require("./modules/sudoku/pages/SudokuPage.tsx");
function App() {
    return (<>
            <core_1.MantineProvider theme={{
            colors: {
                brand: [
                    '#f0f0f0', // 0
                    '#e0e0e0', // 1
                    '#d0d0d0', // 2
                    '#c0c0c0', // 3
                    '#b0b0b0', // 4
                    '#909090', // 5
                    '#707070', // 6
                    '#505050', // 7
                    '#303030', // 8
                    '#101010', // 9
                ],
            },
            primaryColor: 'brand',
        }}>
                <react_router_dom_1.BrowserRouter>
                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route path="/" element={<HomePage_tsx_1.HomePage />}/>
                        <react_router_dom_1.Route path="/sudoku" element={<SudokuPage_tsx_1.default />}/>
                        {/*<Route path="/sudoku/:puzzleId" element={<SudokuPage />} />*/}
                        {/*<Route path="/sudoku/solve/:puzzleId" element={<SudokuSolvePage />} />*/}
                        {/*<Route path="/profile/:userId" element={<ProfilePage />} />*/}
                        {/*<Route path="/about" element={<AboutPage />} />*/}
                        {/*<Route path="*" element={<NotFoundPage />} />*/}
                    </react_router_dom_1.Routes>
                </react_router_dom_1.BrowserRouter>
            </core_1.MantineProvider>
        </>);
}
exports.default = App;
