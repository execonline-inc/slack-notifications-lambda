import Task from 'taskarian';
import { post, toHttpTask } from 'ajaxios';
import { SlackMessage } from '..';
import {
  slackNotifierRequestFailed,
  SlackNotifierRequestFailed,
  slackNotifierRequestSucceded,
  SlackNotificationSuccess,
} from '../Types';

export const sendSlackMessages = (
  slackMessage: SlackMessage
): Task<SlackNotifierRequestFailed, SlackNotificationSuccess> => {
  const request = post(slackMessage.slackWebhookUrl).withData({
    text: slackMessage.message.message,
    channel: slackMessage.slackChannel,
    username: slackMessage.slackUser,
  });
  return toHttpTask(request)
    .mapError(e => slackNotifierRequestFailed(e.kind))
    .map(slackNotifierRequestSucceded);
};
