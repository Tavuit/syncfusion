import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Node, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { getOtherCommunicationElementShapes } from 'src/app/features/modules/sync-content-left/components/constants/communication/other-communication-element.symbol-palette';
import { drawShape, LIST_ITEM, randomId } from 'src/app/utils/constants';
import { ILabelPropertyOptions } from 'src/app/features/modules/sync-content-detail/types/diagram.types';

@Injectable({
  providedIn: 'root',
})
export class DragDropFormService {
  private customComponentForm: FormGroup;
  private _labePropertyOption = new BehaviorSubject<ILabelPropertyOptions>(null);
  public labelPropertyOptionBS = this._labePropertyOption.asObservable();
  private _actionPopUpId = new BehaviorSubject<string>(null);
  public actionPopUpIdBS = this._actionPopUpId.asObservable();
  constructor() {}

  public setLabelPropertyOptionBS(data: ILabelPropertyOptions) {
    this._labePropertyOption.next(data);
  }

  public setActivePopUpId(id: string) {
    this._actionPopUpId.next(id);
  }

  getCustomComponentFormValue() {
    return this.customComponentForm.getRawValue();
  }

  get getCustomComponentForm() {
    return this.customComponentForm;
  }

  setCustomComponentForm(form: FormGroup) {
    this.customComponentForm = form;
  }

  handleTransformSelectedNode(actionPopUpId, currentNode, diagram) {
    if (
      actionPopUpId.startsWith('continuityPerson') ||
      actionPopUpId.startsWith('continuity')
    ) {
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
    } else if (actionPopUpId.startsWith('nodeTableComm')) {
      let itemSub = {
        id: 'nodeTableComm',
        title: 'Node Table',
        annotation: {
          content: ['Node Number', 'Information', '1', ''],
          columnNo: 2,
        },
        menuId: 'edit',
        toolTip: 'Represents a Table of Node',
        type: 'Table',
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
    } else if (
      actionPopUpId.startsWith('communicationMixtureCommunication') ||
      actionPopUpId.startsWith('groupCommunication') ||
      actionPopUpId.startsWith('group')
    ) {
      const numberInput = this.customComponentForm?.get('numberInput')?.value;
      let fxPorts = [];
      for (let i = 0; i < numberInput; i++) {
        let mock = {
          id: 'Lefttg',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: PortVisibility.Visible,
          shape: 'Circle',
          width: 2,
          height: 2,
        };
        mock.id = 'Left' + (i + 1).toString();
        mock.offset.x = 0;
        mock.offset.y = (i + 1) / (numberInput + 1);
        fxPorts[i] = mock;
      }
      fxPorts[numberInput] = {
        id: 'RightMiddle',
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        width: 2,
        height: 2,
      };
      fxPorts[numberInput + 1] = {
        id: 'BottomMiddle',
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        width: 2,
        height: 2,
      };
      fxPorts[numberInput + 2] = {
        id: 'TopMiddle',
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        width: 2,
        height: 2,
      };
      const segHeight = numberInput > 3 ? (numberInput + 1) * 20 : 75;
      let shapeContent =
        '<g transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="' +
        segHeight.toString() +
        '" width="50" stroke="black" stroke-width="1" fill="transparent"></rect><foreignObject class="symbol-text-container" x="6.25" width="37.5" height="' +
        segHeight.toString() +
        '" visibility="hidden"><div style="height:100px" class="flex-container"><div width="37.5" class="symbol-text-element">Group</div></div></foreignObject></g>';
      let findNode = diagram.getObject(
        diagram.nodes[diagram.nodes.length - 1].id
      );
      findNode.shape.content = shapeContent;
      findNode.height = segHeight;
      findNode.width = 50;
      diagram.dataBind();
      diagram.removePorts(findNode, findNode.ports);
      diagram.dataBind();
      for (let i = 0; i < numberInput + 3; i++) {
        diagram.addPorts(findNode, [fxPorts[i]]);
      }
      diagram.dataBind();
    } else if (
      actionPopUpId.startsWith('principleLineOthers') ||
      actionPopUpId.startsWith('entityInclusionLineHorizontal') ||
      actionPopUpId.startsWith('stabilityLine1')
    ) {
      const numberEntity =
        this.customComponentForm?.get('numberEntity')?.value - 2;
      this.changeData3(numberEntity, diagram);
    } else if (actionPopUpId.startsWith('entityInclusionLineVertical')) {
      const numberEntity =
        this.customComponentForm?.get('numberEntity')?.value - 2;
      this.changeData2(numberEntity, diagram);
    } else if (this.onCheckOpenModalLabelText(actionPopUpId)) {
      this.onClickLabelProperty(diagram);
    }

    diagram.dataBind();
    diagram.refresh();
  }

  getItembyIdCommOthers(id) {
    const find = getOtherCommunicationElementShapes().find((x) => x.id === id);
    return find;
  }

  private changeData3(numberEntity, diagram) {
    let fxPorts = [];

    for (let i = 0; i < numberEntity; i++) {
      let stam = {
        id: 'Lefttg',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        visibility: 1,
        shape: 'Circle',
        width: 4,
        height: 4,
      };
      stam.id = 'Left' + (i + 1).toString();
      stam.offset.x = (i + 1) / (numberEntity + 1);
      stam.offset.y = 0.5;
      fxPorts[i] = stam;
    }

    fxPorts[numberEntity] = {
      id: 'x11',
      offset: {
        x: 0,
        y: 0.5,
      },
      visibility: 1,
      shape: 'Circle',
      width: 4,
      height: 4,
    };

    fxPorts[numberEntity + 1] = {
      id: 'x12',
      offset: {
        x: 1,
        y: 0.5,
      },
      visibility: 1,
      shape: 'Circle',
      width: 4,
      height: 4,
    };

    let truyNode = diagram.getObject(
      diagram.nodes[diagram.nodes.length - 1].id
    );
    diagram.removePorts(truyNode, truyNode.ports);
    diagram.dataBind();

    for (let i = 0; i < numberEntity + 2; i++) {
      diagram.addPorts(truyNode, [fxPorts[i]]);
    }
  }

  private changeData2(numberEntity, diagram) {
    const x1 = parseInt(numberEntity);
    let fxPorts = [];
    for (let i = 0; i < x1; i++) {
      let stam = {
        id: 'Lefttg',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        visibility: 1,
        shape: 'Circle',
        width: 4,
        height: 4,
      };
      stam.id = 'Left' + (i + 1).toString();
      stam.offset.x = 0.5;
      stam.offset.y = (i + 1) / (x1 + 1);
      fxPorts[i] = stam;
    }

    fxPorts[x1] = {
      id: 'x11',
      offset: {
        x: 0.5,
        y: 0,
      },
      visibility: 1,
      shape: 'Circle',
      width: 4,
      height: 4,
    };

    fxPorts[x1 + 1] = {
      id: 'x12',
      offset: {
        x: 0.5,
        y: 1,
      },
      visibility: 1,
      shape: 'Circle',
      width: 4,
      height: 4,
    };
    let truyNode = diagram.getObject(
      diagram.nodes[diagram.nodes.length - 1].id
    );
    diagram.removePorts(truyNode, truyNode.ports);
    diagram.dataBind();
    for (let i = 0; i < x1 + 2; i++) {
      diagram.addPorts(truyNode, [fxPorts[i]]);
    }
  }

  private onClickLabelProperty(diagram) {
    let item = diagram.selectedItems.properties.connectors[0];
    const notNegateTextValue = this.customComponentForm.get('notNegateText').value;
    const negateText = this.customComponentForm.get('negateText').value;
    const selectLabel1Value = this.customComponentForm.get('selectLabel1').value;
    const selectLabel2Value = this.customComponentForm.get('selectLabel2').value;
    console.log('notNegateTextValue', notNegateTextValue, 'negateText', negateText);
    console.log('selectLabel1Value', selectLabel1Value, 'selectLabel2Value', selectLabel2Value);
    if (notNegateTextValue) {
      item.annotations = [
        {
          template: `<div><div class="hr_nay" id="hr${randomId()}"></div></div>`,
          offset: 1,
          width: 40,
          height: 40,
        },
        {
          title:
            `Not ${item.title}`,
          content: selectLabel2Value,
          margin: {
            bottom: 10,
          }
        },];
    }
    if (negateText) {
      item.annotations = [
        {
          title:
            `${item.title}`,
          content: selectLabel1Value,
          margin: {
            bottom: 10,
          }
        },];
    }
  }

  public onCheckOpenModalLabelText(idElementActive: string) {
    for (const i of Object.keys(LIST_ITEM)) {
      if (idElementActive.startsWith(i)) return true;
    }
    return false;
  }
}
