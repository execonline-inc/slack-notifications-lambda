export interface Message {
  message: string
}

export interface EventObjectDecoderFailed {
  kind: 'event-object-decoder-failed';
  message: string;
}

export const eventObjectDecoderFailed = (message: string): EventObjectDecoderFailed => ({
  kind: 'event-object-decoder-failed',
  message,
});
