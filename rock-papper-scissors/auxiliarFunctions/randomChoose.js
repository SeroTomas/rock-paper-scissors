
//selectables es el array de posibles opciones para seleccionar a la hora de jugar (piedra, papel o tijera)
const randomChoose = (selectables) => {
    const randomIndex = Math.floor(Math.random() * selectables.length);
    const randomElement = selectables[randomIndex];
    return randomElement
}

export default randomChoose;