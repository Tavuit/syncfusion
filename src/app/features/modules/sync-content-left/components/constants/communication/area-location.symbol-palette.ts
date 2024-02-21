import { height, rectPorts, width } from "./common";
import { NodeConstraints, NodeModel } from "@syncfusion/ej2-angular-diagrams";
import { getShapeByType } from 'src/app/utils/constants';

export function getAreaAndLocationShapes() {
  let areaAndLocation = [
    {
      ...getShapeByType('', 'locationOfOperation', { menuId: "location", title: 'Location of Operation', tooltip: 'Location of Operation' }, 'Location'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Operation Location',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'siteOfOperationRect', { menuId: "location", title: 'Site of Operation', tooltip: 'Site of Operation' }, 'Site'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Operation Site',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'mainArea', { menuId: "location", title: 'Main Area', tooltip: 'Main Area' }, {
        content: [
          {
            content: "Main Area",
            offset: {x: 0.5, y: 0},
            margin: {bottom: 20},
          },
        ],
        ports: [],
        style: {
          strokeWidth: 4,
        },
        height: 200,
        width: 200,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify The Main Area',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('House', 'siteOfOperation', { menuId: "location", title: 'Site of Operation', tooltip: 'Site of Operation' }, 'Site'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Site',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'workingareaAL', { menuId: "location", title: 'Working Area', tooltip: 'Working Area' }, {
        fill: "none",
        radius: 75,
        content: [
          {
            content: "Working Area",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Working Area',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'locationAL', { menuId: "location", title: 'Location', tooltip: 'Location' }, {
        fill: "none",
        radius: 30,
        content: [
          {
            content: "Location",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify a Location',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('mobility', 'mobilityAL', { menuId: "empty", title: 'Mobility', tooltip: 'Mobility' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Movement of a Person',
        position: 'TopRight',
      }
    }
  ];
  return areaAndLocation;
}
