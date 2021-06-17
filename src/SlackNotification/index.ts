import { readVarT } from '@execonline-inc/environment';
import Task from 'taskarian';
import decodeEventObject from './Event';
import { Message } from './Event/Types';
import { sendSlackMessages } from './SendSlackMessage';
import {
  HandlerFail,
  SlackNotificationSuccess,
  SlackNotifierRequestFailed,
  SuccessLambdaResult,
} from './Types';

export interface SlackMessage {
  slackChannel: string;
  slackUser: string;
  slackWebhookUrl: string;
  message: Message;
}

export const slackNotification = (event: unknown): Task<HandlerFail, SuccessLambdaResult> =>
  Task.succeed<HandlerFail, {}>({})
    .assign(
      'message',
      decodeEventObject(event).mapError<HandlerFail>(e => e)
    )
    .assign('slackChannel', readVarT('SLACK_CHANNEL'))
    .assign('slackUser', readVarT('SLACK_USER'))
    .assign('slackWebhookUrl', readVarT('SLACK_WEBHOOK_URL'))
    .andThen(postSlackMessage);

const postSlackMessage = (
  slackMessages: SlackMessage
): Task<SlackNotifierRequestFailed, SlackNotificationSuccess> => {
  return sendSlackMessages(slackMessages);
};
