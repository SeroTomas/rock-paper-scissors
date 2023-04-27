"use client"
import Option from "./Option"

const Selectable = ({ name, icon, colorStart, colorEnd, setOption }) => {

    return (
        <button onClick={() => { setOption({ name, icon, colorStart, colorEnd }) }}>
            <Option
                icon={icon}
                colorStart={colorStart}
                colorEnd={colorEnd}
            />
        </button>
    )
}

export default Selectable