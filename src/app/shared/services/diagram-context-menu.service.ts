import { Injectable } from '@angular/core';
import { menuItems } from 'src/app/features/modules/sync-content-detail/constants/diagram.constant';
import { camelize } from 'src/app/utils/constants';

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
    source: '',
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
          source: `<video width="400" height="278" controls>
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
          source: `<audio controls width="400" height="50">
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
}
