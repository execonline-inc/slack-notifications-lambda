import decodeEventObject from './Event';
import Task from 'taskarian';
import { addAndDecodeGreetingMessage } from './AddGreetingMessage';
import { HandlerFail, SuccessLambdaResult } from './Types';
import { readVarT } from './Environment';
import { RequestParameters } from './Event/Types';

export const helloEverybody = (event: unknown): Task<HandlerFail, SuccessLambdaResult> =>
  (decodeEventObject(event) as Task<HandlerFail, RequestParameters>)
    .assign('superSecretKey', readVarT('SUPERSECRET'))
    .andThen(addAndDecodeGreetingMessage);
