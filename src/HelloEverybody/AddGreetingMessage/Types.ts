export type AddGreetingMessageError = AddGreetingMessageFailed | AddGreetingMessageDecoderFailed;

export interface AddGreetingMessageSuccess {
  greetingMessage: string;
}

export const addGreetingMessageSuccess = (greetingMessage: string) => ({
  greetingMessage
})

export interface AddGreetingMessageFailed {
  kind: 'add-greeting-message-failed';
  message: string;
}
export const addGreetingMessageFailed = (message: string): AddGreetingMessageFailed => ({
  kind: 'add-greeting-message-failed',
  message,
});

export interface AddGreetingMessageDecoderFailed {
  kind: 'add-greeting-message-decoder-failed';
  message: string;
}

export const addGreetingMessageDecoderFailed = (
  message: string
): AddGreetingMessageDecoderFailed => ({
  kind: 'add-greeting-message-decoder-failed',
  message,
});
