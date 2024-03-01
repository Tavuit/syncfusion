import { Injectable } from '@angular/core';
import { ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
import { menuItems } from 'src/app/features/modules/sync-content-detail/constants/diagram.constant';
import { camelize, commLinkData, communicationData, drawShape, dropGrouped, getAnnotationAddPartToApplication, getTypeAddPartToApplication, otherData, personData, randomId } from 'src/app/utils/constants';

let nodeAppendData = {
  // Position of the node
  offsetX: 250,
  offsetY: 450,
  // Size of the node
  width: 400,
  height: 400,
  // sets the type of the shape as image
  shape: {
    type: 'Image',
    content: '',
  },
  //Customizes the appearances such as text, font, fill, and stroke.
  style: {
    fill: 'none',
  },
};

@Injectable({
  providedIn: 'root',
})
export class DiagramContextMenuService {
  public mappedArrayContext = menuItems.reduce((arr, item) => {
    let listFilter = (item.list as any[]).reduce((brr, b) => {
      if (b?.text) {
        brr.push({
          ...b,
          id: camelize(item.id + b.text),
          parentId: item.id,
        });
      }
      return brr;
    }, []);
    if (listFilter.length > 0) {
      arr.push(...listFilter);
    }
    return arr;
  }, []);

  constructor() {}

  public replaceFileToDiagrams(file, diagram, currentItemId) {
    let url = URL.createObjectURL(file);
    if (file.type.startsWith('image/')) {
      diagram.selectedItems.nodes[0].shape = {
        type: 'Image',
        source: url,
      };
    }

    if (file.type.startsWith('video/')) {
      let video = { ...nodeAppendData };
      if (
        currentItemId.toLowerCase().includes('add') ||
        currentItemId.toLowerCase().startsWith('add')
      ) {
        video.shape = {
          type: 'HTML',
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        video.width = 400;
        video.height = 278;
        let addEd = diagram.add(video);
        diagram.select([addEd]);
      } else {
        diagram.selectedItems.nodes[0].shape = {
          type: 'HTML',
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        diagram.selectedItems.nodes[0].width = 400;
        diagram.selectedItems.nodes[0].height = 278;
      }
    }

    if (file.type.startsWith('audio/')) {
      let audio = { ...nodeAppendData };
      if (
        currentItemId.toLowerCase().includes('add') ||
        currentItemId.toLowerCase().startsWith('add')
      ) {
        audio.shape = {
          type: 'HTML',
          content: `<audio controls width="400" height="50">
          <source src="${url}">
        Your browser does not support the audio element.
        </audio>`,
        };
        audio.width = 400;
        audio.height = 100;
        let addEd = diagram.add(audio);
        diagram.select([addEd]);
      } else {
        diagram.selectedItems.nodes[0].shape = {
          type: 'HTML',
          content: `<audio controls width="400" height="50">
                    <source src="${url}">
                  Your browser does not support the audio element.
                  </audio>`,
        };
        diagram.selectedItems.nodes[0].width = 400;
        diagram.selectedItems.nodes[0].height = 50;
      }
    }
  }

  public onAddCommHolder(diagram) {
    let findItem = drawShape(
      (personData as any).find(a => a.id === 'communicationHolder')
    );
    findItem.id += randomId();
    console.log(diagram.selectedItems.nodes[0])
    let addItem = diagram.add(findItem);
    let offsetXD = diagram.selectedItems.nodes[0].properties.offsetX;
    let offsetYD = diagram.selectedItems.nodes[0].properties.offsetY;
    addItem.offsetX = offsetXD + 250;
    addItem.offsetY = offsetYD + 50;
  }

  public sketchContextClick(idCheck: string, diagram) {

    let data = [...personData, ...commLinkData, ...communicationData] as any;
    let findItem;
    if (idCheck.includes("functionStatus")) {
      findItem = drawShape(
        data.find((a) => a.id === "functionStatus")
      );
    }
    if (idCheck.includes("entityUsage")) {
      findItem = drawShape(
        data.find((a) => a.id === "entityUsage")
      );
    }
  
    findItem.id += randomId();
  
    let offsetXD = diagram.selectedItems.nodes[0].properties.offsetX;
    let offsetYD = diagram.selectedItems.nodes[0].properties.offsetY;
    diagram.remove(diagram.selectedItems.nodes[0]);
  
    let addItem = diagram.add(findItem);
    addItem.offsetX = offsetXD;
    addItem.offsetY = offsetYD;
  
  }

  public addTextOnClick(id: string, diagram) {
    let findItem = drawShape(otherData.find((a) => a.id === "callOut"));
    findItem.id += randomId();
    let addItem = diagram.add(findItem);
    const selectedItems = diagram.selectedItems.properties.nodes[0].properties;
    if (id === "communicationholderreplacecommunicationholderwithtext") {
      addItem.offsetX = selectedItems.offsetX - selectedItems.width / 2 + 175;
      addItem.offsetY = selectedItems.offsetY - selectedItems.height / 2 + 125;
      diagram.remove(diagram.selectedItems.properties.nodes[0]);
    } else {
      addItem.offsetX = selectedItems.offsetX + 250;
      addItem.offsetY = selectedItems.offsetY + 50;
    }
  }

  public funCommunicationFunctionSub(diagram) {

    const node = diagram.selectedItems.nodes[0];
    let item = drawShape({
      id: "communicationFunctionGrouped" + randomId(),
      title: "Communication Function",
      annotation: [
        "Communication Function",
        "Group 1",
        "Function 1",
        "Function 2",
        "Function 3",
      ],
      menuId: "entity",
      toolTip: "What We Do as Entity",
      type: "CommunicationGrouped2",
    });
    item.offsetX = node.offsetX;
    item.offsetY = node.offsetY;
    diagram.add(item);
    diagram.remove(diagram.selectedItems.nodes[0]);
  }

  public coverPerson(diagram) {
    const findCover = {
      id: '',
      style: {
        fill: "green",
        strokeColor: "black",
      },
      addInfo: [
        {
          menuId: "cover",
          toolTip: "Cover person",
          title: "cover",
        },
      ],
      shape: {type: "Basic", shape: "Rectangle"},
      offsetY: 0,
      offsetX: 0,
      width: 0,
      height: 0,
    };
    findCover.id = "cover" + randomId();
    findCover.offsetX = diagram.selectedItems.nodes[0].offsetX;
    findCover.offsetY = diagram.selectedItems.nodes[0].offsetY;
    findCover.width = diagram.selectedItems.nodes[0].width;
    findCover.height = diagram.selectedItems.nodes[0].height;
    let addCover = diagram.add(findCover);
    addCover.zIndex += 10;
    diagram.dataBind();
  }

  public hideShowCover(idCheck: string, diagram) {
    idCheck.includes("showcover");
    if (idCheck.includes("hidecover")) {
      diagram.selectedItems.nodes[0].style.opacity = 0.4;
    } else {
      diagram.selectedItems.nodes[0].style.opacity = 1;
    }
    diagram.dataBind();
  }

  public addInput(diagram) {
    let ports = {
      id: "LeftMiddle" + randomId(),
      offset: {
        x: 0,
        y: 0.5,
      },
      visibility: 1,
      shape: "Circle",
      width: 2,
      height: 2,
      verticalAlignment: "Center",
      horizontalAlignment: "Center",
    };
    const selected = diagram.selectedItems.nodes[0];
    const heightNew = selected.height + 10;
    selected.offsetY =
      selected.offsetY - selected.height / 2 + heightNew / 2;
    selected.height = heightNew;
    diagram.dataBind();

    let portLength = diagram.selectedItems.nodes[0].ports.length - 3;
    diagram.selectedItems.nodes[0].ports.forEach((a) => {
      if (a.id.toLowerCase().startsWith("left")) {
        ports.offset = {
          x: a.offset.x,
          y: (diagram.selectedItems.nodes[0].ports.length - 3 + 1) / (diagram.selectedItems.nodes[0].ports.length - 3 + 2),
        };
        a.offset = {
          x: a.offset.x,
          y: portLength / (diagram.selectedItems.nodes[0].ports.length - 3 + 2),
        };
        portLength--;
        diagram.dataBind();
      }
    });
    diagram.addPorts(diagram.selectedItems.nodes[0], [ports]);
  }

  public removeInput(diagram) {
    const selectedRemove = diagram.selectedItems.nodes[0];
        const heightNewRemove = selectedRemove.height - 10;
        selectedRemove.offsetY =
          selectedRemove.offsetY -
          selectedRemove.height / 2 +
          heightNewRemove / 2;
        selectedRemove.height = heightNewRemove;
        diagram.dataBind();

        let bdem1 = diagram.selectedItems.nodes[0].ports.length - 3;
        let bcodinh = diagram.selectedItems.nodes[0].ports.length - 3;

        diagram.selectedItems.nodes[0].ports.forEach((a) => {
          if (a.id.toLowerCase().startsWith("left")) {

            if (bdem1 == bcodinh) {
              bdem1--;
            }

            if (bdem1 != bcodinh) {
              a.offset = {
                x: a.offset.x,
                y: bdem1 / bcodinh,
              };

              bdem1--;
            }
          }

        });
        diagram.dataBind();
        diagram.selectedItems.nodes[0].ports.forEach((a) => {
          if (a.id.toLowerCase().startsWith("left")) {

            if ((a.offset.x == 0) && (a.offset.y == 0)) {
              diagram.removePorts(diagram.selectedItems.nodes[0], [a]);
            }
          }

        });
        diagram.dataBind();
  }

  public identifyWordInSentence(diagram) {
    let item = drawShape(communicationData.find((a) => a.id === "word") as any);
    item.id += randomId();
    let entity = diagram.add(item);
    let selected = diagram.selectedItems.properties.nodes[0];
    if (selected.id.startsWith("group") && !selected.parentId) {
      selected = diagram.getObject(
        diagram.selectedItems.properties.nodes[0].children[0]
      );
    }
    setTimeout(() => {
      dropGrouped(entity, selected, true, diagram);
    });
  }

  public identifyPartInSentence(diagram) {
    let item = drawShape(communicationData.find((a) => a.id === "word") as any);
      item.id += randomId();
      item.annotations[0].content = "Part";
      let entity = diagram.add(item);
      let selected = diagram.selectedItems.properties.nodes[0];
      if (selected.id.startsWith("group") && !selected.parentId) {
        selected = diagram.getObject(
          diagram.selectedItems.properties.nodes[0].children[0]
        );
      }
      setTimeout(() => {
        dropGrouped(entity, selected, true, diagram);
      });
  }

  public funAddPartToApplication(id: string, diagram) {

    const type = getTypeAddPartToApplication(id);
    const annotation = getAnnotationAddPartToApplication(id);
    const node = diagram.selectedItems.properties.nodes[0];
    let item = drawShape({
      id: "communicationFunctionGrouped" + randomId(),
      title: "Communication Function",
      annotation,
      menuId: "entity",
      toolTip: "What We Do as Entity",
      type,
    });
    item.offsetX = node.offsetX;
    item.offsetY = node.offsetY;
    diagram.add(item);
    diagram.remove(diagram.selectedItems.properties.nodes[0]);
  }

  public relatePersonOperatingPrinciple(id: string, diagram) {
    let idFind = "";
    let ellipseBasic = "ellipseBasic";
    if (id.includes("withoperatingprinciple")) {
      idFind = "operatingPrinciple";
    } else if (id.includes("withprinciplesaspect")) {
      idFind = "principleAspect";
    } else if (id.includes("withpersonaspect")) {
      idFind = "personAspect";
    } else if (id.includes("withmainsetofprinciple")) {
      idFind = "principle1";
    } else if (id.includes("withsubsetofprinciple")) {
      idFind = "principle2";
    } else if (id.includes("withtheory")) {
      idFind = "theory";
    } else if (id.includes("withutilizationtheory")) {
      idFind = "utilizationTheory";
    } else {
      idFind = "principle";
    }
  
    const itemActive = diagram.selectedItems.properties.nodes[0];
  
    let findItem;
  
    if (id.includes("withperson")) {
      //can phai viet annotation o dang annotation:"",
      findItem = drawShape({
        id: "person",
        title: "person",
        annotation: "",
        menuId: "person",
        toolTip: "person",
        type: "Person",
      });
    }
  
    if (!(id.includes("withperson"))) {
      // findItem = {...getItemById(idFind)};
      findItem.width = 150;
      findItem.height = 80;
    }
  
    const offerXNode = itemActive.offsetX - itemActive.width / 2 + 75;
    findItem.offsetX = offerXNode;
    findItem.offsetY = itemActive.offsetY + 300;
  
    findItem.id = findItem.id + randomId();
    // drawPortCircle(findItem);
    const itemPrinciple = diagram.add(findItem);
  
    if (id.includes("withperson")) {
      itemPrinciple.annotations[0].content = "Person Name No Title";
    }
  
    if (id.includes("withentity")) {
      itemPrinciple.annotations[0].content = "Entity";
    }
  
    // let findItem2 = {...getItemById(ellipseBasic)};
  
    // findItem2.offsetX = itemActive.offsetX + 400;
    // findItem2.offsetY = itemActive.offsetY + 150;
    // findItem2.id = findItem2.id + randomId();
    // drawPortCircle(findItem2);
    // const itemEllipseBasic = diagram.add(findItem2);
  
    if (id.includes("associate")) {
      // itemEllipseBasic.annotations[0].content = "Associate";
      diagram.dataBind();
    }
    // let findItem3 = {...getItemById("itemHidden")};
    // findItem3.offsetX = itemActive.offsetX + 600;
    // findItem3.offsetY = itemActive.offsetY + 145;
    // findItem3.id = findItem3.id + randomId();
    // const itemHidden = diagram.add(findItem3);
    diagram.connectors = diagram.connectors.concat([
      {
        id: "connector" + randomId(),
        sourceID: itemActive.id,
        // targetID: itemEllipseBasic.id,
        type: "Orthogonal",
        segments: [
          {
            type: "Orthogonal",
            direction: "Right",
          },
        ],
        constraints:
          ConnectorConstraints.Default |
          ConnectorConstraints.DragSegmentThumb,
      },
      {
        id: "connector" + randomId(),
        sourceID: itemPrinciple.id,
        // targetID: itemEllipseBasic.id,
        type: "Orthogonal",
        segments: [
          {
            type: "Orthogonal",
            direction: "Right",
          },
        ],
        constraints:
          ConnectorConstraints.Default |
          ConnectorConstraints.DragSegmentThumb,
      },
      {
        id: "connector" + randomId(),
        // sourceID: itemEllipseBasic.id,
        // targetID: itemHidden.id,
        type: "Orthogonal",
      },
    ]);
  }
}
