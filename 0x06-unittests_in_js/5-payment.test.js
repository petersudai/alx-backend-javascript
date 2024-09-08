const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleSpy.restore();
  });

  it('should log the total as 120 when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Ensure console.log was called with the right message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Ensure console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the total as 20 when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Ensure console.log was called with the right message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Ensure console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
