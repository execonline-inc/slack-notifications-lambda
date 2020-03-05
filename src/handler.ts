import Task from 'taskarian';
import { Context } from 'vm';
import { helloEverybody } from './HelloEverybody';

function toPromise<E, T>(task: Task<E, T>) {
  return new Promise<T>((resolve, reject) => task.fork(reject, resolve));
}

export const helloEntry = async (event: unknown, _context: Context) => {
  return toPromise(helloEverybody(event));
};

export const helloTest = async () => {
  const sampleEvent = require('jsonfile').readFileSync('src/inputs/sample-input-event.json');
  return toPromise(helloEverybody(sampleEvent));
};
