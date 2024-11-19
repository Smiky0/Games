import { Link } from "react-router-dom";
import ticImage from "./../assets/tictactoe1.webp";
import { motion } from "framer-motion";
export default function Homepage() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-8 m-6">
            <h1 className="text-3xl text-white/75 font-title font-extrabold tracking-widest uppercase">
                Games
            </h1>
            <motion.ul animate={{ y: 10 }} className="flex gap-6">
                <li className="flex flex-col justify-between items-center bg-gradient-to-br from-primary to-transparent w-60 aspect-square shadow-2xl rounded-2xl p-2">
                    <p className="text-xl font-bold text-black text-center tracking-wide">
                        TicTacToe
                    </p>
                    <img width={160} height={160} src={ticImage} className="w-40 p-2 rounded-2xl" />
                    <Link to="/tictactoe">
                        <motion.button
                            whileHover={{ scale: 1.08 , opacity:0.8}}
                            whileTap={{ scale: 0.95 }}
                            className="w-40 h-12 bg-black text-white text-lg rounded-2xl "
                        >
                            Play!
                        </motion.button>
                    </Link>
                </li>
            </motion.ul>
        </div>
    );
}
