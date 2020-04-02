import Task from 'taskarian';
import { Result } from 'resulty';

export const toTask = <E, T>(result: Result<E, T>): Task<E, T> =>
  result.cata({
    Ok: Task.succeed,
    Err: Task.fail,
  }) as Task<E, T>;
