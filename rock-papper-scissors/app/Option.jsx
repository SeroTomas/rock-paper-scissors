import React from 'react'
import Image from 'next/image'

const Option = ({icon, colorStart, colorEnd}) => {

    return (
        <div className={`flex justify-center items-center h-28 w-28 rounded-full bg-gradient-to-b from-${colorStart} to-${colorEnd}`} >
            <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full shadow-2xl">
                <Image src={icon} alt="icono" height={50} />
            </div>
        </div>
    )
}

export default Option