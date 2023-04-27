"use client"

import triangle from "../../assets/Icons/bg-triangle.svg";

// componentes
import Image from "next/image";
import Selectable from "../Selectable";
import { selectableNormal } from "../info";



function Choose({setOption}) {
    return (
        <div className="flex justify-center items-center h-2/4 relative">
            <div className="flex flex-col items-center justify-center grow">
                <Image src={triangle} alt="triangulo" height={180} />
                {
                    selectableNormal?.map(elemento => (
                        <div className={elemento.position}>
                            <Selectable
                                name={elemento.name}
                                icon={elemento.icon}
                                colorStart={elemento.color.start}
                                colorEnd={elemento.color.end}
                                setOption={setOption}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Choose;