"use client"

//Hooks
import { useState } from "react"

//componentes
import Image from "next/image";
import close from "../../assets/Icons/icon-close.svg"

const Rules = ({ ruleImage }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="h-1/4 flex justify-center items-center">
                <button className="bg-transparent text-slate-50 font-fuente py-2 px-10 border border-slate-50 hover:border-transparent rounded-xl" onClick={() => { setOpen(!open) }}>
                    Rules
                </button>
            </div>

            {
                open && (
                    <div className="absolute inset-0 bg-gray-950 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg w-5/6 h-2/3">
                            <div className="p-4 flex flex-col h-full justify-center">
                                <div className="flex justify-between">
                                    <div className="text-2xl">
                                        <h2>RULES</h2>
                                    </div>
                                    <button
                                        onClick={() => setOpen(!open)}
                                    >
                                        <Image src={close} />
                                    </button>
                                </div>
                                <div className="flex-grow flex justify-start items-center">
                                    <Image src={ruleImage} />
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }

        </>
    )
}

export default Rules