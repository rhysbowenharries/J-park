const Park = function (name, price, dinoes) {
  this.name = name;
  this.ticketPrice = price;
  this.dinoCollection = dinoes;
}

Park.prototype.dinoAdd = function (dino) {
  this.dinoCollection.push(dino);
};

Park.prototype.dinoDrop = function (dino) {
  this.dinoCollection.pop(dino);
};

Park.prototype.mostAtractiveDinoTest = function () {
  let mostPopularDinoVisits = 0
  let mostPopularDino;
  for (const dino of this.dinoCollection) {
    if (dino.guestsAttractedPerDay > mostPopularDinoVisits) {
      mostPopularDinoVisits = dino.guestsAttractedPerDay;
      mostPopularDino = dino
    }
  };
  return mostPopularDino ;
};

Park.prototype.speciesScanner = function (species) {
  let dinoesOfScan = []
  for (const dino of this.dinoCollection ) {
    if (dino.species === species) {
      dinoesOfScan.push(dino);
    }
  }
  return dinoesOfScan;
};

Park.prototype.dinoSpeciesDrop = function (species) {
  for (const dino of this.dinoCollection ) {
    if (dino.species === species) {
      this.dinoCollection.pop(dino);
    };
  };
};

module.exports = Park
