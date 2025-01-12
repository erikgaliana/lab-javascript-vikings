// Soldier
function Soldier(healthArg, strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;
    this.attack=function(){ return this.strength};

}

Soldier.prototype.receiveDamage= function(damage){
    this.health -= damage;
    
};

// Viking
function Viking(name, healthArg, strengthArg) {
    this.name=name;
    Soldier.call(this, healthArg, strengthArg);
    
}

Viking.prototype=Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;


Viking.prototype.receiveDamage= function (damage) {
    this.health -= damage;
    if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
    } else {
             return `${this.name} has died in act of combat`;
            }

};

Viking.prototype.battleCry= function() {
    return `Odin Owns You All!`;
}


// Saxon
function Saxon( healthArg, strengthArg) {
   
    Soldier.call(this, healthArg, strengthArg);
    

}

Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

Saxon.prototype.receiveDamage= function (damage) {
    this.health -= damage;
    if(this.health>0){
        return `A Saxon has received ${damage} points of damage`;
    } else { 
            return `A Saxon has died in combat`;
            }

};



// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
}

War.prototype.addViking= function(viking){
    
    this.vikingArmy.push(viking);
    
};

War.prototype.addSaxon= function(saxon){
    
    this.saxonArmy.push(saxon);
    
};


War.prototype.vikingAttack= function(){
    
    var victim = Math.floor(Math.random() * this.saxonArmy.length);
    var attacker = Math.floor(Math.random() * this.vikingArmy.length);
    
    var attackresult =this.saxonArmy[victim].receiveDamage(this.vikingArmy[attacker].strength);
    
   // function filter clears saxon army array
    var filtered = this.saxonArmy.filter(function(item, index , arr){

        return item.health > 0;
    
    });

    this.saxonArmy=filtered;

    return attackresult;

    
};

War.prototype.saxonAttack= function(){
    
    var victim = Math.floor(Math.random() * this.vikingArmy.length);
    var attacker = Math.floor(Math.random() * this.saxonArmy.length)
   
    
    var attackresult =this.vikingArmy[victim].receiveDamage(this.saxonArmy[attacker].strength);
    
   // function filter clears viking army array
    var filtered = this.vikingArmy.filter(function(item, index , arr){

        return item.health > 0;
    
    });

    this.vikingArmy=filtered;

    return attackresult;

    
};

War.prototype.showStatus= function () {

    if ( this.vikingArmy.length===0) {
        return "Saxons have fought for their lives and survive another day...";
    } else { 
            if ( this.saxonArmy.length===0) {
                    return "Vikings have won the war of the century!";
                } else { return "Vikings and Saxons are still in the thick of battle.";}
            }  
}         
