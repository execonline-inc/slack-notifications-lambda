import Decoder, { at, field, succeed, string } from 'jsonous';
import { Message } from './Types';

export const messagesDecoder: Decoder<Message> = succeed({}).assign(
  'message',
  field('Records', at([0, 'Sns', 'Message'], string))
);
