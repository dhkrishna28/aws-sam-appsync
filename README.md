# AWS SAM: Deploying Appsync GraphQL Endpoint

This repository includes a sample application and demonstrates how to build and deploy a Appsync Graphql Endpoint with existing http endpoint as datasource using SAM Template.

When you deploy this application it will create an AppSync API to your account including the following:

1. An AppSync API including a schema, resolvers
2. Generate a API Key.

## Prerequisites

To deploy this sample application, you will need:

- Access to an AWS account with permissions to create CloudFormation stacks, AppSync APIs, AWS Identity and Access Management (IAM) roles and polices, and DynamoDB tables
- The SAM CLI installed in your environment, version >= 1.88.0.
- Node.js installed in your environment.
- A git CLI installed in your environment.
- Familiarity with GraphQL and JavaScript are beneficial, but not required.

## Application Architecture

This application consists of a SAM template, a graphql schema, Typescript resolvers, and Generated Javascript resolver using esbuild.

## Deploy the application

To get started clone this repository:

```bash
git clone https://github.com/dhkrishna28/aws-sam-appsync.git
cd aws-sam-appsync
```

The next step is to build and deploy this application to your AWS account so that you can explore the resources it creates and try interact with the GraphQL API. Run the `sam build` and `sam deploy --guided` commands and accept all the defaults.

```bash
sam build
sam deploy --guided
```

Once your deployment completes, you can see outputs printed in your terminal for both your API endpoint and your API key which you’ll need to test the application.

To get the complete information of the created Appsync Graphql Endpoint - Run below command 

```
aws appsync get-graphql-api --api-id <API_ID>
```

## Additional information for Pipeline settings and Generating javascript resolvers from typescript resolvers

```
# To Install packages (esbuild & typescript)
npm install

#To Generate JS Resolver
npm run generate

#To validate SAM Template
npm run validate

#To build from SAM Template
npm run build

#Deploy to AWS Account
npm run deploy
```

## Cleanup

To avoid accruing charges for the resources you created following the instructions, run sam delete to remove all cloud resources.

```bash
sam delete
```
