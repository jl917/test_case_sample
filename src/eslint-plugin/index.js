import maxParams from './rules/max-params';

export const rules = {
  'max-params': maxParams,
};

export const configs = {
  recommended: {
    plugins: ['@julong/jl'],
    rules: {
      '@julong/jl/max-params': ['warn', { max: 3 }],
    },
  },
};