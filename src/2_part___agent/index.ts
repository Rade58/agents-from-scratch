import { runAgent } from './agent';
import { z } from 'zod';

export async function partTwo() {
  const userMessage = process.argv[2];

  if (!userMessage) {
    console.error('Please provide a message');
    process.exit(1);
  }

  const weatherTool = {
    name: 'get_w_stuff',
    description: 'Use This tool to get weather information',
    parameters: z.object({
      reasoning: z.string().describe('Why did you pick this tool?'),
    }),
  };

  const response = await runAgent({
    userMessage,
    tools: [weatherTool],
  });

  console.log(response);
}
