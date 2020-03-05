import Task from 'taskarian';
import { toTask } from '../Result';
import { DecodedEventObject } from '../Types';
import { addGreetingMessageDecoderFailed, addGreetingMessageSuccessDecoder } from './Decoders';
import {
  AddGreetingMessageDecoderFailed,
  AddGreetingMessageError,
  AddGreetingMessageFailed,
  AddGreetingMessageSuccess,
  addGreetingMessageSuccess,
} from './Types';

const makeGreetingMessage = (
  greeter: string,
  greeting: string
): Task<AddGreetingMessageFailed, AddGreetingMessageSuccess> => {
  return new Task<AddGreetingMessageFailed, AddGreetingMessageSuccess>((_reject, resolve) => {
    resolve(addGreetingMessageSuccess(`${greeting} by ${greeter}`));
    return () => {};
  });
};

function addGreetingMessage(
  greeter: string,
  greeting: string
): Task<AddGreetingMessageError, AddGreetingMessageSuccess> {
  return makeGreetingMessage(greeter, greeting);
}

const decodeAddGreetingMessage = (
  result: unknown
): Task<AddGreetingMessageDecoderFailed, AddGreetingMessageSuccess> =>
  toTask(
    addGreetingMessageSuccessDecoder.decodeAny(result).mapError(addGreetingMessageDecoderFailed)
  );

export const addAndDecodeGreetingMessage = ({
  greeter,
  greeting,
}: DecodedEventObject): Task<AddGreetingMessageError, AddGreetingMessageSuccess> =>
  addGreetingMessage(greeter, greeting).andThen(decodeAddGreetingMessage);
