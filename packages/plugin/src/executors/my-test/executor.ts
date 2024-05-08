import { MyTestExecutorSchema } from './schema';

import { input } from '@inquirer/prompts';

const runExecutor = async (options: MyTestExecutorSchema) => {
  console.log('Executor ran for MyTest');
  const data = await input({ message: 'input text...' });
  console.log(data);
  return {
    success: true,
  };
}

export default runExecutor;
