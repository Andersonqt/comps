import { Component, OnInit, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { comp } from './example-data';

/** File node data with possible child nodes. */
// export interface FileNode {
//   name: string;
//   type: string;
//   children?: FileNode[];
// }

export interface PositionNode {
  name: string;
  champions?: Champion[];
}

export interface Champion {
  name: string;
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  name: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-tree-flat',
  templateUrl: './tree-flat.component.html',
  styleUrls: ['./tree-flat.component.scss']
})
export class TreeFlatComponent implements OnInit {
  @Input() composition: any;
  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<PositionNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<PositionNode, FlatTreeNode>;

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit(): void {
    this.setDataSource();
  }

  setDataSource(){
    this.dataSource.data = this.composition;
  }

  /** Transform the data to something the tree can read. */
  transformer(node: PositionNode, level: number) {
    return {
      name: node.name,
      // type: node.type,
      level: level,
      expandable: !!node.champions
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatTreeNode) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: PositionNode): Champion[] | null | undefined {
    return node.champions;
  }
}
