// Destructuracion de objetos 

interface AudioPlayer{
    songVolumen: number;
    audioDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
};


const songPlayer: AudioPlayer = {
    songVolumen: 70,
    audioDuration: 2,
    song: "SonFlawer",
    details: {
        author: "Post Malon",
        year: 2018
    }
};


const {songVolumen: volumen, audioDuration: Duration, song: song} = songPlayer
const {details: { author, year }} = songPlayer

console.log(`
    '${song}'
    Duracion: ${Duration}
    Volumen: ${volumen}%
    --------------------
    Autor: ${author}
    Fecha de creacion: ${year}
`)


////////////////////////////////////////////////////////

const personajesJujutsuKaisen: string[] = ['Juji Itadory', 'Suguru Geto', 'Satoro Gojo'];

const [p1] = personajesJujutsuKaisen
const [, , p3, p4 = "Not Faunt"] = personajesJujutsuKaisen
console.log(p1)
console.log(p3)
console.error(p4)

export{};