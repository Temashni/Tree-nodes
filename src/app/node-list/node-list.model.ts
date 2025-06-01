import { signal, WritableSignal } from '@angular/core';

export interface TreeNode {
  id: number,
  title: string,
  is_deleted: boolean,
  children: TreeNode[]
}

export class TreeNodeState {
  id: number;
  title: string;
  is_deleted: boolean;
  children: TreeNodeState[];
  isOpen: WritableSignal<boolean> = signal(false);

  constructor(treeNode: TreeNode) {
    this.id = treeNode.id;
    this.title = treeNode.title;
    this.is_deleted = treeNode.is_deleted;
    this.children = treeNode.children.map(x => new TreeNodeState(x));
  }

  toggleOpen(): void {
    this.isOpen.update(prev => !prev);
    this.children.forEach(child => child.toggleOpen());
  }
}