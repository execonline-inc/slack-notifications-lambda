import Decoder, {
  at,
  field,
  string,
  succeed,
  array
  } from 'jsonous';
import { EventObjectDecoderFailed, Message, Messages } from './Types';

export const eventObjectDecoderFailed = (message: string): EventObjectDecoderFailed => ({
  kind: 'event-object-decoder-failed',
  message,
});

export const messageDecoder: Decoder<Message> = succeed({})
  .assign('message', at(['Sns', 'Message'], string))

export const messagesDecoder: Decoder<Messages> = succeed({})
  .assign('messages', field('Records', array(messageDecoder)));
  