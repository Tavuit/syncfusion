import {
  ConnectorConstraints,
  NodeConstraints,
  PortVisibility,
} from '@syncfusion/ej2-angular-diagrams';
import {
  personPort1,
  personPort2,
  rectPorts,
} from 'src/app/features/modules/sync-content-left/components/constants/communication/common';

export const OPERATOR = ["\u00d7", "\u002D", "\u2013", "\u2012", "\u2014", "\u00b7", "\u00f7", "\u00b1",
  "\u00bd", "\u00bc", "\u00be", "\u2200", "\u2202", "\u2203", "\u2204",
  "\u2205", "\u2208", "\u2209", "\u220B", "\u220C", "\u220F", "\u2210",
  "\u2211", "\u2217", "\u221A", "\u221D", "\u221E", "\u2227", "\u2228",
  "\u2229", "\u222A", "\u2234", "\u2235", "\u2237", "\u2238", "\u2264",
  "\u2265", "\u226e", "\u226f", "\u25B3", "\u25B7", "\u25BD", "\u25c8",
  "\u25C9", "\u25CE", "\u25E0", "\u25E1", "\u25EC", "\u211d", "\u2124",
  "\u2102", "\ud835\udd46", "\u2115"]

export const GREEKCAPTITAL = ["\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396", "\u0397",
  "\u0398", "\u0399", "\u039A", "\u039B", "\u039C", "\u039D", "\u039E",
  "\u039F", "\u03A0", "\u03A1", "\u03A3", "\u03A4", "\u03A5", "\u03A6",
  "\u03A7", "\u03A8", "\u03A9"]

export const GREEKSMALL = ["\u03B1", "\u03B2", "\u03B3", "\u03B4", "\u03B5", "\u03B6", "\u03B7",
  "\u03B8", "\u03B9", "\u03BA", "\u03BB", "\u03BC", "\u03BD", "\u03BE",
  "\u03BF", "\u03C0", "\u03C1", "\u03C2", "\u03C3", "\u03C4", "\u03C5",
  "\u03C6", "\u03C7", "\u03C8", "\u03C9"]

export const ARROW = ["\u2190", "\u2191", "\u2192", "\u2193", "\u2194", "\u2195", "\u2196",
  "\u2197", "\u2198", "\u2199", "\u219A", "\u219B", "\u219C", "\u219D",
  "\u219E", "\u219F", "\u21A0", "\u21A1", "\u21A2", "\u21A3", "\u21A4",
  "\u21A5", "\u21A6", "\u21A7", "\u21A8", "\u21A9", "\u21AA", "\u21AB",
  "\u21AC", "\u21AD", "\u21AE", "\u21AF", "\u21B0", "\u21B1", "\u21B2",
  "\u21B3", "\u21B4", "\u21B5", "\u21B6", "\u21B7", "\u21B8", "\u21B9",
  "\u21BA", "\u21BB", "\u21BC", "\u21BD", "\u21BE", "\u21BF", "\u21C0",
  "\u21C1", "\u21C2", "\u21C3", "\u21C4", "\u21C5", "\u21C6", "\u21C7",
  "\u21C8", "\u21C9", "\u21CA", "\u21CB", "\u21CC", "\u21CD", "\u21CE",
  "\u21CF", "\u21D0", "\u21D1", "\u21D2", "\u21D3", "\u21D4", "\u21D5",
  "\u21D6", "\u21D7", "\u21D8", "\u21D8", "\u21D9", "\u21DA", "\u21DB",
  "\u21DC"]

export function getShapeByType(type, id: string, addInfo: Object, annotation) {
  switch (type) {
    case 'Person':
      let label = [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ];
      if (annotation.length === 2) {
        label.push({
          content: annotation[1],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        });
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2,2)">
            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="77" width="47"/>
            <path vector-effect="non-scaling-stroke" d="M9.4, 19.25 A14.1 14.4375 0 0 1 37.6, 19.25A14.1 14.4375 0 0 1 9.4, 19.25 z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 32.34 L23.5, 50.05 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L39.95, 73.15 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L7.05, 73.15 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M4.7, 46.2 L42.3, 46.2 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M18.8, 26.95 A5 2.5 0 0 1 28.2, 26.95 A5 2.5 0 0 1 18.8, 26.95 z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path viewBox="0 0 60 55" d="M15.04, 14.63 A1 1 0 0 1 19.74, 14.63 A1 1 0 0 1 15.04, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
            <path viewBox="0 0 60 55" d="M27.26, 14.63 A1 1 0 0 1 31.96, 14.63 A1 1 0 0 1 27.26, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
          </g>`,
        },
        height: 80,
        width: 50,
        annotations: label,
        style: {
          fontSize: 10,
        },
        ports: personPort1,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'PersonGroup':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect vector-effect="non-scaling-stroke" height="40" width="120" stroke="black" fill="transparent" stroke-width="1"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
            '<circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black" />' +
            '<circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black" />' +
            '<ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
            '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="41" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
            '<circle vector-effect="non-scaling-stroke" cx="39.0" cy="6" r="1" fill="black" />' +
            '<circle vector-effect="non-scaling-stroke" cx="43.0" cy="6" r="1.0" fill="black" />' +
            '<ellipse vector-effect="non-scaling-stroke" cx="41.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
            '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="62" cy="17.5" r="1.5"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="72" cy="17.5" r="1.5"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="82" cy="17.5" r="1.5"/>' +
            '<foreignObject class="symbol-text-container" x="3" y="30" width="20" height="10" visibility="show">' +
            '<div class="flex-container">' +
            '<div class="symbol-text-element">' +
            '<div style="font-size:5px;font-weight:100"><i>Person1</i></div>' +
            '</div>' +
            '</div>' +
            '</foreignObject>' +
            '<foreignObject class="symbol-text-container" x="33" y="30" width="20" height="10" visibility="show">' +
            '<div class="flex-container">' +
            '<div class="symbol-text-element">' +
            '<div style="font-size:5px;font-weight:100"><i>Person2</i></div>' +
            '</div>' +
            '</div>' +
            '</foreignObject>' +
            '</g>',
        },
        annotations: [
          {
            content: annotation,
            verticalAlignment: 'Bottom',
            offset: { x: 0.5, y: 1 },
            margin: {
              top: 20,
            },
          },
        ],
        height: 140,
        width: 400,
        style: {
          fontSize: 10,
        },
        ports: rectPorts,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'PersonNoFrame':
      let label2 = [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ];
      if (annotation.length === 2) {
        label2.push({
          content: annotation[1],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        });
      }

      return {
        id,
        addInfo: addInfo,
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
        height: 90,
        width: 50,
        annotations: label2,
        style: {
          fontSize: 10,
        },
        ports: personPort2,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'NaturalObserver':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                              <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="100" width="100"/>
                              <path d="M25, 50A25 25 0 0 1 75, 50A25 25 0 0 1 25, 50z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M50, 0L50, 20z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M79.4, 9.5L67.6, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M97.5, 34.5L78.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M97.5, 65.5L78.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M79.4, 90.5L67.6, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M50, 100L50, 80z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M20.6, 90.5L32.4, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M2.5, 65.5L21.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M2.5, 34.5L21.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M20.6, 9.5L32.4, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                          </g>`,
        },
        height: 100,
        width: 100,
        style: {
          fontSize: 10,
        },
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Overlap':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g  transform="translate(2, 2)">
            <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>
            <rect width="90" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect x="10" y="10" height="40" width="90"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            offset: { x: 0.55, y: 0.5 },
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'cover':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>
                      </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        height: 80,
        width: 35.56,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'mobility':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                      <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>
                      </g>`,
        },
        height: 50,
        width: 50,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Continuity':
      let strokeWidth =
        annotation.strokeWidth !== undefined ? annotation.strokeWidth : 1;
      let strokeDashArray =
        annotation.strokeDashArray !== undefined
          ? annotation.strokeDashArray
          : '';
      let ports = annotation.ports !== undefined ? annotation.ports : rectPorts;
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2, 2)">
            <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="${strokeWidth}" stroke-dasharray = "${strokeDashArray}" />
            <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>
          </g>`,
        },
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: ports,
        width: 210,
        height: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Ellipse':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2,2)">
            <rect height="40" width="120" stroke-width="0" fill="transparent" />
            <ellipse vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 120) / 2
            }" width="${120 * 0.75}" height="${40}" visibility="hidden">
              <div style="height: ${40}px" class="flex-container">
                <div width="${120 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'white',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 40,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Group':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g  transform="translate(2, 2)">
            <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
            <rect width="90" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect x="90" height="50" width="10" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Sub':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2, 2)">
            <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
            <rect width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect y="40" height="10" width="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" y="-5" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Text':
      return {
        id,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
            <rect height="30" width="100" fill="transparent" stroke-width="0"/>
            <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
            <div style="height: ${30}px" class="flex-container">
              <div width="${100}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
            </foreignObject>
          </g>`,
        },
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
            style: {
              bold: true,
              fontSize: 15,
              italic: true,
            },
          },
        ],
        height: 30,
        width: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'WhatWeDo':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="575" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <foreignObject class="symbol-text-container" x="${
                        0.11 * 575
                      }" width="${100}" height="${150}" visibility="hidden">
                          <div style="height: ${150}px" class="flex-container">
                              <div width="${100}" class="symbol-text-element">
                                  ${annotation[0]}
                              </div>
                          </div>
                      </foreignObject>
                      <rect x="350" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.65 * 575
                      }" width="${100}" height="${150}" visibility="hidden">
                          <div style="height: ${150}px" class="flex-container">
                              <div width="${100}" class="symbol-text-element">
                                  ${annotation[1]}
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.22, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.78, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.9, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },

        height: 108,
        width: 414,
        ports: [
          {
            id: 'left',
            offset: {
              x: 0.3913,
              y: 0.5,
            },
            visibility: PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4,
          },
          {
            id: 'Right',
            offset: {
              x: 0.60869,
              y: 0.5,
            },
            visibility: PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4,
          },
        ],
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CommunicationGrouped':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="270" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.26, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.76, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 108,
        width: 414,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CommunicationGrouped2':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="50" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="200" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="375" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <rect x="25" y="25" vector-effect="non-scaling-stroke" width="300" height="100" stroke="black" fill="transparent" stroke-width="1" />
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
          {
            content: annotation[1],
            offset: { x: 0.35, y: 0.1 },
          },
          {
            content: annotation[2],
            offset: { x: 0.2, y: 0.5 },
          },
          {
            content: annotation[3],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[4],
            offset: { x: 0.85, y: 0.5 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 175,
        width: 500,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'groupApplicationPart':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="250" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 130,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'groupApplicationSub':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="250" height="170" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect y="125" x="25" height="20" width="200" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 100) / 2
                      }" y="-5" width="${
            100 * 0.75
          }" height="${50}" visibility="hidden">
                          <div style="height: ${50}px" class="flex-container">
                              <div width="${
                                100 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 130,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'ECF':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2,2)">
                          <rect height="100" width="100" fill="transparent" stroke-width="0"/>
                          <rect x="${100 / (Math.sqrt(2) * 2)}" y="${
            -100 / (Math.sqrt(2) * 2)
          }" width="${100 / Math.sqrt(2)}" height="${
            100 / Math.sqrt(2)
          }" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 100) / 2
                          }" width="${
            100 * 0.75
          }" height="${100}" visibility="hidden">
                          <div style="height: ${100}px" class="flex-container">
                              <div width="${
                                100 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],

        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 120,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Circle':
      let content =
        annotation.content !== undefined ? annotation.content[0].content : '';
      let radius = annotation.radius;
      let pointClass =
        annotation.isPoint === true ? 'class="point-circle"' : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  ${pointClass} transform="translate(2, 2)">
                          <rect height="${radius * 2}" width="${
            radius * 2
          }" fill="transparent" stroke-width="0" />
                          <circle vector-effect="non-scaling-stroke" cx="${radius}" cy="${radius}" r="${radius}" fill="${
            annotation.fill
          }" stroke="black" stroke-width="1"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * radius * 2) / 2
                          }" width="${radius * 2 * 0.75}" height="${
            radius * 2
          }" visibility="hidden">
                          <div style="height: ${
                            radius * 2
                          }px" class="flex-container">
                              <div width="${
                                radius * 2 * 0.75
                              }" class="symbol-text-element">
                                  ${content}
                              </div>
                          </div>
                      </foreignObject>
                      </g>`,
        },
        annotations:
          annotation.content !== undefined ? annotation.content : null,
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: annotation.ports !== undefined ? annotation.ports : null,
        height: annotation.radius * 2,
        width: annotation.radius * 2,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Note':
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],

        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2,2)">
                      <rect height="120" width="120" stroke-width="0" fill="transparent" />
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>
                      <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" points="100,0 100,20 120,20"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 120) / 2
                      }" width="${
            120 * 0.75
          }" height="${120}" visibility="hidden">
                          <div style="height: ${120}px" class="flex-container">
                              <div width="${
                                120 * 0.75
                              }" class="symbol-text-element">
                                  My Note
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        height: 120,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Callout':
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
            offset: { x: 0.5, y: 0.4 },
          },
        ],

        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="250" width="350" fill="transparent" stroke-width="0"/>
                      <path fill="transparent" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 350) / 2
                      }" width="${
            350 * 0.75
          }" height="${250}" visibility="hidden">
                      <div style="height: ${250}px" class="flex-container">
                          <div width="${
                            350 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },
        height: 250,
        width: 350,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Table':
      let columnNo = annotation.columnNo;

      let shapeData;
      for (let i = 0; i < columnNo; i++) {
        shapeData += `<g transform="translate(${100 * i})">
              <rect vector-effect="non-scaling-stroke" fill="transparent" stroke-width="1" stroke="black" height="100" width="100"/>
              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>
              <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>
              <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text>
              </g>`;
      }
      let annotationsArray = [];
      let ratio = 1 / (columnNo * 2);
      for (let i = 0; i < columnNo * 2; i++) {
        annotationsArray.push({
          content: annotation.content[i],
          width: 100,
          offset: { x: ratio, y: i % 2 === 0 ? 0.25 : 0.75 },
        });
        if (i % 2 !== 0) ratio = ratio + 1 / columnNo;
      }

      return {
        id,
        addInfo: addInfo,
        annotations: annotationsArray,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                              <rect height="100" width="${
                                100 * columnNo
                              }" fill="transparent" stroke-width="0"/>
                              ${shapeData}
                          </g>`,
        },
        height: 100,
        width: 100 * columnNo,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'WideArrow':
      let angle = 0;
      let x = 0,
        y = 0;
      if (annotation.direction === 'left') {
        angle = 180;
        x = -200;
        y = -70;
      }
      let rightArrow = `<g  transform="translate(2, 2)">
                  <g transform="rotate(${angle}) translate(${x},${y})">
                  <rect height="70" width="200" fill="transparent" stroke-width="0"/>
                  <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>
                  </g>
                  <foreignObject class="symbol-text-container" x="${
                    (0.25 * 200) / 2
                  }" width="${200 * 0.75}" height="${70}" visibility="hidden">
                  <div style="height: ${70}px" class="flex-container">
                      <div width="${200 * 0.75}" class="symbol-text-element">
                          ${annotation.content}
                      </div>
                  </div>
                  </foreignObject>
              </g>`;
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation.content,
          },
        ],
        shape: {
          type: 'Native',
          content: rightArrow,
        },
        height: 70,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'BiWideArrow':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                      <g>
                          <rect height="90" width="500" fill="none" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 500) / 2
                          }" width="${
            500 * 0.75
          }" height="${90}" visibility="hidden">
                          <div style="height: ${90}px" class="flex-container">
                              <div width="${
                                500 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                      </g>
                  </g>`,
        },

        annotations: [
          {
            content: annotation,
          },
        ],
        height: 90,
        width: 500,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CylinderArrow':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g fill="transparent">
                          <rect height="50" width="550" fill="none" strole-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />
                      </g>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 550) / 2
                      }" width="${
            550 * 0.75
          }" height="${50}" visibility="hidden">
                      <div style="height: ${50}px" class="flex-container">
                          <div width="${
                            550 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },

        annotations: [
          {
            content: annotation,
          },
        ],
        height: 50,
        width: 550,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Arrow':
      let sourcePoint = {
        x: -4,
        y: -5,
      };
      let targetPoint = {
        x: -5,
        y: -5,
      };
      if (id === 'giveRiseTo' || id === 'errorToProblem') {
        sourcePoint = {
          x: -5,
          y: -5,
        };
        targetPoint = {
          x: -5,
          y: -4,
        };
      }
      return {
        id,
        addInfo: addInfo,
        type: annotation.type ? annotation.type : 'Straight',
        annotations: annotation.content,
        targetDecorator: {
          shape:
            annotation.shape.target !== undefined
              ? annotation.shape.target
              : 'None',
          style: annotation.style !== undefined ? annotation.style : null,
        },
        sourceDecorator: {
          shape:
            annotation.shape.source !== undefined
              ? annotation.shape.source
              : 'None',
        },
        style: annotation.style !== undefined ? annotation.style : null,
        sourcePoint,
        targetPoint,
        constraints:
          ConnectorConstraints.Default |
          ConnectorConstraints.AllowDrop |
          ConnectorConstraints.Tooltip,
      };
    case 'House':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
            '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
            '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
            '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/>' +
            '</g>',
        },
        height: 250,
        width: 250,
        annotations: [
          {
            content: annotation,
            verticalAlignment: 'Bottom',
            offset: { x: 0.5, y: 1 },
            margin: {
              top: 20,
            },
          },
        ],
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'House1':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
            '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
            '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/>' +
            '<text x="24.25" y="7.75" style="font: italic 2.5px serif;">k</text>' +
            '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/>' +
            '</g>',
        },
        height: 250,
        width: 250,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Basis':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="20" width="320" fill="transparent" stroke-width="0"/>
                      <rect x="0" y="0" vector-effect="non-scaling-stroke" height="20" width="20" stroke="black" stroke-width="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dashArray="10 5" fill="transparent" d = "M 20 10 L 320 10"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.03 * 320
                      }" width="${
            320 * 0.75
          }" height="${20}" visibility="hidden">
                      <div style="height: ${20}px" class="flex-container">
                          <div width="${
                            320 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation,
            offset: { x: 0.03, y: 0.5 },
            style: {
              color: 'black',
              bold: true,
              italic: true,
              fontSize: '12',
              fontFamily: 'Serif',
            },
          },
        ],
        height: 30,
        width: 450,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'HorizontalLine':
      let strokeDash = annotation.style.strokeDashArray
        ? annotation.style.strokeDashArray
        : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g>
                          <rect width="10" height="5" fill="transparent" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 0 2.5 L 10 2.5"/>
                      </g>
                  </g>`,
        },

        ports: annotation.ports,
        annotations: annotation.content,
        height: 30,
        width: annotation.length,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'VerticalLine':
      const strokeDashV = annotation.style.strokeDashArray
        ? annotation.style.strokeDashArray
        : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g>
                          <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDashV}" d="M 2.5 0 L 2.5 10"/>
                      </g>
                  </g>`,
        },

        ports: annotation.ports,
        annotations: annotation.content,
        height: annotation.length,
        width: 30,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Graph':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect width="10" height="10" fill="transparent" stroke-width="0" />
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />
                      </g>`,
        },
        annotations: annotation,
        height: 600,
        width: 600,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Curly':
      return {
        id,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2,2)">
                      <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>
                  </g>`,
        },
        height: 120,
        width: 40,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CurlyClose':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />
                  </g>`,
        },
        height: 120,
        width: 40,
      };
    case 'DottedGroup':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="90" width="170" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="Transparent"/>
                          <rect x="30" y="15" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                          <rect x="40" y="25" height="50" width="100"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 170) / 2
                          }" width="${
            170 * 0.75
          }" height="${90}" visibility="hidden">
                          <div style="height: ${90}px" class="flex-container">
                              <div width="${
                                170 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                          </foreignObject>
                      </g>`,
        },
        ports: rectPorts,
        height: 80,
        width: 160,
      };
    case 'DomainTop':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="50" width="200" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 0 50 L 200 50 L 200 0"/>
                              <foreignObject class="symbol-text-container" x="${
                                (0.25 * 200) / 2
                              }" width="${
            200 * 0.75
          }" height="${50}" visibility="hidden">
                              <div style="height: ${50}px" class="flex-container">
                                  <div width="${
                                    200 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 50,
        width: 200,
      };
    case 'DomainBottom':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="50" width="200" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 50 L 0 0 L 200 0 L 200 50"/>
                              <foreignObject class="symbol-text-container" x="${
                                (0.25 * 200) / 2
                              }" width="${
            200 * 0.75
          }" height="${50}" visibility="hidden">
                              <div style="height: ${50}px" class="flex-container">
                                  <div width="${
                                    200 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 50,
        width: 200,
      };
    case 'DomainRight':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="200" width="50" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 50 0 L 0 0 L 0 200 L 50 200"/>
                              <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                              <div style="height: ${200}px" class="flex-container">
                                  <div width="${50}" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 200,
        width: 50,
      };
    case 'DomainLeft':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="200" width="50" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 50 0 L 50 200 L 0 200"/>
                              <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                              <div style="height: ${200}px" class="flex-container">
                                  <div width="${50}" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 200,
        width: 50,
      };
    case 'Direction':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="35" width="70" fill="transparent" stroke-width="0"/>' +
            '<Path vector-effect="non-scaling-stroke" stroke="black" fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30">' +
            '</g>',
        },
        width: 500,
        height: 200,
      };
    case 'LifeBox':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect vector-effect="non-scaling-stroke" x="0" y="0" height="600" width="300" fill="transparent" stroke="black" stroke-width="2" />
                          <rect vector-effect="non-scaling-stroke" x="25" y="25" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                          <rect vector-effect="non-scaling-stroke" x="25" y="325" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 300) / 2
                          }" y="${50}"width="${
            300 * 0.75
          }" height="${100}" visibility="hidden">
                              <div style="height: ${100}px" class="flex-container">
                                  <div width="${
                                    350 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation[0]}
                                  </div>
                              </div>
                          </foreignObject>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 300) / 2
                          }" y="${375}"width="${
            300 * 0.75
          }" height="${100}" visibility="hidden">
                              <div style="height: ${100}px" class="flex-container">
                                  <div width="${
                                    300 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation[1]}
                                  </div>
                              </div>
                          </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.25 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0.75 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 400,
        width: 200,
      };
    case 'LifeCircle':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect height="600" width="600" stroke-width="0" fill="transparent" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="2" fill="transparent" cx="300" cy="300" r="300"/>
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="147.5" cy="300" rx="112.5" ry="220"/>
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="447.5" cy="300" rx="112.5" ry="220"/>
                          <foreignObject class="symbol-text-container" x="${
                            0.15 * 600
                          }" width="${
            200 * 0.75
          }" height="${600}" visibility="hidden">
                          <div style="height: ${600}px" class="flex-container">
                              <div width="${
                                200 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation[0]}
                              </div>
                          </div>
                          </foreignObject>
                          <foreignObject class="symbol-text-container" x="${
                            0.65 * 600
                          }" width="${
            200 * 0.75
          }" height="${600}" visibility="hidden">
                          <div style="height: ${600}px" class="flex-container">
                              <div width="${
                                200 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation[1]}
                              </div>
                          </div>
                          </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.25, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.75, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 400,
        width: 400,
      };
    case 'Natural':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" height="150" width="100"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 20 30 L 50 80 L 72 30 M 50 80 L 50 130 M 85 40 A 10 10 0 1 0 50 25"/>
                          <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="black" points="45,25 55,25 50,35"/>
                      </g>`,
        },
        ports: rectPorts,
        height: 150,
        width: 100,
      };
    case 'Reference':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect height="710" width="900" stroke-width="0" fill="transparent" />
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                      </g>`,
        },

        annotations: [
          {
            content: 'Education Theory',
            offset: { x: 0.14, y: 0.5 },
            width: 75,
          },
          {
            content: 'Power Theory',
            offset: { x: 0.39, y: 0.5 },
            width: 75,
          },
          {
            content: 'Marketing Theory',
            offset: { x: 0.625, y: 0.52 },
            width: 75,
          },
          {
            content: 'Exchange System Theory',
            offset: { x: 0.865, y: 0.5 },
            width: 75,
          },
          {
            content: 'Communicaiton Theory',
            offset: { x: 0.268, y: 0.25 },
            width: 75,
          },
          {
            content: 'Information Theory',
            offset: { x: 0.5, y: 0.185 },
            width: 75,
          },
          {
            content: 'Instrumentation Theory',
            offset: { x: 0.725, y: 0.255 },
            width: 75,
          },
          {
            content: 'Gamming Theory',
            offset: { x: 0.268, y: 0.75 },
            width: 75,
          },
          {
            content: 'Work Theory',
            offset: { x: 0.51, y: 0.815 },
            width: 75,
          },
          {
            content: 'Reproduction Theory',
            offset: { x: 0.75, y: 0.76 },
            width: 75,
          },
          {
            content: 'The Given Reference',
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 355,
        width: 450,
      };
    case 'Reference1':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="710" width="900" stroke-width="0" fill="transparent" />
                      <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                  </g>`,
        },

        annotations: [
          {
            template:
              '<div style="margin-top:170px; margin-left:55px;">E<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:170px; margin-left:170px;">P<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:180px; margin-left:275px;">M<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:170px; margin-left:380px;">Es<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:75px; margin-left:115px;">K<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:55px; margin-left:220px;">i<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:80px; margin-left:320px;">I<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:260px; margin-left:115px;">G<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:280px; margin-left:220px;">W<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:260px; margin-left:330px;">X<sub>T</sub></div>',
          },
          {
            content: 'R',
            offset: { x: 0.85, y: 1 },
          },
        ],
        height: 355,
        width: 450,
      };
    case 'StrokeRect':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="80" width="160" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="transparent"/>
                      <rect x="30" y="20" width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 160) / 2
                      }" width="${
            160 * 0.75
          }" height="${80}" visibility="hidden">
                      <div style="height: ${80}px" class="flex-container">
                          <div width="${
                            0.75 * 160
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                      </foreignObject>
                      </g>`,
        },
        ports: rectPorts,
        height: 80,
        width: 160,
      };
    case 'LeftLabel':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2, 2)">
                      <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d = "M 30 50 L 200 50 M 30 50 L 30 15"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="25,15 35,15 30,10"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 200) / 2
                      }" y="25" width="${
            200 * 0.75
          }" height="${25}" visibility="hidden">
                      <div style="height: ${25}px" class="flex-container">
                          <div width="${
                            200 * 0.75
                          }" class="symbol-text-element">
                              ${'label'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'label',
            offset: { x: 0.5, y: 1 },
            margin: { top: 10 },
          },
        ],
        height: 50,
        width: 200,
      };
    case 'RightLabel':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g>
                      <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 30 50 L 200 50 L 200 15"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="195,15 205,15 200 ,10" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 200) / 2
                      }" y="25" width="${
            200 * 0.75
          }" height="${25}" visibility="hidden">
                      <div style="height: ${25}px" class="flex-container">
                          <div width="${
                            200 * 0.75
                          }" class="symbol-text-element">
                              ${'label'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'label',
            offset: { x: 0.5, y: 1 },
            margin: { top: 10 },
          },
        ],
        height: 50,
        width: 200,
      };
    case 'PushUpRight':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 50 100 L 100 100 L 100 0"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="95,5 105,5 100,0"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.4 * 100
                      }" y="25" width="${
            100 * 0.75
          }" height="${75}" visibility="hidden">
                      <div style="height: ${75}px" class="flex-container">
                          <div width="${
                            100 * 0.75
                          }" class="symbol-text-element">
                              ${'push up'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'push up',
            offset: { x: 1, y: 0.5 },
            margin: { left: 30 },
          },
        ],
        height: 100,
        width: 100,
      };
    case 'PushUpLeft':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 55 100 L 5 100 L 5 0"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points=" 0,5 10,5 5,0"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.02 * 100
                      }" y="25" width="${
            100 * 0.75
          }" height="${75}" visibility="hidden">
                      <div style="height: ${75}px" class="flex-container">
                          <div width="${
                            100 * 0.75
                          }" class="symbol-text-element">
                              ${'push up'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'push up',
            offset: { x: 0, y: 0.5 },
            margin: { right: 30 },
          },
        ],
        height: 100,
        width: 100,
      };
    case 'TheoryScale':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g tranform="translate(2,2)">
                      <rect height="50" width="600" fill="transparent" stroke-width="0"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 25 L 600 25 M 270 10 L 270 40 M 290 10 L 290 40 M 310 10 L 310 40 M 330 10 L 330 40"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="5" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="25" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="45" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="595" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="575" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="555" cy="15" r="3"/>
                  </g>`,
        },

        annotations: [
          {
            content: '-2',
            offset: { x: 0.45, y: 1 },
          },
          {
            content: '-1',
            offset: { x: 0.4833, y: 1 },
          },
          {
            content: '1',
            offset: { x: 0.5167, y: 1 },
          },
          {
            content: '2',
            offset: { x: 0.55, y: 1 },
          },
        ],
        height: 50,
        width: 600,
      };
    case 'VerticalContinuity':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g>
                      <rect vector-effect="non-scaling-stroke" height="60" width="120" stroke-width="1" fill="none" stroke="black"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="15" r="3.5"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="30" r="3.5"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="45" r="3.5"/>
                  </g>`,
        },
        ports: rectPorts,
        height: 50,
        width: 100,
      };
    case 'redcross':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                      <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/>
                  </g>`,
        },
        height: 50,
        width: 50,
      };
    case 'linkednode':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>
                  </g>`,
        },
        annotations: [
          {
            content: '1',
            offset: { x: 0.5, y: 0.45 },
          },
        ],
        height: 60,
        width: 50,
      };
    case 'emptycontainer':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2,2)">
                  <rect vector-effect="non-scaling-stroke" height="150" width="700" fill="none" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: 'Empty Container',
          },
        ],
        height: 150,
        width: 700,
      };
    case 'squareemptycontainer':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="200" width="200" fill="none" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: annotation,
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        height: 200,
        width: 200,
      };
    case 'RawAnnotationContent':
      let heightR = annotation.height !== undefined ? annotation.height : 80;
      let widthR = annotation.width !== undefined ? annotation.width : 80;
      let textR =
        annotation.content !== undefined
          ? annotation.content[0].content
          : annotation;
      let textLenR;
      if (String(textR).length === 1) {
        textLenR = widthR * 0.15;
      } else if (String(textR).length > 1 && String(textR).length < 5) {
        textLenR = widthR * 0.3;
      } else if (String(textR).length <= 20 && String(textR).length >= 5) {
        textLenR = widthR * 0.65;
      } else {
        textLenR = widthR * 0.85;
      }
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="${heightR}" width="${widthR}" stroke="black" stroke-width="1" fill="transparent" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * widthR) / 2
                      }" width="${
            widthR * 0.75
          }" height="${heightR}" visibility="hidden">
                          <div style="height: ${heightR}px" class="flex-container">
                              <div width="${
                                widthR * 0.75
                              }" class="symbol-text-element">
                                  ${textR}
                              </div>
                          </div>
                      </foreignObject>`,
        },
        annotations:
          annotation.content !== undefined
            ? annotation.content
            : [{ content: annotation }],
        width: widthR,
        height: heightR,
        ports: annotation.ports !== undefined ? annotation.ports : rectPorts,
        style: {
          ...annotation.style,
          fill: 'white',
          fontSize: 20,
        },
      };
    case 'ConnectorArrow':
      let sourcePointC;
      let targetPointC;
      switch (annotation.decoration) {
        case 'up':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 0, y: 1 };
          break;
        case 'down':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 0, y: -1 };
          break;
        case 'left':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 0 };
          break;
        case 'right':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: 0 };
          break;
        case 'upLeft':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 1 };
          break;
        case 'downLeft':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: -1 };
          break;
        case 'upRight':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: 1 };
          break;
        case 'downRight':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: -1 };
          break;
        default:
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 0 };
          break;
      }
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        type: annotation.type || 'Straight',
        annotations: annotation.content,
        sourceDecorator: {
          shape: annotation.source || 'None',
          style: annotation.sourceStyle || null,
        },
        targetDecorator: {
          shape: annotation.target || 'Arrow',
          style: annotation.targetStyle || null,
        },
        style: annotation.style || null,
        sourcePointC,
        targetPointC,
      };
    case 'ConnectorBezier':
      let sourcePointB;
      let targetPointB;
      switch (annotation.decoration) {
        case 'up':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 0, y: 1 };
          break;
        case 'down':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 0, y: -1 };
          break;
        case 'left':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 0 };
          break;
        case 'right':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: 0 };
          break;
        case 'upLeft':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 1 };
          break;
        case 'downLeft':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: -1 };
          break;
        case 'upRight':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: 1 };
          break;
        case 'downRight':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: -1 };
          break;
        default:
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 0 };
          break;
      }
      return {
        id,
        addInfo: addInfo,
        type: annotation.type || 'Bezier',
        annotations: annotation.content,
        sourceDecorator: {
          shape: annotation.source || 'Arrow',
          style: annotation.sourceStyle || null,
        },
        targetDecorator: {
          shape: annotation.target || 'Arrow',
          style: annotation.targetStyle || null,
        },
        style: annotation.style || null,
        sourcePointB,
        targetPointB,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'EquationWithBorder':
      let heightE = annotation?.height !== undefined ? annotation.height : 80;
      let widthE = annotation?.width !== undefined ? annotation.width : 150;
      let textE =
        annotation?.content !== undefined
          ? annotation?.content[0]?.content
          : annotation;
      let textLenE;
      if (String(textE).length === 1) {
        textLenE = widthE * 0.15;
      } else if (String(textE).length > 1 && String(textE).length < 5) {
        textLenE = widthE * 0.3;
      } else if (String(textE).length <= 20 && String(textE).length >= 5) {
        textLenE = widthE * 0.65;
      } else {
        textLenE = widthE * 0.85;
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="${heightE}" width="${widthE}" stroke="black" stroke-width="1" fill="transparent" />
                      </g>`,
        },
        annotations: [{ template: annotation }],
        width: widthE,
        height: heightE,
        ports: rectPorts,
        style: { fill: 'white', fontSize: 10 },
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'EquationWithNoBorder':
      return {
        id,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
            <rect height="30" width="100" fill="transparent" stroke-width="0"/>
            <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
            </foreignObject>
          </g>`,
        },
        addInfo: addInfo,
        annotations: [{ template: annotation }],
        height: 30,
        width: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    default:
      let height = annotation?.height !== undefined ? annotation.height : 80;
      let width = annotation?.width !== undefined ? annotation.width : 150;
      let text =
        annotation?.content !== undefined
          ? annotation?.content[0]?.content
          : annotation;
      let textLen;
      if (String(text).length === 1) {
        textLen = width * 0.15;
      } else if (String(text).length > 1 && String(text).length < 5) {
        textLen = width * 0.3;
      } else if (String(text).length <= 20 && String(text).length >= 5) {
        textLen = width * 0.65;
      } else {
        textLen = width * 0.85;
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * width) / 2
                    }" width="${
            width * 0.75
          }" height="${height}" visibility="hidden">
                        <div style="height: ${height}px" class="flex-container">
                            <div width="${
                              width * 0.75
                            }" class="symbol-text-element">
                                ${text}
                            </div>
                        </div>
                    </foreignObject>`,
        },
        annotations:
          annotation?.content !== undefined
            ? annotation?.content
            : [{ content: annotation }],
        width: width,
        height: height,
        ports: annotation?.ports !== undefined ? annotation?.ports : rectPorts,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        style: {
          ...annotation?.style,
          fill: 'white',
          fontSize: 10,
        },
      };
  }
}
