const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateStub;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');

    // Stub the calculateNumber method in Utils before the test
    calculateStub = sinon.stub(Utils, 'calculateNumber');
    calculateStub.withArgs('SUM', 100, 20).returns(120); // Stub result to return 120
  });

  afterEach(() => {
    // Restore the spies and stubs after each test
    consoleSpy.restore();
    calculateStub.restore();
  });

  it('should call Utils.calculateNumber with SUM and log the total', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Check that calculateNumber was called once with the right arguments
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Check that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
});
