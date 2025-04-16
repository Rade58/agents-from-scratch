import { runLLM } from './llm';

import { addMessages, getMessages } from '../memory';

export async function partOne() {
  console.log('Part One');

  const userMessage = process.argv[2];

  if (!userMessage) {
    console.error('Please provide a message!');
    process.exit(1);
  }

  await addMessages([{ role: 'user', content: userMessage }], 'db-part1');

  const messages = await getMessages('db-part1');

  const responseMessage = await runLLM({ messages });

  await addMessages(
    [{ role: 'assistant', content: responseMessage }],
    'db-part1'
  );

  console.log(responseMessage);
}
