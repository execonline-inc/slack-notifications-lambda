import Task from 'taskarian';
import { toTask } from '../Result';
import { messagesDecoder } from './Decoders';
import { EventObjectDecoderFailed, eventObjectDecoderFailed, Messages } from './Types';

const decodeEventObject = (event: unknown): Task<EventObjectDecoderFailed, Messages> =>
  toTask(messagesDecoder.decodeAny(event).mapError(eventObjectDecoderFailed));

export default decodeEventObject;
