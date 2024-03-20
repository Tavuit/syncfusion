import { Injectable } from '@angular/core';
import { allShapes } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SymbolPaletteService {

  constructor() { }

  public transformSymbolPalette(symbolElement: NodeListOf<Element>) {
    if (symbolElement?.length) {
      for (let i = 0; i < symbolElement.length; i++) {
        const findNode = allShapes.find(it => it.id === symbolElement[i].id);
        const svgElement = symbolElement[i];
        svgElement.setAttribute('style', 'pointer-events: none; transform-origin: 0px 0px; overflow: hidden; margin-left: 0px; margin-top: 15px; width: 250px; height: 70px');
        let titleText = symbolElement?.[i]?.querySelector(':scope > g > text');
        let toolTip = symbolElement?.[i]?.parentElement.getAttribute('title');
        if (findNode) {
          toolTip = findNode.toolTip || '';
        }
        let native_element = symbolElement[i].querySelector(':scope > g > g');

        let sizeRect = native_element.querySelector('rect');
        let x = parseInt(sizeRect.getAttribute('width'));
        let y = parseInt(sizeRect.getAttribute('height'));
        let ratio = x / y;
        let _x, _y;

        if (x >= y) {
          _x = 85;
          _y = 105 / ratio;
        } else {
          _y = 85;
          _x = 105 * ratio;
        }

        let sx = _x / x;
        let sy = _y / y;

        let tx = -sx * 60;
        let ty = -sy * 2 + 5;
        let transform = native_element.getAttribute('transform');
        let arr = transform?.split(' ') || [];
        transform = '';
        for (let j = 0; j < arr.length; j++) {
          if (!arr[j].includes('translate') && !arr[j].includes('scale')) {
            transform += arr[j] + ' ';
          }
        }
        transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
        const translate = 'translate(-65, 0)';
        native_element.setAttribute('transform', translate);

        // Translating Text
        let textSpan = titleText?.querySelector('tspan');
        let text = textSpan?.innerHTML;
        let foreignElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        );
        foreignElement.setAttribute('x', '80');
        foreignElement.setAttribute('y', '5');
        foreignElement.setAttribute('height', '26px');
        foreignElement.setAttribute('width', '200px');

        let titleDiv = document.createElement('div');
        titleDiv.style.height = '20px';
        titleDiv.style.width = '180px';
        titleDiv.style.fontSize = '11px';
        titleDiv.style.fontWeight = 'bold';
        titleDiv.style.lineHeight = '12px';
        titleDiv.innerHTML = text;
        foreignElement.appendChild(titleDiv);

        let toolTipElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        );
        toolTipElement.setAttribute('x', '80');
        toolTipElement.setAttribute('y', '35');
        toolTipElement.setAttribute('width', '200px');
        toolTipElement.setAttribute('height', '40px');
        let toolTipDiv = document.createElement('div');
        toolTipDiv.style.height = '40px';
        toolTipDiv.style.width = '200px';
        toolTipDiv.style.fontSize = '11px';
        toolTipDiv.style.lineHeight = '12px';
        toolTipDiv.innerHTML = toolTip;
        toolTipElement.appendChild(toolTipDiv);
        titleText?.parentElement.appendChild(foreignElement);
        titleText?.parentElement.appendChild(toolTipElement);
        titleText?.remove();
      }
    }
  };

  public convertCanvasToSvg(canvasElement: NodeListOf<Element>) {
    if (canvasElement?.length) {
      for (let i = 0; i < canvasElement.length; i++) {
        const canvasElm = canvasElement[i] as any;
        // Get Canvas
        let parent = canvasElm.parentElement;
        let cWidth = canvasElm?.width as number;
        let cHeight = canvasElm?.height as number;
        let ctx = canvasElm.getContext("2d");
        let cData = ctx.getImageData(
          (6 * cWidth) / 14,
          0,
          (8 * cWidth) / 14,
          cHeight - 55
        );
        ctx.clearRect(0, 0, cWidth, cHeight);
        canvasElm.setAttribute("height", cHeight - 55);
        canvasElm.setAttribute("width", (2 * cWidth) / 14);
        ctx.putImageData(cData, 0, 0);
      
        // Insert title
        let title = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        title.setAttribute("x", "0");
        title.setAttribute("y", "0");
        title.style.fontWeight = "Bold";
        title.innerHTML = this.getTitleById(canvasElm.id);
      
        // Initializing the SVG element
        let svgAttributes = document.querySelector(
          ".e-symbol-draggable svg"
        ).attributes;
        let svgElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        for (let j = 0; j < svgAttributes.length; j++) {
          svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
        }
        svgElement.setAttribute("id", canvasElm.id);
        let groupElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        );
        let nativeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        nativeGroup.setAttribute("transform", "translate(0,0) scale(1,1)");
      
        // Initializing Text Element for symbol
        let textElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        let textAttributes = document.querySelector(
          ".e-symbol-draggable text"
        ).attributes;
        for (let j = 0; j < textAttributes.length; j++) {
          textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
        }
        textElement.style.transform = "translate(80px,10px)";
        textElement.appendChild(title);
        // const translate = 'translate(80, 30.5) rotate(0deg, 110.5, 40.5)';
        // transform: rotate(0deg, 110.5, 40.5) translate(0.5, 30.5);
        // textElement.setAttribute('transform', translate);
        groupElement.appendChild(textElement);
        let shapeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("height", `${cHeight - 55}`);
        rect.setAttribute("width", `${(2 * cWidth) / 14}`);
        rect.setAttribute("vector-effect", "non-scaling-stroke");
        rect.setAttribute("fill", "transparent");
        rect.setAttribute("stroke-width", "0");
        shapeGroup.appendChild(rect);
        let canvas = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "foreignObject"
        );
        canvas.setAttribute("height", `${cHeight - 55}`);
        canvas.setAttribute("width", `${cHeight - 55}`);
        canvas.setAttribute("vector-effect", "non-scaling-stroke");
        parent.removeChild(canvasElm);
        canvas.appendChild(canvasElm);
        shapeGroup.appendChild(canvas);
        nativeGroup.appendChild(shapeGroup);
        groupElement.appendChild(nativeGroup);
        svgElement.appendChild(groupElement);
        parent.appendChild(svgElement);
      }
    }
  }

  private getTitleById(id) {
    let shape = allShapes.find((x) => x.id === id);
    if (shape !== undefined) {
      return shape.addInfo[0].title;
    } else {
      return "";
    }
  }
}
