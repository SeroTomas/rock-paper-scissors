import Image from "next/image";

function ScoreBoard({ logo, score }) {
    return (
        <div className="h-1/4">
            <div className="flex justify-between items-center border-2 border-outLine rounded-md m-8 p-3 ">
                <div>
                    <Image src={logo} height={60} />
                </div>
                <div className="flex flex-col items-center p-1 bg-slate-50  rounded-md">
                    <p className="text-scoreText px-3">score</p>
                    <p className="text-5xl">{score}</p>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;