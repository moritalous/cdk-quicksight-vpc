import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lib from '../lib/index';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/index.ts
test('RdsVpcQuickSight Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  const vpc = new ec2.Vpc(stack, 'vpc');
  const cluster = new rds.ServerlessCluster(stack, 'rds', {
    engine: rds.DatabaseClusterEngine.auroraPostgres({
      version: rds.AuroraPostgresEngineVersion.VER_11_4,
    }),
    vpc: vpc,
  });

  // WHEN
  new lib.ServerlessClusterVpcQuickSight(stack, 'rds-vpc-quicksight-lib', {
    vpc: vpc,
    cluster: cluster,
  });
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::EC2::SecurityGroup', {
    GroupDescription: 'Security group for QuickSight VPC Access',
  });

});
