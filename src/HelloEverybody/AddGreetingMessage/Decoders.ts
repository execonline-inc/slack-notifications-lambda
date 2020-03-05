import Decoder, { field, string, succeed } from 'jsonous';
import { AddGreetingMessageDecoderFailed, AddGreetingMessageSuccess } from './Types';

export const addGreetingMessageSuccessDecoder: Decoder<AddGreetingMessageSuccess> = succeed(
  {}
).assign('greetingMessage', field('greetingMessage', string));

export const addGreetingMessageDecoderFailed = (
  message: string
): AddGreetingMessageDecoderFailed => ({
  kind: 'add-greeting-message-decoder-failed',
  message,
});
