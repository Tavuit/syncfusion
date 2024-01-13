import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Node, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { getOtherCommunicationElementShapes } from 'src/app/features/modules/sync-content-left/components/constants/communication/other-communication-element.symbol-palette';
import {
  areaData,
  drawShape,
  dropGrouped,
  LIST_ITEM,
  otherData,
  randomId,
} from 'src/app/utils/constants';
import { ILabelPropertyOptions } from 'src/app/features/modules/sync-content-detail/types/diagram.types';

@Injectable({
  providedIn: 'root',
})
export class DragDropFormService {
  private customComponentForm: FormGroup;
  private _labePropertyOption = new BehaviorSubject<ILabelPropertyOptions>(
    null
  );
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
    const groupList = ['group4', 'group1', 'groupCommunication', 'groupSystem', 'groupTheoryVertical', 'groupFunctionTheory', 'groupFundamental'];
    const numberInput = this.customComponentForm?.get('numberInput')?.value;
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
      actionPopUpId.startsWith('groupCommunication')
    ) {
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
    } else if (actionPopUpId.startsWith('groupOfPeople')) {
      const optionData = this.customComponentForm.get('peopleOptions').value;
      const formatData = this.customComponentForm.get('format').value;
      const startNumberData = this.customComponentForm.get('startNumber').value;
      const groupNameData = this.customComponentForm.get('groupName').value;
      const hasFrameData = this.customComponentForm.get('hasFrame').value;
      this.changeDataF(
        optionData,
        formatData,
        startNumberData,
        groupNameData,
        hasFrameData,
        diagram
      );
    } else if (actionPopUpId.startsWith('mainArea')) {
      const typesValue = this.customComponentForm.get('types').value;
      const numbersValue = this.customComponentForm.get('numbers').value;
      const locations = this.customComponentForm.get('locations').value;
      let mainArea = areaData.find((a) => a.id === 'mainArea') as any;
      let selected = diagram.selectedItems.properties.nodes[0];
      selected.height = selected.height / 1.5;
      diagram.dataBind();
      mainArea.annotation.height = undefined;
      mainArea.annotation.width = undefined;
      let findItem = drawShape({ ...mainArea });
      findItem.height = findItem.height * 2;
      const findArea = {
        ...areaData.find((a) => a.id === 'locationOfOperation'),
        type: null,
      };
      if (typesValue === 'dialogMainAreahouse') {
        diagram.dataBind();
        for (let index = 1; index <= +numbersValue; index++) {
          let house = drawShape(
            areaData.find(
              (a) => a.id === 'siteOfOperation' && a.type === 'House'
            ) as any
          );
          house.id += randomId() + index;
          house.width = house.width / 2;
          house.height = house.height / 2;
          house.annotations[0].content = 'House';
          let houseAdd = diagram.add(house);
          dropGrouped(houseAdd, selected, true, diagram);
        }
      } else if (typesValue === 'dialogMainAreamap') {
        locations.forEach((v) => {
          let house = drawShape(findArea);
          house.id += randomId();
          house.annotations[0].content = v;
          let houseAdd = diagram.add(house);
          dropGrouped(houseAdd, selected, true, diagram);
        });
      } else if (typesValue === 'dialogMainArearegular') {
        for (let index = 1; index <= +numbersValue; index++) {
          let house = drawShape(findArea);
          house.id += randomId() + index;
          let houseAdd = diagram.add(house);
          dropGrouped(houseAdd, selected, true, diagram);
        }
      } else if (typesValue === 'dialogMainArearegularwithmap') {
        locations.forEach((v) => {
          let house = drawShape(findArea);
          house.id += randomId();
          house.annotations[0].content = v;
          let houseAdd = diagram.add(house);
          dropGrouped(houseAdd, selected, true, diagram);
        });
      }
    } else if (actionPopUpId.startsWith('changeofApplication1')) {
      let truyNode = diagram.getObject(
        diagram.nodes[diagram.nodes.length - 1].id
      );
      let segsum =
        '<g transform="translate(2, 2)"><rect width="10" height="10" fill="transparent" stroke="black" stroke-width="0"></rect><path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5"></path></g>';
      truyNode.annotations[0].content =
        this.customComponentForm.get('s2').value;
      truyNode.annotations[1].content =
        this.customComponentForm.get('s1').value;
      truyNode.shape.content = segsum;
      truyNode.height = 600;
      truyNode.width = 600;
    } else if (
      !actionPopUpId.startsWith('changeofApplication1') &&
      actionPopUpId.startsWith('changeofApplication')
    ) {
      const nodes = this.getNodesDiagramNodes([...diagram.nodes]);
      let itemSub = { ...this.getItembyIdCommOthers('nodeTableComm') };

      let mangchua = [];
      let sdem = 0;

      if (this.customComponentForm.get('communicationS1').value) {
        mangchua[sdem] = 'Communication';
        sdem++;
      }
      if (this.customComponentForm.get('applicationS2').value == true) {
        mangchua[sdem] = 'Application Value';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS3').value == true) {
        mangchua[sdem] = 'Communication Function';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS4').value == true) {
        mangchua[sdem] = 'Communication Name';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS5').value) {
        mangchua[sdem] = 'Communication Subject';
        sdem++;
      }
      if (this.customComponentForm.get('applicationS6').value) {
        mangchua[sdem] = 'Application Name';
        sdem++;
      }
      if (this.customComponentForm.get('applicationS7').value) {
        mangchua[sdem] = 'Application';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS8').value) {
        mangchua[sdem] = 'Communication Date Time';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS9').value) {
        mangchua[sdem] = 'Communication Date';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS10').value) {
        mangchua[sdem] = 'Communication Time';
        sdem++;
      }
      if (this.customComponentForm.get('communicationS11').value) {
        mangchua[sdem] = 'Communication Result';
        sdem++;
      }

      itemSub.annotation.columnNo = sdem;
      itemSub.annotation.content = [];
      for (let ix = 0; ix < sdem; ix++) {
        itemSub.annotation.content = itemSub.annotation.content.concat([
          mangchua[ix],
          '',
        ]);
      }

      let item = drawShape(itemSub);
      item.offsetX = nodes[0].offsetX;
      item.offsetY = nodes[0].offsetY;
      diagram.nodes = [item];
    } else if (groupList.some(prefix => actionPopUpId.startsWith(prefix))) {
      this.ChangeData1(numberInput, 0 ,diagram);
    }

    diagram.dataBind();
    setTimeout(() => {
      diagram.refresh();
    }, 1);
  }

  private ChangeData1(x1, cs, diagram) {


    //let diagramData= JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());


    //diagramData.nodes[diagramData.nodes.length-1].annotations[0].content=x4;


      x1 = parseInt(x1);

      let fxPorts = [];


      for (let i = 0; i < x1; i++) {
        let stam = {
          id: 'Lefttg',
          offset: {
            x: 0, y: 0.5
          },
          visibility: 1,
          shape: 'Circle',
          width: 2,
          height: 2
        };
        stam.id = 'Left' + (i + 1).toString();
        stam.offset.x = 0;
        stam.offset.y = (i + 1) / (x1 + 1);
        fxPorts[i] = stam;
      }

      fxPorts[x1] = {
        id: 'RightMidlle',
        offset: {
          x: 1, y: 0.5
        },
        visibility: 1,
        shape: 'Circle',
        width: 2,
        height: 2
      };

      fxPorts[x1 + 1] = {
        id: 'BottomMidlle',
        offset: {
          x: 0.5, y: 0
        },
        visibility: 1,
        shape: 'Circle',
        width: 2,
        height: 2
      };

      fxPorts[x1 + 2] = {
        id: 'TopMidlle',
        offset: {
          x: 0.5, y: 1
        },
        visibility: 1,
        shape: 'Circle',
        width: 2,
        height: 2
      };


      let segx5 = 75;
      if (x1 > 3) {
        segx5 = (x1 + 1) * 20;
      }


    //ham nay de lay ma, luon luon su dung ham nay
    //dia1=JSON.stringify(diagramData);


      let segsum = "<g transform=\"translate(2, 2)\"><rect vector-effect=\"non-scaling-stroke\" height=\"" + segx5.toString() + "\" width=\"50\" stroke=\"black\" stroke-width=\"1\" fill=\"transparent\"></rect><foreignObject class=\"symbol-text-container\" x=\"6.25\" width=\"37.5\" height=\"" + segx5.toString() + "\" visibility=\"hidden\"><div style=\"height:100px\" class=\"flex-container\"><div width=\"37.5\" class=\"symbol-text-element\">Group</div></div></foreignObject></g>";


    //diagramData.nodes[diagramData.nodes.length-1].shape.content=segsum;
    //diagramData.nodes[diagramData.nodes.length-1].height=segx5;
    //diagramData.nodes[diagramData.nodes.length-1].width=50;
    //diagramData.nodes[diagramData.nodes.length-1].ports=fxPorts;


      let truyNode = diagram.getObject(diagram.nodes[diagram.nodes.length - 1].id);
      truyNode.shape.content = segsum;
      truyNode.height = segx5;
      truyNode.width = 50;
      diagram.dataBind();

      diagram.removePorts(truyNode, truyNode.ports);


      diagram.dataBind();

      if (cs == 0) {
        for (let i = 0; i < (x1 + 1); i++) {
          diagram.addPorts(truyNode, [fxPorts[i]]);
        }
      }

      if (cs == 1) {
        for (let i = 0; i < (x1 + 3); i++) {
          diagram.addPorts(truyNode, [fxPorts[i]]);
        }
      }

      diagram.dataBind();
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

  private changeDataF(
    optionData,
    formatData,
    startNumber,
    groupName,
    hasFrame,
    diagram
  ) {
    let truyNode = diagram.getObject(
      diagram.nodes[diagram.nodes.length - 1].id
    );
    truyNode.annotations[0].content = groupName;
    diagram.dataBind();

    if (optionData == 'Option 1') {
      let segx5 = '1';

      if (hasFrame === false) {
        segx5 = '0';
      }

      if (hasFrame === true) {
        segx5 = '1';
      }

      let segsum =
        '<g transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="40" width="120" stroke="black" fill="transparent" stroke-width="' +
        segx5 +
        '"></rect><circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"></path><circle vector-effect="non-scaling-stroke" cx="41" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="39.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="43.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="41.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18"></path><circle vector-effect="non-scaling-stroke" cx="101" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="99.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="103.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="101.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 101 13.5 L 101 19.5 L 94 29.5 M 101 19.5 L 108 29.5 M 93 18 L 109 18"></path><circle vector-effect="non-scaling-stroke" fill="black" cx="62" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="72" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="82" cy="17.5" r="1.5"></circle><foreignObject class="symbol-text-container" x="2" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        startNumber +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="32" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        (parseFloat(startNumber) + 1).toString() +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="92" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' N' +
        '</i></div></div></div></foreignObject></g>';

      truyNode.shape.content = segsum;
      truyNode.height = 100;
      truyNode.width = 295;
      diagram.dataBind();
    }

    if (optionData == 'Option 2') {
      let segx5 = '1';

      if (hasFrame === false) {
        segx5 = '0';
      }

      if (hasFrame === true) {
        segx5 = '1';
      }
      let segsum =
        '<g transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="40" width="90" stroke="black" fill="transparent" stroke-width="' +
        segx5 +
        '"></rect><circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"></path><circle vector-effect="non-scaling-stroke" cx="71" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="69.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="73.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="71.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 71 13.5 L 71 19.5 L 64 29.5 M 71 19.5 L 78 29.5 M 63 18 L 79 18"></path><circle vector-effect="non-scaling-stroke" fill="black" cx="32" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="42" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="52" cy="17.5" r="1.5"></circle><foreignObject class="symbol-text-container" x="2" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        startNumber +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="62" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' N' +
        '</i></div></div></div></foreignObject></g>';

      truyNode.shape.content = segsum;
      truyNode.height = 100;
      truyNode.width = 225;
      diagram.dataBind();
    }

    if (optionData == 'Option 3') {
      let segx5 = '1';

      if (hasFrame === false) {
        segx5 = '0';
      }

      if (hasFrame === true) {
        segx5 = '1';
      }

      let segsum =
        '<g transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="40" width="90" stroke="black" fill="transparent" stroke-width="' +
        segx5 +
        '"></rect><circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"></path><circle vector-effect="non-scaling-stroke" cx="41" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="39.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="43.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="41.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18"></path><circle vector-effect="non-scaling-stroke" fill="black" cx="62" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="72" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="82" cy="17.5" r="1.5"></circle><foreignObject class="symbol-text-container" x="2" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        startNumber +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="32" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        (parseFloat(startNumber) + 1).toString() +
        '</i></div></div></div></foreignObject></g>';

      truyNode.shape.content = segsum;
      truyNode.height = 100;
      truyNode.width = 225;
      diagram.dataBind();
    }

    if (optionData == 'Option 4') {
      let segx5 = '1';

      if (hasFrame === false) {
        segx5 = '0';
      }

      if (hasFrame === true) {
        segx5 = '1';
      }

      let segsum =
        '<g transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="40" width="180" stroke="black" fill="transparent" stroke-width="' +
        segx5 +
        '"></rect><circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"></path><circle vector-effect="non-scaling-stroke" cx="71" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="69.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="73.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="71.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 71 13.5 L 71 19.5 L 64 29.5 M 71 19.5 L 78 29.5 M 63 18 L 79 18"></path><circle vector-effect="non-scaling-stroke" cx="101" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="99.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="103.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="101.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 101 13.5 L 101 19.5 L 94 29.5 M 101 19.5 L 108 29.5 M 93 18 L 109 18"></path><circle vector-effect="non-scaling-stroke" cx="161" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1"></circle><circle vector-effect="non-scaling-stroke" cx="159.0" cy="6" r="1" fill="black"></circle><circle vector-effect="non-scaling-stroke" cx="163.0" cy="6" r="1.0" fill="black"></circle><ellipse vector-effect="non-scaling-stroke" cx="161.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"></ellipse><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 161 13.5 L 161 19.5 L 154 29.5 M 161 19.5 L 168 29.5 M 153 18 L 169 18"></path><circle vector-effect="non-scaling-stroke" fill="black" cx="32" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="42" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="52" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="122" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="132" cy="17.5" r="1.5"></circle><circle vector-effect="non-scaling-stroke" fill="black" cx="142" cy="17.5" r="1.5"></circle><foreignObject class="symbol-text-container" x="2" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' ' +
        startNumber +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="59" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' N' +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="90" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        'N+1' +
        '</i></div></div></div></foreignObject><foreignObject class="symbol-text-container" x="152" y="30" width="25" height="10" visibility="show"><div class="flex-container"><div class="symbol-text-element"><div style="font-size:5px;font-weight:100"><i>' +
        formatData +
        ' M' +
        '</i></div></div></div></foreignObject></g>';

      truyNode.shape.content = segsum;
      truyNode.height = 100;
      truyNode.width = 450;
      diagram.dataBind();
    }
  }

  private onClickLabelProperty(diagram) {
    let item = diagram.selectedItems.properties.connectors[0];
    const notNegateTextValue =
      this.customComponentForm.get('notNegateText').value;
    const negateText = this.customComponentForm.get('negateText').value;
    const selectLabel1Value =
      this.customComponentForm.get('selectLabel1').value;
    const selectLabel2Value =
      this.customComponentForm.get('selectLabel2').value;
    if (notNegateTextValue) {
      item.annotations = [
        {
          template: `<div><div class="hr_nay" id="hr${randomId()}"></div></div>`,
          offset: 1,
          width: 40,
          height: 40,
        },
        {
          title: `Not ${item.title}`,
          content: selectLabel2Value,
          margin: {
            bottom: 10,
          },
        },
      ];
    }
    if (negateText) {
      item.annotations = [
        {
          title: `${item.title}`,
          content: selectLabel1Value,
          margin: {
            bottom: 10,
          },
        },
      ];
    }
  }

  public onCheckOpenModalLabelText(idElementActive: string) {
    for (const i of Object.keys(LIST_ITEM)) {
      if (idElementActive.startsWith(i)) return true;
    }
    return false;
  }

  private getNodesDiagramNodes(data) {
    return data.map((x) => {
      return {
        id: x.properties.id,
        offsetX: x.properties.offsetX,
        offsetY: x.properties.offsetY,
        addInfo: x.properties.addInfo,
        shape: x.properties.shape,
        height: x.properties.height,
        width: x.properties.width,
        annotations: x.properties.annotations,
        style: x.properties.style,
        children: x.properties.id.includes("groupofpeople")
          ? x.properties.id.split("-").filter((x) => x !== "groupofpeople")
          : undefined,
      };
    });
  }

  private getItembyIdCommOthers(id) {
    const find = otherData.find((x) => x.id === id);
    return find;
  }
}
