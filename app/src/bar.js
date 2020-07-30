export default function bar() {
    let palabras = ["Hola", "Browser"];
    console.log(palabras.map(p => p.toLocaleLowerCase()).join(" "));
}