import { ChatCompletionRequestMessage, ChatCompletionResponseMessage } from 'openai';

export type TypeMessage = ChatCompletionResponseMessage | ChatCompletionRequestMessage;
