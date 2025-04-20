import { get } from 'http';
import type OpenAI from 'openai';

// we are using outr tools here
import { tools } from './tools/tools';

const getWeather = (input: any) => `hot, 90deg`;

export const runTool = async (
  toolCall: OpenAI.ChatCompletionMessageToolCall,
  userMessage: string,

  userId?: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  };

  switch (toolCall.function.name) {
    // don't need this, it's not a real tool
    // case 'get_weather_stuff':
    // return getWeather(input);
    case 'dad_joke':
      return tools.dadJokeTool(input);
    case 'generate_image':
      return tools.generateImage(input);
    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`);
  }
};
