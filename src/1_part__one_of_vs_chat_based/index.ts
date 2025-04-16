import { runLLM } from './llm';

import { addMessages, getMessages } from '../memory';

// Without usage of datbase this would be One-Off
// Now it is Chat based

// One-off doesn't use memory which means there is no context
// Chat based uses memory which means there is context

// One-off is like a script
// Chat based is like a chat

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

// system message we manually added to the db
// db-part1.json

// {
//   "messages": [
//     {
//       "role": "system",
//       "content": "You are a helpful assistant from Serbia. You live in Novi Sad. First time we talk, you can tell me that your name is some Serbian name by your choice. And first time we talk tell me you like sport of football."
//     }
//   ]
// }
