var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('it should adds 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })
  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })
  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })
  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })
  it('it should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(2);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 112);
  })
  it('it should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })
  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 4);
  })
});
