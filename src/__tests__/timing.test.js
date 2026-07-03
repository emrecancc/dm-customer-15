import { getResponseTime } from '../api';


test('API responds within 50ms', async () => {
  const time = await getResponseTime();
  expect(time).toBeLessThan(300);
});
