import {
  NodeConstraints,
  NodeModel,
  PortVisibility,
} from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getQuickEntitiesShapes(): NodeModel[] {
  let quickEntities: NodeModel[] = [
    {
      id: 'quickperson',
      addInfo: { menuId: "personShapes", title: 'Person', tooltip: 'Person' },
      shape: {
        type: 'Native',
        content: `
        <g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>`,
      },
      width: 50,
      height: 80,
      ports: [
        {
          id: 'LeftCenter',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'LeftTop',
          offset: {
            x: 0,
            y: 0.25,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'LeftBottom',
          offset: {
            x: 0,
            y: 0.75,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'Bottom',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightCenter',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightTop',
          offset: {
            x: 1,
            y: 0.25,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightBottom',
          offset: {
            x: 1,
            y: 0.75,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'Top',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Person Name',
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
        {
          content: 'No Title',
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person Without Title',
        position: 'TopRight',
      },
      style: {
        fontSize: 10,
      },
    },
    {
      id: 'quickperson1',
      addInfo: { menuId: "personShapes", title: 'Person', tooltip: 'Person' },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
        <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="87" width="47"/>
        <path vector-effect="non-scaling-stroke" d="M7.05, 21.75A15.98 16.4333333333333 0 0 1 39.95, 21.75A15.98 16.4333333333333 0 0 1 7.05, 21.75z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path vector-effect="non-scaling-stroke" d="M23.5, 37.41L23.5, 56.55z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L39.95, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L7.05, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path vector-effect="non-scaling-stroke" d="M4.7, 52.2L42.3, 52.2z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path vector-effect="non-scaling-stroke" d="M17.86, 30.45A6 3 0 0 1 29.14, 30.45A6 3 0 0 1 17.86, 30.45z" fill="transparent" stroke="#000000" stroke-width="1px" />
        <path d="M14.1, 16.53A2 2 0 0 1 18.8, 16.53A2 2 0 0 1 14.1, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
        <path d="M28.2, 16.53A2 2 0 0 1 32.9, 16.53A2 2 0 0 1 28.2, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
      </g>`,
      },
      width: 50,
      height: 90,
      ports: [
        {
          id: 'LeftCenter',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'LeftTop',
          offset: {
            x: 0,
            y: 0.25,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'LeftBottom',
          offset: {
            x: 0,
            y: 0.75,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'Bottom',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightCenter',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightTop',
          offset: {
            x: 1,
            y: 0.25,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightBottom',
          offset: {
            x: 1,
            y: 0.75,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'Top',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Person Name',
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
        {
          content: 'No Title',
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person Without Title',
        position: 'TopRight',
      },
      style: {
        fontSize: 10,
      },
    },
    {
      id: 'quickcommunicationEntity',
      addInfo: {
        menuId: "communication", title: 'Communication Entity',
        tooltip: 'Communication Entity',
      },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication\n                            </div>\n                        </div>\n                    </foreignObject></g>`,
      },
      width: 210,
      height: 100,
      ports: [
        {
          id: 'LeftMiddle',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'TopCenter',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightMidlle',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'BottomCenter',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Communication',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Communication',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickCommtext',
      addInfo: { menuId: "communication", title: 'Communication', tooltip: 'Communication' },
      shape: {
        type: 'Native',
        content: `
        <g  transform="translate(2, 2)">
          <rect height="30" width="100" fill="transparent" stroke-width="0"/>
          <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
          <div style="height: ${30}px" class="flex-container">
            <div width="${100}" class="symbol-text-element">
              Communication
            </div>
          </div>
          </foreignObject>
        </g>`,
      },
      width: 100,
      height: 30,
      annotations: [
        {
          content: 'Communication',
          style: {
            bold: true,
            fontSize: 15,
            italic: true,
          },
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Communication',
        position: 'TopRight',
      },
    },
    {
      id: 'quickApplication',
      addInfo: { menuId: "application", title: 'Application', tooltip: 'Application' },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${80}" width="${150}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 150) / 2
                    }" width="${150 * 0.75}" height="${80}" visibility="hidden">
                        <div style="height: ${80}px" class="flex-container">
                            <div width="${
                              150 * 0.75
                            }" class="symbol-text-element">
                              Application
                            </div>
                        </div>
                    </foreignObject>`,
      },
      width: 150,
      height: 80,
      ports: [
        {
          id: 'LeftMiddle',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'TopCenter',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightMidlle',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'BottomCenter',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Application',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Application',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickcommunicationFunction',
      addInfo: {
        menuId: "commFunction",
        title: 'Communication Function',
        tooltip: 'Communication Function',
      },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${80}" width="${150}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 150) / 2
                    }" width="${150 * 0.75}" height="${80}" visibility="hidden">
                        <div style="height: ${80}px" class="flex-container">
                            <div width="${
                              150 * 0.75
                            }" class="symbol-text-element">
                              Communication Function
                            </div>
                        </div>
                    </foreignObject>`,
      },
      width: 150,
      height: 80,
      ports: [
        {
          id: 'LeftMiddle',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'TopCenter',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightMidlle',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'BottomCenter',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Communication Function',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Function of Out Communication',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickCommunicationResult',
      addInfo: {
        menuId: "commResult",
        title: 'Communication Result',
        tooltip: 'Communication Result',
      },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${80}" width="${150}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 150) / 2
                    }" width="${150 * 0.75}" height="${80}" visibility="hidden">
                        <div style="height: ${80}px" class="flex-container">
                            <div width="${
                              150 * 0.75
                            }" class="symbol-text-element">
                              Communication Result
                            </div>
                        </div>
                    </foreignObject>`,
      },
      width: 150,
      height: 80,
      ports: [
        {
          id: 'LeftMiddle',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'TopCenter',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightMidlle',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'BottomCenter',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Communication Result',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Result of an Application',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickcommunicationFunction1',
      addInfo: {
    menuId: "empty",
        title: 'Communication Function',
        tooltip: 'Communication Function',
      },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${80}" width="${150}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 150) / 2
                    }" width="${150 * 0.75}" height="${80}" visibility="hidden">
                        <div style="height: ${80}px" class="flex-container">
                            <div width="${
                              150 * 0.75
                            }" class="symbol-text-element">
                              Communication Function
                            </div>
                        </div>
                    </foreignObject>`,
      },
      width: 150,
      height: 80,
      ports: [
        {
          id: 'LeftMiddle',
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'TopCenter',
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'RightMidlle',
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'BottomCenter',
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Communication Function',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Communication Function',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickCommAppMixture',
      addInfo: {
    menuId: "empty",
        title: 'Communication App Mixture',
        tooltip: 'Communication App Mixture',
      },
      shape: {
        type: 'Native',
        content: `
        <g  class="point-circle" transform="translate(2, 2)">
                        <rect height="${35 * 2}" width="${
          35 * 2
        }" fill="transparent" stroke-width="0" />
                        <circle vector-effect="non-scaling-stroke" cx="${35}" cy="${35}" r="${35}" fill="${'white'}" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 35 * 2) / 2
                        }" width="${35 * 2 * 0.75}" height="${
          35 * 2
        }" visibility="hidden">
                        <div style="height: ${35 * 2}px" class="flex-container">
                            <div width="${
                              35 * 2 * 0.75
                            }" class="symbol-text-element">
                              Comm & App Mixture
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      width: 35 * 2,
      height: 35 * 2,
      ports: rectPorts,
      annotations: [
        {
          content: 'Comm & App Mixture',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Application Mixture',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickcommAppMixture1',
      addInfo: {
    menuId: "empty",
        title: 'Communication App Mixture',
        tooltip: 'Communication App Mixture',
      },
      shape: {
        type: 'Native',
        content: `
        <g  class="point-circle" transform="translate(2, 2)">
                        <rect height="${35 * 2}" width="${
          35 * 2
        }" fill="transparent" stroke-width="0" />
                        <circle vector-effect="non-scaling-stroke" cx="${35}" cy="${35}" r="${35}" fill="${'white'}" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 35 * 2) / 2
                        }" width="${35 * 2 * 0.75}" height="${
          35 * 2
        }" visibility="hidden">
                        <div style="height: ${35 * 2}px" class="flex-container">
                            <div width="${
                              35 * 2 * 0.75
                            }" class="symbol-text-element">
                              x
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      width: 35 * 2,
      height: 35 * 2,
      ports: rectPorts,
      annotations: [
        {
          content: 'x',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Application Mixture',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
    {
      id: 'quickCommAppMixture2',
      addInfo: {
    menuId: "empty",
        title: 'Communication App Mixture',
        tooltip: 'Communication App Mixture',
      },
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${75}" width="${50}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 50) / 2
                    }" width="${50 * 0.75}" height="${75}" visibility="hidden">
                        <div style="height: ${75}px" class="flex-container">
                            <div width="${
                              50 * 0.75
                            }" class="symbol-text-element">
                              Comm App Mixture
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      width: 50,
      height: 75,
      ports: [
        {
          id: 'left-1',
          offset: { x: 0, y: 0.25 },
          visibility: PortVisibility.Visible,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'left-2',
          offset: { x: 0, y: 0.75 },
          visibility: PortVisibility.Visible,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'right',
          offset: { x: 1, y: 0.5 },
          visibility: PortVisibility.Visible,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      annotations: [
        {
          content: 'Comm & App Mixture',
        },
      ],
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Multi Inputs Comm & App',
        position: 'TopRight',
      },
      style: {
        fill: 'white',
        fontSize: 10,
      },
    },
  ];
  return quickEntities;
}

export function getTheoryQuickEntitiesShapes() {
  let theoryQuickEntities = [
    {
      ...getShapeByType(
        'Person',
        'quickPhysicalSystem',
        { menuId: "system", title: 'Physical System', tooltip: 'Physical System' },
        ['System']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PersonNoFrame',
        'quickPhysicalSystem1',
        { menuId: "system", title: 'Physical System', tooltip: 'Physical System' },
        ['System']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickTheory',
        { menuId: "theory", title: 'Theory', tooltip: 'Theory' },
        'Theory'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickTheorem',
        { menuId: "theorem", title: 'Theorem', tooltip: 'Theorem' },
        'Theorem'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Theorem',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickApplyTheory',
        { menuId: "theory", title: 'Apply Theory', tooltip: 'Apply Theory' },
        'Apply'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Apply Application Theory',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickInstrument',
        { menuId: "method", title: 'Instrument', tooltip: 'Instrument' },
        'Instrument'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Instrument',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickMethod',
        { menuId: "method", title: 'Method', tooltip: 'Method' },
        'Method'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Method',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickInputElement',
        { menuId: "inputElement", title: 'Input Element', tooltip: 'Input Element' },
        [
          {
            content: "Input Element",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ]
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify an Input Element',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'quickAddedFunction',
        { menuId: "addedFunction", title: 'Added Function', tooltip: 'Added Function' },
        'Added Function'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify An Added Function',
        position: 'TopRight',
      },
    }
  ];
  return theoryQuickEntities;
}
