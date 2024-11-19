import { motion } from "framer-motion";
import { Home, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Link } from "react-router-dom";

export default function TicTacToe() {
    const [type, setType] = useState(false);
    const [inputs, setInputs] = useState(["", "", "", "", "", "", "", "", ""]);
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState("");
    const [xCount, setXCount] = useState(0);
    const [oCount, setOCount] = useState(0);

    const setScore = () => {
        if (winner === "X") {
            setXCount(xCount + 1);
        } else if (winner === "O") {
            setOCount(oCount + 1);
        }
    };

    const checkMatch = () => {
        const newArray = [...inputs];
        if (
            (newArray[0] === "X" || newArray[0] === "O") &&
            newArray[0] === newArray[1] &&
            newArray[0] === newArray[2]
        ) {
            setWinner(newArray[0]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[3] === "X" || newArray[3] === "O") &&
            newArray[3] === newArray[4] &&
            newArray[3] === newArray[5]
        ) {
            setWinner(newArray[3]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[6] === "X" || newArray[6] === "O") &&
            newArray[6] === newArray[7] &&
            newArray[6] === newArray[8]
        ) {
            setWinner(newArray[6]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[0] === "X" || newArray[0] === "O") &&
            newArray[0] === newArray[3] &&
            newArray[0] === newArray[6]
        ) {
            setWinner(newArray[0]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[1] === "X" || newArray[1] === "O") &&
            newArray[1] === newArray[4] &&
            newArray[1] === newArray[7]
        ) {
            setWinner(newArray[1]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[2] === "X" || newArray[2] === "O") &&
            newArray[2] === newArray[5] &&
            newArray[2] === newArray[8]
        ) {
            setWinner(newArray[2]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[0] === "X" || newArray[0] === "O") &&
            newArray[0] === newArray[4] &&
            newArray[0] === newArray[8]
        ) {
            setWinner(newArray[0]);
            setScore();
            setEndGame(true);
        } else if (
            (newArray[2] === "X" || newArray[2] === "O") &&
            newArray[2] === newArray[4] &&
            newArray[2] === newArray[6]
        ) {
            setWinner(newArray[2]);
            setScore();
            setEndGame(true);
        }
        if (!newArray.includes("")) {
            setEndGame(true);
        }
    };

    const handleClick = (index: number) => {
        const newArray = [...inputs];
        if (newArray[index] != "") {
            return;
        }
        newArray[index] = type ? "X" : "O";
        setInputs(newArray);
        setType(!type);
    };

    const handleReset = () => {
        const newArray = new Array(9).fill("");
        setInputs(newArray);
        setEndGame(false);
        setWinner("");
    };

    useEffect(() => {
        checkMatch();
        // console.log(xCount, oCount);
    }, [inputs]);

    return (
        <>
            {endGame && winner && <ConfettiExplosion />}
            <div className="flex flex-col gap-6 justify-center items-center m-2 p-2 rounded-2xl ">
                <p className="text-3xl font-title font-extrabold tracking-widest text-white/80">
                    TicTacToe Game
                </p>
                <div className="flex justify-center items-center gap-4 h-16 p-2">
                    <Link to="/">
                        <motion.button
                            className="flex gap-2 rounded-xl p-3 bg-black text-white group shadow-lg  capitalize"
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05, opacity: 0.8 }}
                            onClick={handleReset}
                        >
                            <Home />
                            Home
                        </motion.button>
                    </Link>
                    <motion.button
                        className="flex gap-2 rounded-xl p-3 bg-gradient-to-br from-green-500 to-blue-600 text-white group shadow-lg  capitalize"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={handleReset}
                    >
                        <RotateCcw className="group-hover:-rotate-180 ease-in-out duration-500" />
                        Restart
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid grid-rows-3 grid-cols-3 w-full md:w-1/3 aspect-square rounded-2xl cursor-pointer font-tictacxo text-9xl"
                >
                    {/* row 1*/}
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(0)}
                    >
                        {inputs[0]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(1)}
                    >
                        {inputs[1]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(2)}
                    >
                        {inputs[2]}
                    </motion.button>

                    {/* row 2*/}
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(3)}
                    >
                        {inputs[3]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(4)}
                    >
                        {inputs[4]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(5)}
                    >
                        {inputs[5]}
                    </motion.button>

                    {/* row 3*/}
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(6)}
                    >
                        {inputs[6]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(7)}
                    >
                        {inputs[7]}
                    </motion.button>
                    <motion.button
                        disabled={endGame}
                        whileTap={{ scale: 0.85 }}
                        className="flex justify-center items-center bg-primary border-2 border-black/60 rounded-2xl"
                        onClick={() => handleClick(8)}
                    >
                        {inputs[8]}
                    </motion.button>
                </motion.div>

                {endGame && winner && (
                    <p className="border-2 border-white/20 p-2 px-4 rounded-2xl text-2xl text-white font-bold uppercase">
                        {'"' + winner + '" Won!'}
                    </p>
                )}
                {endGame && !winner && (
                    <p className="text-2xl text-white font-bold uppercase">
                        {" It's a draw!"}
                    </p>
                )}
            </div>
        </>
    );
}
