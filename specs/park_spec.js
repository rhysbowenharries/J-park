const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {

    dino1 = new Dinosaur('Rapptor', 'flesh', 7);
    dino2 = new Dinosaur('t-rex', 'carnivore', 50);
    dino3 = new Dinosaur('flapper', 'chocolate', 11)
    dino4 = new Dinosaur('flapper', 'vegan chocolate', 110)
    dinoes = [dino1,dino2];
    park = new Park('J-Park', "$369", dinoes);
  });

// it list

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'J-Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, '$369')
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1,dino2])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.dinoAdd(dino3);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1,dino2,dino3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.dinoDrop(dino3);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1,])

  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostAtractiveDinoTest();
    assert.deepStrictEqual(actual, dino2,)
  });


  it('should be able to find all dinosaurs of a particular species',function () {
    park.dinoAdd(dino3);
    park.dinoAdd(dino4);
    const actual = park.speciesScanner('flapper')
    assert.deepStrictEqual(actual, [dino3,dino4])
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.dinoAdd(dino3);
    park.dinoAdd(dino4);
    park.dinoSpeciesDrop('flapper')
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [dino1,dino2])
  });

});
