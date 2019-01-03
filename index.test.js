import { writeInSquare, gameSetup } from './index.js';

describe('writeInSquare', function() {
  it('first move is X', function() {
    // Create an element for the the test
    let testSquare;

    testSquare = document.createElement('div');

    writeInSquare(testSquare)
    chai.expect(testSquare.textContent).to.equal('X');

    gameSetup();
  })

  it('alternates between X and O', function () {
     // Create an element for the the test
     let firstSquarePlayed;
     let secondSquarePlayed

     firstSquarePlayed = document.createElement('div');
     secondSquarePlayed = document.createElement('div');

     writeInSquare(firstSquarePlayed)
     writeInSquare(secondSquarePlayed)

     chai.expect(firstSquarePlayed.textContent).to.equal('X');
     chai.expect(secondSquarePlayed.textContent).to.equal('O');

     gameSetup()
   })

})
