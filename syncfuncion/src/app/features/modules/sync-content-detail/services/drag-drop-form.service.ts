import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Node } from '@syncfusion/ej2-angular-diagrams';
import { getOtherCommunicationElementShapes } from 'src/app/features/modules/sync-content-left/components/constants/communication/other-communication-element.symbol-palette';
import { drawShape } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class DragDropFormService {
  private customComponentForm: FormGroup;
  constructor() {}

  getCustomComponentFormValue() {
    return this.customComponentForm.getRawValue();
  }

  get getCustomComponentForm() {
    return this.customComponentForm;
  }

  setCustomComponentForm(form: FormGroup) {
    this.customComponentForm = form;
  }

  handleTransformSelectedNode(actionPopUp, currentNode, diagram) {
    if (actionPopUp.startsWith('continuityPerson')) {
      const sizeValue = this.customComponentForm?.get('size')?.value;
      currentNode.width = currentNode.width * sizeValue;
      currentNode.height = currentNode.height * sizeValue;
      const nodeIndex = diagram.nodes.findIndex(
        (node) => node.id === currentNode.id
      );
      if (nodeIndex !== -1) {
        diagram.remove(diagram.nodes[nodeIndex]);
        diagram.add(currentNode);
      }
    } else if (actionPopUp.startsWith('nodeTableComm')) {
      let itemSub = {
        id: "nodeTableComm",
        title: "Node Table",
        annotation: {
          content: ["Node Number", "Information", "1", ""],
          columnNo: 2,
        },
        menuId: "edit",
        toolTip: "Represents a Table of Node",
        type: "Table",
      };
      const column = this.customComponentForm?.get('column')?.value;
      itemSub.annotation.columnNo = Number(column);
      itemSub.annotation.content = [];
      for (let ix = 0; ix < Number(column); ix++) {
        if (ix === 0) {
          itemSub.annotation.content = itemSub.annotation.content.concat([
            'Node Number',
            'Information',
          ]);
        } else {
          itemSub.annotation.content = itemSub.annotation.content.concat([
            ix.toString(),
            'value' + ix,
          ]);
        }
      }
      let item = drawShape(itemSub);
      item.offsetX = diagram.nodes[0].offsetX;
      item.offsetY = diagram.nodes[0].offsetY;
      diagram.nodes = [item];
    }

    diagram.dataBind();
  }

  getItembyIdCommOthers(id) {
    const find = getOtherCommunicationElementShapes().find((x) => x.id === id);
    return find;
  }
}
