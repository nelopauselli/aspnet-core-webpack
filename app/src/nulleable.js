export default function nulleable() {
    let persona = undefined;
    let nombre = persona?.nombre;
    console.log(nombre);

    let lista = [1];
    if (lista?.length) {
        console.log(`La lista tiene ${lista?.length} elementos`);
    } else {
        console.log("La lista NO tiene elementos");
    }
}