import { MyTestExecutorSchema } from './schema';
import executor from './executor';

const options: MyTestExecutorSchema = {};

describe('MyTest Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
