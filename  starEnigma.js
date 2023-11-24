function  starEnigma(arr){
    let msgsCount = Number(arr.shift());
    let decruptedMsgs = [];

    let starPattern = /[star]/gi;

    for(let i = 0; i < msgsCount; i++){
        let msg = arr[i];
        let decruptedMsg = '';

        let matches = msg.match(starPattern);

        if(matches){
            let count = matches.length;

            for(let char of msg){
                let code = char.charCodeAt();
                code -= count;

                let newChar = String.fromCharCode(code);
                decruptedMsg += newChar;
            }
        } else{
            decruptedMsg = msg;
        }
        decruptedMsgs.push(decruptedMsg); 
    }
    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldier>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = []; 

    for(let msg of decruptedMsgs){
        let match = msg.match(planetPattern);

        if(match){
            let { name, type} = match.groups;

            if(type == 'A'){
                attackedPlanets.push(name);
            }else {
                destroyedPlanets.push(name);  
            }
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}
starEnigma([
    '2', 
    'STCDoghudd4=63333$D$0A53333', 
    'EHfsytsnhf?8555&I&2C9555SR'
]);