import Task from 'taskarian';
import {post, toHttpTask} from 'ajaxios';
import { SlackMessages } from '..';
import { slackNotifierRequestFailed, SlackNotifierRequestFailed, slackNotifierRequestSucceded, SlackNotificationSuccess } from '../Types';

export const sendSlackMessages = (slackMessages: SlackMessages): Task<SlackNotifierRequestFailed, SlackNotificationSuccess> => {
  const request = post(slackMessages.slackWebhookUrl)
    .withData({text: slackMessages.messages[0], channel: slackMessages.slackChannel, username: slackMessages.slackUser})
  return toHttpTask(request).mapError(e => slackNotifierRequestFailed(e.kind)).map(slackNotifierRequestSucceded)
}
  
