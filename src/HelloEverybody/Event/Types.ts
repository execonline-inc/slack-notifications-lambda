export interface RequestParameters {
  greeter: string;
  greeting: string;
}

export interface EventObjectDecoderFailed {
  kind: 'event-object-decoder-failed';
  message: string;
}

export const eventObjectDecoderFailed = (message: string): EventObjectDecoderFailed => ({
  kind: 'event-object-decoder-failed',
  message,
});
