import { runAgent } from './agent';
import { z } from 'zod';

export async function partTwo() {
  const userMessage = process.argv[2];

  if (!userMessage) {
    console.error('Please provide a message');
    process.exit(1);
  }

  const weatherTool = {
    name: 'get_weather_stuff',
    description: 'Use this tool to get weather information.',
    parameters: z.object({
      // good to have because it helps ai to understand
      // why did you pick this tool
      reasoning: z.string().describe('Why did you pick this tool?'),
    }),
  };

  const popCultureTool = {
    name: 'get_pop_culture_stuff',
    description: 'Use this tool to get pop culture information.',
    parameters: z.object({
      reasoning: z.string().describe('Why did you pick this tool?'),
    }),
  };

  const response = await runAgent({
    userMessage,
    tools: [weatherTool, popCultureTool],
  });

  console.log(response);
}
