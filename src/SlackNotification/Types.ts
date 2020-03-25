import { EventObjectDecoderFailed } from './Event/Types';
import { MissingEnvironmentVar } from './Environment';
import { HttpError } from 'ajaxian';
export type HandlerFail =
  | MissingEnvironmentVar
  | EventObjectDecoderFailed
  | SlackNotifierError

export type SlackNotifierError = HttpError | MessageDecoderFailed | SlackNotifierRequestFailed;

export type SuccessLambdaResult = SlackNotificationSuccess | string;

export interface SlackNotifierRequestFailed {
  kind: 'slack-notifier-request-failed';
  message: string;
}

export const slackNotifierRequestFailed = (message: string): SlackNotifierRequestFailed => ({
  kind: 'slack-notifier-request-failed',
  message,
});

export interface SlackNotificationSuccess {
  kind: 'slack-notifier-request-succeeded';
  message: unknown;
}

export const slackNotifierRequestSucceded = (s: unknown): SlackNotificationSuccess => ({
  kind: 'slack-notifier-request-succeeded',
  message: s  
});

export type SlackMessage = string;

export interface MessageDecoderFailed {
  kind: 'message-decoder-failed';
  message: string;
}

