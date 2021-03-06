/**
 * @param {String} fodselsdato format: ddmmyy
 * @param {boolean} isKvinne //how you identify, hvis du er ikke binær, bruk det tallet som du synes beskriver kjønnet ditt best
 * @param {String} wowRace //other MMO's count too.. 
 * @param {number} antallGangerRettetGeirSinProg 
 * @param {number} treningPerUke //bare kul trening teller.
 * @param {number} McTjukkasPerManed //fatso King also counts
 * @param {boolean} hasFrokostForSkole 
 * @param {boolean} hasDrivingFemalePartner or mother/sister
 * @param {boolean} hasMaleDrivingPartner or father/brother
 * @param {boolean} isSpillerItimen  // hvis du spiller i timen
 * @returns age achieved with current lifestyle. Exactly!
 */


//Complete the formulae
//You are supposed to calculate time and date of death, down to the minute!
function calculateExactTimeOfDeath(
    fodselsdato, isKvinne, wowRace, antallGangerRettetGeirSinProg,
    treningPerUke, McTjukkasPerManed,  
    hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
    isSpillerItimen){
    isKvinne = document.getElementById('isKvinnei').checked;
    wowRace  = document.getElementById('wowRacei').value;
    antallGangerRettetGeirSinProg = document.getElementById('antallGangerRettetGeirSinProgi').value;
    treningPerUke  = document.getElementById('treningPerUkei').value;
    McTjukkasPerManed  = document.getElementById('McTjukkasPerManedi').value;
    hasFrokostForSkole  = document.getElementById('hasFrokostForSkolei').checked;
    hasDrivingFemalePartner = document.getElementById('hasDrivingFemalePartneri').checked;
    hasMaleDrivingPartner = document.getElementById('hasMaleDrivingPartneri').checked;
    isSpillerItimen = document.getElementById('isSpillerItimeni').checked;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let calculatedAge;
    if(isKvinne){
        calculatedAge = 81.7;
    } else {
        calculatedAge = 76.1; 
    }

    if (wowRace != ""){
        calculatedAge -= 10.2;
    }  //To much sitting still..
    if(isSpillerItimen){
        calculatedAge -= 4.21;
    }
    if(!hasFrokostForSkole){
        calculatedAge -= 4.19;
    }
    if(hasDrivingFemalePartner){
        calculatedAge += 3.75;
    }
    if(hasMaleDrivingPartner){
        calculatedAge -= 3.71;
    }
    calculatedAge -= (McTjukkasPerManed*4.666);
    calculatedAge = calculatedAge - antallGangerRettetGeirSinProg*1.2
    calculatedAge = calculatedAge + treningPerUke * 1.2;
    if(calculatedAge - submitBday() <= 0){
        document.getElementById('demo').innerHTML = (years_to_ymdh(calculatedAge - submitBday()) + " Du er udødelig!");
    }
    else{
        document.getElementById('demo').innerHTML = years_to_ymdh(calculatedAge - submitBday());
    }
}


function submitBday() {
    var Q4A = "";
    var Bdate = document.getElementById('fodselsdatoi').value;
    var Bday = +new Date(Bdate);
    Q4A += ((Date.now() - Bday) / (31557600000));
    return(Q4A);
}
function years_to_ymdh(value) {
    console.log('initialy : '+ value + ' years');

    var results=[], rest=value;
    var units=['years', 'months', 'days', 'hours', 'minutes'];
    var converters=[1, 12, 365.25, 365.25*24, 365.25*24*60];

    units.forEach(function(d,i){
        if (i==0) results[i] = Math.floor(rest);
        else results[i] = Math.floor(rest * converters[i]);
        if (results[i] != 0) rest = rest % (results[i]/converters[i]);
        console.log('-'+results[i]+' '+d+' -> rest', rest);
    });

    var text = results.map( (d,i) => d+' '+units[i] ).join(', ');
    console.log(text);
    results[0] = results[0] + " År"
    results[1] = results[1] + " Måneder"
    results[2] = results[2] + " Dager"
    results[3] = results[3] + " Timer"
    results[4] = results[4] + " Minutter"
    // return text;
    return results;
}