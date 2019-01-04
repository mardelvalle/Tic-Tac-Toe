import { writeInSquare, gameSetup } from './index.js';

describe('writeInSquare', function() {
// refresh the board
  afterEach(function () {
    gameSetup()
  });
// test if first player is x
  it('first move is X', function() {

    let testSquare;

    testSquare = document.createElement('div');

    writeInSquare(testSquare)
    chai.expect(testSquare.textContent).to.equal('X');
  })
// test if players are alternating
  it('alternates between X and O', function () {

     let firstSquarePlayed;
     let secondSquarePlayed

     firstSquarePlayed = document.createElement('div');
     secondSquarePlayed = document.createElement('div');

     writeInSquare(firstSquarePlayed)
     writeInSquare(secondSquarePlayed)

     chai.expect(firstSquarePlayed.textContent).to.equal('X');
     chai.expect(secondSquarePlayed.textContent).to.equal('O');
   })

})
