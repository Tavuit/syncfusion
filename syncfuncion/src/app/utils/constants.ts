import { personPort1, personPort2, rectPorts } from "src/app/features/modules/sync-content-left/components/constants/communication/common";

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
        }
      };
    case 'Overlap':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: "Native", content: `
          <g  transform="translate(2, 2)">
            <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>
            <rect width="90" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect x="10" y="10" height="40" width="90"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${(0.25 * 100) / 2}" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [{
          offset: {x: 0.55, y: 0.5}, content: annotation,
        },],
        style: {
          fill: "none", fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
      };
    case 'cover':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: "Native", content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>
                      </g>`,
        },
        annotations: [{
          content: annotation,
        },],
        height: 80,
        width: 35.56,
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
      };
    case 'Continuity':
      let strokeWidth = annotation.strokeWidth !== undefined ? annotation.strokeWidth : 1;
      let strokeDashArray = annotation.strokeDashArray !== undefined ? annotation.strokeDashArray : "";
      let ports = annotation.ports !== undefined ? annotation.ports : rectPorts;
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: "Native", content: `
          <g transform="translate(2, 2)">
            <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="${strokeWidth}" stroke-dasharray = "${strokeDashArray}" />
            <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>
          </g>`,
        },
        style: {
          fill: "none", fontSize: 10,
        },
        ports: ports,
        width: 210,
        height: 100,
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
        style: {
          ...annotation?.style,
          fill: 'white',
          fontSize: 10,
        },
      };
  }
}
