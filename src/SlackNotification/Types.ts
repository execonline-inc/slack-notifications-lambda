import { MissingVarError } from '@execonline-inc/environment';
import { HttpError } from 'ajaxian';
import { EventObjectDecoderFailed } from './Event/Types';

export type HandlerFail = MissingVarError | EventObjectDecoderFailed | SlackNotifierError;

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
  message: s,
});

export type SlackMessage = string;

export interface MessageDecoderFailed {
  kind: 'message-decoder-failed';
  message: string;
}
