import Decoder, {
  at,
  field,
  string,
  succeed
  } from 'jsonous';
import { EventObjectDecoderFailed, RequestParameters } from './Types';

export const requestParametersDecoder: Decoder<RequestParameters> = succeed({})
  .assign('greeter', field('greeter', string))
  .assign('greeting', field('greeting', string));

export const eventObjectDecoderFailed = (message: string): EventObjectDecoderFailed => ({
  kind: 'event-object-decoder-failed',
  message,
});

export const greetParamsDecoder: Decoder<RequestParameters> = at(
  ['input', 'detail', 'requestParameters'],
  requestParametersDecoder
);
