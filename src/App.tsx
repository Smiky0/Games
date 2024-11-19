import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Homepage from "./pages/Homepage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
