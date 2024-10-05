const skills: string[] = ["Black Flash", "Purple Void", "Red Glow"]

interface sorcerer {
    id: number;
    name: string;
    hp: number;
    skills_satoru?: string[];
    homeTown: string;
};

const satoru_gojo: sorcerer = {
    id: 1,
    name: "Satoru Gojo",
    hp: 10000,
    skills_satoru: undefined,
    homeTown: "Tokyo"
};

satoru_gojo.skills_satoru = skills;

console.table(satoru_gojo)

export{};