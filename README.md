# Slack Notifications from an SNS event built with Serverless, Typescript and Cooper TS

Put a message on an SNS queue and this lambda will post it to slack. Built with [Cooper TS](https://github.com/execonline-inc/CooperTS), using the [serverless framework](https://github.com/serverless/serverless).

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
yarn run slackNotifierTest
yarn run slackNotifierEntry
```

This is equivalent to

```bash
tsc --NoEmit && serverless invoke local --function slackNotifierTest --verbose
```

## Deploying

Configure your permissions so that you can deploy AWS resources (e.g. assume the serverless admin role), then

To deploy for the first time or to deploy all functions

```bash
serverless deploy
```

To re-deploy only a single function

```bash
yarn run deploy:slackNotifierEntry
```
