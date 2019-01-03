import { writeInSquare } from './index.js';

describe('writeInSquare', function() {
  it('first move is X', function() {
    // Create an element for the the test
    var testSquare = document.createElement('div');
    console.log(testSquare)
    console.log(writeInSquare)
    console.log(writeInSquare(testSquare))

    chai.expect(writeInSquare(testSquare).textContent).to.equal('X');
  })

  it('alternates between X and O', function () {
    // Create an element for the the test
    var firstSquarePlayed = document.createElement('div');
    var secondSquarePlayed = document.createElement('div');
    chai.expect(writeInSquare(firstSquarePlayed).textContent).to.equal('X');
    chai.expect(writeInSquare(secondSquarePlayed).textContent).to.equal('O');
  })

})
