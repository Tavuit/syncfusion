import { Injectable } from '@angular/core';
import { menuItems } from 'src/app/features/modules/sync-content-detail/constants/diagram.constant';
import { camelize, commLinkData, communicationData, drawShape, otherData, personData, randomId } from 'src/app/utils/constants';

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
    // console.log('listFilter', listFilter);
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
}
