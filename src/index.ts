import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';


export interface IServerlessClusterProps {
  // Define construct properties here
  vpc: ec2.IVpc;
  cluster: rds.IServerlessCluster;
}

export class ServerlessClusterVpcQuickSight extends Construct {

  constructor(scope: Construct, id: string, props: IServerlessClusterProps) {
    super(scope, id);

    const auroraSgs = props.cluster.connections.securityGroups;

    const quichsightSg = new ec2.SecurityGroup(this, 'quicksight-security-group', {
      vpc: props.vpc,
      description: 'Security group for QuickSight VPC Access',
    });

    auroraSgs.forEach((auroraSg) => {
      quichsightSg.addIngressRule(auroraSg, ec2.Port.allTcp());
      quichsightSg.addEgressRule(auroraSg, props.cluster.connections.defaultPort!);

      auroraSg.addIngressRule(quichsightSg, props.cluster.connections.defaultPort!);
    });

    new cdk.CfnOutput(this, 'vpc-id', { value: props.vpc.vpcId });
    new cdk.CfnOutput(this, 'securitygroup-id', { value: quichsightSg.securityGroupId });
    new cdk.CfnOutput(this, 'private-subnets', { value: props.vpc.privateSubnets.map((subnet) => subnet.subnetId).join(', ') });
  }
}
