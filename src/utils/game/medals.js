

export function getMedals(score) {
    if(score == 5000){
        return 'platine';
    }
    if(score > 24000){
        return 'gold';
    }
    if(score > 20000){
        return 'silver';
    }
    if(score > 1000){
        return 'bronze';
    }
    return 'platine';
}
