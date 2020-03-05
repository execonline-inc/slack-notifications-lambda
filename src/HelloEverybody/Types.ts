import { AddGreetingMessageError } from './AddGreetingMessage/Types';
import { EventObjectDecoderFailed } from './Event/Types';
import { MissingEnvironmentVar } from './Environment';

export type HandlerFail =
  | MissingEnvironmentVar
  | EventObjectDecoderFailed
  | HelloEverybodyError
  | AddGreetingMessageError;

export type HelloEverybodyError = HelloEverybodyRequestFailed | HelloEverybodyDecoderFailed;

export type SuccessLambdaResult = HelloEverybodySuccess;

export interface DecodedEventObject {
  greeter: string;
  greeting: string;
}

export interface HelloEverybodyRequestFailed {
  kind: 'hello-everybody-request-failed';
  message: string;
}

export const helloEverybodyRequestFailed = (message: string): HelloEverybodyRequestFailed => ({
  kind: 'hello-everybody-request-failed',
  message,
});

export interface HelloEverybodySuccess {
  greetingMessage: GreetingMessage;
}

export type GreetingMessage = string;

export interface HelloEverybodyDecoderFailed {
  kind: 'hello-everybody-decoder-failed';
  message: string;
}

export interface HelloEverybodyRequestFailed {
  kind: 'hello-everybody-request-failed';
  message: string;
}
