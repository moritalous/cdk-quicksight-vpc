import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'moritalous',
  authorAddress: 'moritalous@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-quicksight-vpc',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/moritalous/cdk-quicksight-vpc.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  publishToPypi: {
    distName: 'cdk-quicksight-vpc',
    module: 'cdk_quicksight_vpc',
  },
  stability: 'experimental',
});
project.synth();