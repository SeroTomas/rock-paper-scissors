"use client"
import logo from "../../assets/Icons/logo.svg"
import rule from "../../assets/Icons/image-rules.svg"
// Componentes
import ScoreBoard from "../ScoreBoard";
import Choose from "./Choose";
import Versus from "../Versus";

//hooks
import Rules from "./Rules";
import useResult from "../../hooks/useResult";

//auxiliares
import { selectableNormal, normalTable } from "../info";

function Normal () {

    const {option, score, result, random, setScore,setOption, handleDelete, handleScore} = useResult(selectableNormal, normalTable);
    
    
    return (
        <>
            <div className="flex flex-col font-fuente bg-gradient-to-b from-bg-start to-bg-end h-screen relative">
                <ScoreBoard logo={logo} score={score} />
                {
                    option ? <Versus option={option} random ={random} setOption={setOption} result= {result} handleDelete={handleDelete} handleScore={handleScore}/> : <Choose setOption={setOption}/>
                }
                <Rules ruleImage={rule} />
            </div>
        </>
    )

}
export default Normal;