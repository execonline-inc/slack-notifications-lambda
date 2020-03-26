import Task from 'taskarian';
import { toTask } from '../Result';
import { messagesDecoder } from './Decoders';
import { EventObjectDecoderFailed, eventObjectDecoderFailed, Message } from './Types';

const decodeEventObject = (event: unknown): Task<EventObjectDecoderFailed, Message> =>
  toTask(messagesDecoder.decodeAny(event).mapError(eventObjectDecoderFailed));

export default decodeEventObject;
