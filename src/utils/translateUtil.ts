import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'azure-openai';
import { throwErrorToastrAsync } from './apiUtils';
import { openAIConstants } from '../constants/openAIconstants';

const openAiApi = new OpenAIApi(
    new Configuration({
        azure: {
            apiKey: openAIConstants.API_KEY,
            endpoint: openAIConstants.ENDPOINT,
            deploymentName: openAIConstants.DEPLOYMENT_NAME,
        },
    }),
);

export async function translateText(text: string, from: string, to: string) {
    if (from === to) {
        return text;
    }
    try {
        const completions = await openAiApi.createChatCompletion({
            model: openAIConstants.MODEL,
            messages: [
                openAIConstants.SYSTEM_MESSAGE as ChatCompletionRequestMessage,
                ...(openAIConstants.EXAMPLES_MESSAGES as ChatCompletionRequestMessage[]),
                {
                    role: 'user',
                    content: `${text} {{${from}}} [[${to}]]`,
                },
            ],
        });

        return completions.data.choices[0].message?.content;
    } catch (e) {
        throwErrorToastrAsync(e);
    }
}
