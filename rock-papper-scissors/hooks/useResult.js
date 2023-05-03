
import { useState, useEffect } from "react";
import randomChoose from "../auxiliarFunctions/randomChoose";

const useResult = (selectables, table,) => {

    const [option, setOption] = useState(null);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(null);
    const [random, setRandom] = useState(null)
    
    useEffect(() => {
        setRandom(randomChoose(selectables))
        if (option) {
            const user = option?.name;
            const bot = random?.name
            setResult(table[user][bot])
            console.log("me renderice");
        }
    }, [option])


    const handleDelete = () => {
        setOption(null)
        setRandom(null)
    }

    const handleScore = () => {
        switch (result) {
            case "WIN":
                setScore(score + 1)
                console.log("ganaste un punto"  + score);
                break;

            case "LOOSE":
                if (score === 0) {
                    console.log("perdiste, pero no perdes puntos"  + score);
                    break;
                }
                setScore(score - 1)
                console.log("perdiste un punto"  + score);
                break;

            case "TIE":
                console.log("empataste"  + score);
                break;
        }
    }

    return {
        option,
        score,
        result,
        random,
        setOption,
        setScore,
        handleDelete,
        handleScore
    }

}
export default useResult;
