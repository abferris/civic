import { rootState } from './index';

describe('rootState', () => {
  it('uses the full object when the elections key is not present', () => {
    const state = {
      hello: 'world',
    };
    expect(rootState(state)).to.eql(state);
  });

  it('uses the farmersMarket object when the elections key is present', () => {
    const state = {
      farmersMarket: {
        hello: 'world',
      },
      otherScope: {
        not: 'for you',
      },
    };
    expect(rootState(state)).to.eql(state.elections);
  });
});
