import triangle from "../../assets/Icons/bg-triangle.svg";
import rock from "../../assets/Icons/icon-rock.svg";
import papper from "../../assets/Icons/icon-paper.svg";
import scissors from "../../assets/Icons/icon-scissors.svg"
import Image from "next/image";


function Choose() {
    return (
        <div className="flex justify-center items-center h-2/4">
            <div className="flex flex-col items-center justify-center relative grow">
                <Image src={triangle} alt="triangulo" height={180} />
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Choose;