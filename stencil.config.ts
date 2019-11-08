import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-component-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    }
  ]
};
