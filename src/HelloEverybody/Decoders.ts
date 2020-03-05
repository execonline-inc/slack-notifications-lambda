import Decoder, { field, string, succeed } from 'jsonous';
import { HelloEverybodyDecoderFailed, HelloEverybodySuccess } from './Types';

export const helloEverybodySuccessDecoder: Decoder<HelloEverybodySuccess> = succeed({}).assign(
  'greetingMessage',
  field('greetingMessage', string)
);

export const helloEverybodyDecoderFailed = (message: string): HelloEverybodyDecoderFailed => ({
  kind: 'hello-everybody-decoder-failed',
  message,
});
