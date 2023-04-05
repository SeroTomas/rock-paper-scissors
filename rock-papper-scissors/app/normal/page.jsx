"use client"
import logo from "../../assets/Icons/logo.svg"

// Componentes
import ScoreBoard from "../../components/ScoreBoard";
import Choose from "./Choose";
//hooks
import { useState } from "react";

function Normal() {

    const [score, setScore] = useState(0)

    return (
        <div className=" flex flex-col justify-between font-fuente bg-gradient-to-b from-bg-start to-bg-end h-screen">
            <ScoreBoard logo={logo} score={score} />
            <Choose/>
            <div className="h-1/4">Rules</div>
        </div>
    )

}
export default Normal;