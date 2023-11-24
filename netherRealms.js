function solve(input) {
    let demons = input[0].split(/,\s*/);
    
    let sortedDemons = demons.sort((a, b) => a.localeCompare(b));
    
    for (let demon of sortedDemons) {
        let health = calculateHealth(demon);
        let damage = calculateDamage(demon);
        
        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    }

    function calculateHealth(demon) {
        let health = 0;
        let regex = /[^0-9+\-*.\/]/g;
        let matches = demon.match(regex);
        if (matches) {
            health = matches.map(char => char.charCodeAt(0)).reduce((a, b) => a + b, 0);
        }
        return health;
    }

    function calculateDamage(demon) {
        let damage = 0;
        let regex = /(-?\d*\.\d+|-?\d+)/g;
        let matches = demon.match(regex);
        if (matches) {
            damage = matches.map(Number).reduce((a, b) => a + b, 0);
            let modifiers = demon.match(/[*/]/g);
            if (modifiers) {
                for (let modifier of modifiers) {
                    if (modifier === '*') {
                        damage *= 2;
                    } else if (modifier === '/') {
                        damage /= 2;
                    }
                }
            }
        }
        return damage;
    }
}

// Test
solve(["M3ph-0.5s-0.5t0.0**"]);