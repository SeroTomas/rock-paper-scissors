"use client"
import React, { useState, useEffect } from 'react'

//auxiliares
import { selectableNormal } from './info'
//componentes
import Option from './Option'

const randomChoose = () => {
    const randomIndex = Math.floor(Math.random() * selectableNormal.length);
    const randomElement = selectableNormal[randomIndex];
    return randomElement
}

const resolve = (option, random) => {
    const user = option?.name;
    const bot = random?.name

    const table = {
        rock: {
            scissors: "WIN",
            papper: "LOOSE",
            rock: "TIE"
        },
        scissors: {
            papper: "WIN",
            rock: "LOOSE",
            scissors: "TIE"
        },
        papper: {
            rock: "WIN",
            scissors: "LOOSE",
            papper: "TIE"
        }
    }
    const result = table[user][bot];
    return result;
}

const Versus = ({ option, setOption, setScore, score }) => {

    const [random, setRandom] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setRandom(randomChoose())
    }, [])

    useEffect(() => {

        result === "WIN" ? setScore(score + 1) : setScore(score)

    }, [random])

    return (
        <div className=' h-2/4  mx-8 flex flex-col justify-center gap-10'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col justify-center items-center gap-5 text-lg text-slate-50'>
                    <Option
                        icon={option.icon}
                        colorStart={option.colorStart}
                        colorEnd={option.colorEnd}
                    />
                    <div>
                        <h2>YOU PICKED</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 text-lg text-slate-50'>
                    {
                        random ? <Option
                            icon={random.icon}
                            colorStart={random.colorStart}
                            colorEnd={random.colorEnd}
                        /> : null
                    }
                    <div>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
            </div>
            <div className='text-center text-lg text-slate-50'>
                <h1>THE MATCH END, YOU {result}!</h1>
            </div>
            <div>
                <button onClick={() => { setOption(null) }}>
                    Restart
                </button>
            </div>
        </div>
    )
}

export default Versus