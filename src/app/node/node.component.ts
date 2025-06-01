import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TreeNodeState } from '../node-list/node-list.model';
import { NodeBehavior } from './node.model';

@Component({
  selector: 'app-node',
  imports: [],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent {
  @Input({ required: true }) node!: TreeNodeState;
  @Input() behavior: NodeBehavior = 'showChildren';

  get btnText(): string {
    return this.behavior === "showChildren" ? "Show Children" : "Log";
  } 

  onButtonClick() {
    if (this.behavior === 'showChildren') {
      this.node.toggleOpen();
    } else {
      console.log('нажали на узел ID', this.node.id);
    }
  }

  // Метод для логирования действий
  // logAction() {
  //   console.log('нажали на узел ID', this.model.id);
  // }
}