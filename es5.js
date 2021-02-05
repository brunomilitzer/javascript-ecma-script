// the old way
function SuperHero(name, strength, speed, weapon, cape) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.weapon = weapon;
    this.cape = cape;
    this.goodHero = true;
    this.powerUp = function () {
        this.strength += 5;
    }
}

SuperHero.prototype.goodHero = true;
SuperHero.prototype.powerUp = function() {
    this.strength += 5;
}

let hero1 = new SuperHero('Batman', 10,8, "Fists", true);
hero1.name = "Superman";
hero1.goodHero = false;
hero1.powerUp();
console.log(hero1);