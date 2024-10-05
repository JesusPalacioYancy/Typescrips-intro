function addNumbers(a: number, b: number): number {
    return a + b
};

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
};

function multiplay (firsNumber: number, secontNumber?: number, base: number = 2) {
    return firsNumber * base
}


const result = addNumbers(1, 2)
const result2 = addNumbersArrow(5, 7)
const result3 = multiplay(5)

console.log({result, result2, result3})

///////////////////////class #4//////////////////////////////

interface sorcerer{
    name: string;
    hp: number;
    showHp: () => void;
}

const healingSpell = (sorcerer: sorcerer, amount: number): number => {
    return sorcerer.hp += amount;
};

const itadori: sorcerer = {
    name: "Jujy Itadory",
    hp: 100,
    showHp() { 
        console.log(`tienes ${this.hp} de hp`)
    }
};



healingSpell(itadori, 200)

itadori.showHp()

export{};