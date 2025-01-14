export const getStatsCalculation = (baseStatsArray, ivArray, evArray, level,  natureArray , pokemonName) => { // Make the corresponding HP exception for shedinja

    let newStats = [];

    newStats[0] = pokemonName === "shedinja" ? 1 : getHPValue(baseStatsArray[0], ivArray[0], evArray[0], level); // HP
    newStats[1] = getOtherStatValue(baseStatsArray[1], ivArray[1], evArray[1], level, natureArray[1]); // Atk
    newStats[2] = getOtherStatValue(baseStatsArray[2], ivArray[2], evArray[2], level, natureArray[2]); // Def
    newStats[3] = getOtherStatValue(baseStatsArray[3], ivArray[3], evArray[3], level, natureArray[3]); // Atk Sp
    newStats[4] = getOtherStatValue(baseStatsArray[4], ivArray[4], evArray[4], level, natureArray[4]); // Def Sp
    newStats[5] = getOtherStatValue(baseStatsArray[5], ivArray[5], evArray[5], level, natureArray[5]); // Speed

    return newStats;
}

const getHPValue = (baseStatHp, ivHp, evHp, level) => {
    let hpValue = (2 * baseStatHp + ivHp + (evHp / 4.0)) * level / 100.0 + level + 10;
    return Math.trunc(hpValue);
}

const getOtherStatValue = (baseStat, IV, EV, level, natureMultiplier) => {
    let value = ( (2 * baseStat + IV + (EV / 4.0)) * level / 100.0 + 5.0) * natureMultiplier;
    return Math.trunc(value);
}