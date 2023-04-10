import * as cdk from 'aws-cdk-lib';

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { ServerlessClusterVpcQuickSight } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

const vpc = new ec2.Vpc(stack, '');
const aurora = new rds.ServerlessCluster(stack, 'rds', {
  engine: rds.DatabaseClusterEngine.auroraPostgres({
    version: rds.AuroraPostgresEngineVersion.VER_11_4,
  }),
  vpc: vpc,
});

new ServerlessClusterVpcQuickSight(stack, 'rds-vpc-quicksight-lib', {
  vpc: vpc,
  cluster: aurora,
});
