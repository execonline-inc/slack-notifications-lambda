import Task from 'taskarian';
import { toTask } from '../Result';
import { greetParamsDecoder } from './Decoders';
import { EventObjectDecoderFailed, eventObjectDecoderFailed, RequestParameters } from './Types';

const decodeEventObject = (event: unknown): Task<EventObjectDecoderFailed, RequestParameters> =>
  toTask(greetParamsDecoder.decodeAny(event).mapError(eventObjectDecoderFailed));

export default decodeEventObject;
