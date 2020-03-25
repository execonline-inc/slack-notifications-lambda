import decodeEventObject from './Event';
import Task from 'taskarian';
import { HandlerFail, SuccessLambdaResult, SlackNotifierRequestFailed, SlackNotificationSuccess } from './Types';
import { readVarT } from './Environment';
import { Messages } from './Event/Types';
import { sendSlackMessages } from './SendSlackMessage';

export interface SlackMessages {
  slackChannel: string;
  slackUser: string;
  slackWebhookUrl: string;
  messages: Messages
}
    
export const slackNotification = (event: unknown): Task<HandlerFail, SuccessLambdaResult> => Task.succeed<HandlerFail, {}>({})
  .assign('messages', decodeEventObject(event) as Task<HandlerFail, Messages>)
  .assign('slackChannel', readVarT('SLACK_CHANNEL'))
  .assign('slackUser', readVarT('SLACK_USER'))
  .assign('slackWebhookUrl', readVarT('SLACK_WEBHOOK_URL'))
  .andThen(postSlackMessage);

const postSlackMessage = (slackMessages: SlackMessages): Task<SlackNotifierRequestFailed, SlackNotificationSuccess> => 
  sendSlackMessages(slackMessages)

