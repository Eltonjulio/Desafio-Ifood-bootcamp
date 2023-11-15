const nickHero = "Deadpool";
const xpHero = 10000;

let levelDoHero

switch (true) {
    case xpHero < 1000:
        levelDoHero = "Ferro";
        break;
    case xpHero >= 1001 && xpHero <= 2000:
        levelDoHero = "Bronze";
        break;
    case xpHero >= 2001 && xpHero <= 6000:
        levelDoHero = "Prata";
        break;
    case xpHero >= 6001 && xpHero <= 7000:
        levelDoHero = "Ouro";
        break;
    case xpHero >= 7001 && xpHero <= 8000:
        levelDoHero = "Platina";
        break;
    case xpHero >= 8001 && xpHero <= 9000:
        levelDoHero = "Ascendente";
        break;
    case xpHero >= 9001 && xpHero <= 10000:
        levelDoHero = "Imortal";
        break;
    default:
        levelDoHero = "Radiante";
}

console.log(`O Herói de nome ${nickHero} está no nível de ${levelDoHero}`);
