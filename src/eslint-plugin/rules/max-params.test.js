import maxParams from './max-params';
import { runTest } from './utils';

const cases = {
  valid: [
    {
      code: 'function add(a,b){return a + b}',
      rule: { 'max-params': 'error' },
    },
  ],
  inValid: [
    {
      code: 'function add(a,b,c,d){return a + b}',
      rule: { 'max-params': 'error' },
    },
    {
      code: 'function add(a,b){return a + b}',
      rule: { 'max-params': ['warn', { 'max': 1 }] },
    }
  ],
}

runTest('max-params', maxParams, cases);
