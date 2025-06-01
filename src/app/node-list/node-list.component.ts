import { Component } from '@angular/core';
import { TreeNodeState } from './node-list.model';
import { NodeComponent } from '../node/node.component';
import { treeNode, treeNodes } from './node-list-examples.model';

@Component({
  selector: 'app-node-list',
  imports: [NodeComponent],
  templateUrl: './node-list.component.html',
  styleUrl: './node-list.component.scss'
})
export class NodeListComponent {
  node = treeNode.map(x => new TreeNodeState(x));
  nodes = treeNodes.map(x => new TreeNodeState(x));
}
