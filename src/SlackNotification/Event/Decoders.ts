import Decoder, {
  at,
  field,
  succeed,
  string,
  } from 'jsonous';
import { EventObjectDecoderFailed, Message } from './Types';

export const eventObjectDecoderFailed = (message: string): EventObjectDecoderFailed => ({
  kind: 'event-object-decoder-failed',
  message,
});

export const messagesDecoder: Decoder<Message> = succeed({})
.assign('message', field("Records", at([0, "Sns", "Message"], string)))
  