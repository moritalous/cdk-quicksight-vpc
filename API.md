# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessClusterVpcQuickSight <a name="ServerlessClusterVpcQuickSight" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight"></a>

#### Initializers <a name="Initializers" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer"></a>

```typescript
import { ServerlessClusterVpcQuickSight } from 'cdk-quicksight-vpc'

new ServerlessClusterVpcQuickSight(scope: Construct, id: string, props: IServerlessClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-quicksight-vpc.IServerlessClusterProps">IServerlessClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-quicksight-vpc.IServerlessClusterProps">IServerlessClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.isConstruct"></a>

```typescript
import { ServerlessClusterVpcQuickSight } from 'cdk-quicksight-vpc'

ServerlessClusterVpcQuickSight.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-quicksight-vpc.ServerlessClusterVpcQuickSight.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IServerlessClusterProps <a name="IServerlessClusterProps" id="cdk-quicksight-vpc.IServerlessClusterProps"></a>

- *Implemented By:* <a href="#cdk-quicksight-vpc.IServerlessClusterProps">IServerlessClusterProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-quicksight-vpc.IServerlessClusterProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_rds.IServerlessCluster</code> | *No description.* |
| <code><a href="#cdk-quicksight-vpc.IServerlessClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="cdk-quicksight-vpc.IServerlessClusterProps.property.cluster"></a>

```typescript
public readonly cluster: IServerlessCluster;
```

- *Type:* aws-cdk-lib.aws_rds.IServerlessCluster

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-quicksight-vpc.IServerlessClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

