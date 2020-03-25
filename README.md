# AWS Lambda Boilerplate with Serverless, Typescript and Cooper TS

AWS Lambda functions boilerplate with [Cooper TS](https://github.com/execonline-inc/CooperTS), using the [serverless framework](https://github.com/serverless/serverless).

## Prerequisites

- Node.js v12.16.1

## Development

- Install dependencies
- Make a copy of .env.sample, edit and include environment variables

```bash
npm install -g serverless

yarn
```

### Compiling

```bash
tsc --NoEmit
```

## Invoking the Lambda Function

```bash
yarn run slackNotification
```

## Deploying

Configure your permissions so that you can deploy AWS resources (e.g. assume the serverless admin role), then

```bash
yarn run deploy:slackNotification
```

