import Task from 'taskarian';
import { err, ok, Result } from 'resulty';
import { fromNullable, Maybe } from 'maybeasy';

export type EnvironmentVar = 'SUPERSECRET';

export interface MissingEnvironmentVar {
  kind: 'missing-environment-var';
  key: EnvironmentVar;
}

export const missingEnvironmentVar = (key: EnvironmentVar): MissingEnvironmentVar => ({
  kind: 'missing-environment-var',
  key,
});

export const readVarM = (key: EnvironmentVar): Maybe<string> => fromNullable(process.env[key]);

export const readVarR = (key: EnvironmentVar): Result<MissingEnvironmentVar, string> =>
  readVarM(key).cata<Result<MissingEnvironmentVar, string>>({
    Just: ok,
    Nothing: () => err(missingEnvironmentVar(key)),
  });

export const readVarT = (key: EnvironmentVar): Task<MissingEnvironmentVar, string> =>
  new Task((reject, resolve) => {
    readVarR(key).cata({ Ok: resolve, Err: reject });
    return () => {};
  });
