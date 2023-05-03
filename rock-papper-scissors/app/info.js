import rockImage from "../assets/Icons/icon-rock.svg"
import papperImage from "../assets/Icons/icon-paper.svg"
import scissorsImage from "../assets/Icons/icon-scissors.svg"
import lizardImage from "../assets/Icons/icon-lizard.svg"
import spockImage from "../assets/Icons/icon-spock.svg"

export const ROCK_START = 'rockStart';
export const ROCK_END = 'rockEnd';
export const PAPPER_START ='papperStart';
export const PAPPER_END = 'papperEnd';
export const SCISSORS_START = 'scissorsStart';
export const SCISSORS_END = 'scissorsEnd';
export const LIZARD_START = 'lizardStart';
export const LIZARD_END = 'lizardEnd';
export const SPOCK_START = 'spockStart';
export const SPOCK_END = 'spockEnd';


export const selectableNormal = [
    {
        name: "rock",
        icon: rockImage,
        position: "absolute top-6 left-12",
        color: {
            start: ROCK_START,
            end: ROCK_END
        }
    },
    {
        name: "papper",
        icon: papperImage,
        position:"absolute top-6 right-12",
        color: {
            start: PAPPER_START,
            end: PAPPER_END
        }
    },
    {

        name: "scissors",
        icon: scissorsImage,
        position:"absolute bottom-12",
        color: {
            start: SCISSORS_START,
            end: SCISSORS_END
        }

    }
]

export const selectableBonus = {
    ...selectableNormal,
    lizard: {
        icon: lizardImage,
        color: {
            start: "lizardStart",
            end: "lizardEnd"
        }
    },
    spock: {
        icon: spockImage,
        color: {
            start: "spockStart",
            end: "spockEnd"
        }
    }
}

export const normalTable = {
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