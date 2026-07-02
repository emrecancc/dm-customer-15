const { performance } = require('perf_hooks');

describe('performance', () => {
  it('should complete within threshold', async () => {
    const start = performance.now();
    await someAsyncOperation();
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(1500);
  });
});