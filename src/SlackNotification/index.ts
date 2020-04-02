import decodeEventObject from './Event';
import Task from 'taskarian';
import {
  HandlerFail,
  SuccessLambdaResult,
  SlackNotifierRequestFailed,
  SlackNotificationSuccess,
} from './Types';
import { readVarT } from '@execonline-inc/environment';
import { Message } from './Event/Types';
import { sendSlackMessages } from './SendSlackMessage';

export interface SlackMessage {
  slackChannel: string;
  slackUser: string;
  slackWebhookUrl: string;
  message: Message;
}

export const slackNotification = (event: unknown): Task<HandlerFail, SuccessLambdaResult> =>
  Task.succeed<HandlerFail, {}>({})
    .assign('message', decodeEventObject(event) as Task<HandlerFail, Message>)
    .assign('slackChannel', readVarT('SLACK_CHANNEL'))
    .assign('slackUser', readVarT('SLACK_USER'))
    .assign('slackWebhookUrl', readVarT('SLACK_WEBHOOK_URL'))
    .andThen(postSlackMessage);

const postSlackMessage = (
  slackMessages: SlackMessage
): Task<SlackNotifierRequestFailed, SlackNotificationSuccess> => {
  return sendSlackMessages(slackMessages);
};
