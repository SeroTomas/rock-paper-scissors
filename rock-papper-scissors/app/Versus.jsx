"use client"
import React, { useEffect} from 'react'

//componentes
import Option from './Option'

const Versus = ({ option, random, result, handleDelete, handleScore}) => {
    
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
                <button onClick={() => { handleDelete() }}>
                    Restart
                </button>
            </div>
        </div>
    )
}

export default Versus