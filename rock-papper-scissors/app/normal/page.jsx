"use client"
import logo from "../../assets/Icons/logo.svg"
import rule from "../../assets/Icons/image-rules.svg"
// Componentes
import ScoreBoard from "../ScoreBoard";
import Choose from "./Choose";
import Versus from "../Versus";

//hooks
import { useState } from "react";
import Rules from "./Rules";

function Normal() {


    const [score, setScore] = useState(0);
    const [option, setOption] = useState(null);

    return (
        <>
            <div className="flex flex-col font-fuente bg-gradient-to-b from-bg-start to-bg-end h-screen relative">
                <ScoreBoard logo={logo} score={score} />
                {
                    option ? <Versus option={option} setScore={setScore} score={score} setOption={setOption}/> : <Choose setOption={setOption}/>
                }
                <Rules ruleImage={rule} />
            </div>
        </>
    )

}
export default Normal;