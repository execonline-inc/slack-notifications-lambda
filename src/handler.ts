import Task from 'taskarian';
import { Context } from 'vm';
import { slackNotification } from './SlackNotification';

function toPromise<E, T>(task: Task<E, T>) {
  return new Promise<T>((resolve, reject) => task.fork(reject, resolve));
}

export const slackNotifierEntry = async (event: unknown, _context: Context) => {
  return toPromise(slackNotification(event));
};

export const slackNotifierTest = async () => {
  const sampleEvent = require('jsonfile').readFileSync('src/inputs/sample-input-event.json');
  return toPromise(slackNotification(sampleEvent));
};
