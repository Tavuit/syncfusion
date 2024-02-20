import {Injectable} from "@angular/core";
import {CoreService} from "src/app/shared/services/core.service";
import {IRibbon} from "../../../../../../shared/interfaces/ribbon.interface";
import {EDomain} from "src/app/shared/enums/core.enum";
import {createCapture, createRecorder, ERibbon, recordScreen} from "../constants/header.constant";
import {DiagramService} from "../../../../../../shared/services/diagram.service";
import {EDiagramAction, EDiagramModel} from "../../../../../../shared/enums/diagram.enum";
import { Subject } from "rxjs";
import FileSaver from "file-saver";

export interface IAnnotationContent {
  id: string;
  type?: string;
  img?: string;
  text?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RibbonService {
  private _ribbon: IRibbon = {
    groupButtonIcon: {},
    pasteSettings: {},
    cutButton: {},
    deleteButton: {},
    exportButton: {},
    undoButton: {},
    copyButton: {},
    formatButton: {},
    boldButton: {},
    alignLeftButton: {},
    alginCenterButton: {},
    alignRightButton: {},
    italicButton: {},
    underlineButton: {},
    strikethroughButton: {},
    changecaseButton: {},
    fillButton: {},
    lineButton: {},
    textButton: {},
    startButton: {},
    endButton: {},
    pointerButton: {},
    text2Button: {},
    line2Button: {},
    rectangularButton: {},
    curvedLineButton: {},
    ellipseButton: {},
    ascendantButton: {},
    autoConnectorButton: {},
    nodeSplitButton: {},
    chartButton: {},
    printButton: {},
    webButton: {},
    fontstyleSettings: {},
    fontsizeSettings: {},
    colorSettings: {},
    ruler: {},
    grid: {},
    navigation: {},
    fileSettings: {},
    containerSettings: {},
    containerDropdownData: [],
    listSettings: {},
    listDropdownData: [],
    pictureButton: {},
    fromClipboardButton: {},
    funcButton: {},
    applicationSettings: {},
    resultButton: {},
    collectionButton: {},
    dictionaryButton: {},
    areaButton: {},
    funcDropdown: {},
    functionDropdownData: [],
    wordDropdown: {},
    wordDropdownData: [],
    applicationDropdown: {},
    applicationDropdownData: [],
    relationshipDropdown: {},
    relationshipDropdownData: [],
    bracketDropdown: {},
    bracketDropdownData: [],
    decoratorDropdown: {},
    decoratorDropdownData: [],
    sumProductDropdown: {},
    sumDropdownData: [],
    integralDropdown: {},
    integralDropdownData: [],
    scriptDropdown: {},
    scriptDropdownData: [],
    factionRadicalDropdown: {},
    fracDropdownData: [],
    labeledArrowDropdown: {},
    arrowDropdownData: [],
    underbarOverbarDropdown: {},
    barDropdownData: [],
    accentPrimeDropdown: {},
    accentDropdownData: [],
    matrixDropdown: {},
    matrixDropdownData: [],
    boxesDropdown: {},
    boxesDropdownData: [],
    operatorDropdown: {},
    operatorDropdownData: [],
    greekCapitalDropdown: {},
    greekCapitalDropdownData: [],
    greekSmallDropdownData: [],
    arrowCodeDropdownData: [],
    undoLastActionButton: {},
    communicationButton: {},
    theoryButton: {},
    startProjectButton: {},
    configureWarningMsgButton: {},
    applicationSettingButton: {},
    captureImgButton: {},
    editImgButton: {},
    recordVideoButton: {},
    editVideoButton: {},
    recordAudioButton: {},
    settingsButton: {},
    simulateButton: {},
    debugButton: {},
    stepIntoButton: {},
    abortButton: {},
    stopButton: {},
    simulationSettingButton: {},
    closeProjectButton: {},
    openProjectButton: {},
    subFuncButton: {},
    subApplicationButton: {},
    subResultButton: {},
    fitWindowButton: {},
    pageWidthButton: {},
    showTooltipButton: {},
    allowCrossButton: {},
    imgWidthFrameButton: {},
    rulerButton: {},
    gridButton: {},
    pageBreakButton: {},
    entityLibraryButton: {},
    panZoomButton: {},
    modelViewButton: {},
    viewListButton: {},
    showHideModelButton: {},
    showHideConnectionPointButton: {},
    panToolButton: {},
    arrowLeftButton: {},
    arrowRightButton: {},
    arrowUpButton: {},
    arrowDownButton: {},
    align1Button: {},
    align2Button: {},
    align3Button: {},
    align4Button: {},
    align5Button: {},
    align6Button: {},
    equalHorizonButton: {},
    equalVerticalButton: {},
    increaseHorizonButton: {},
    increaseVerticalButton: {},
    decreaseHorizonButton: {},
    decreaseVerticalButton: {},
    sameWidthButton: {},
    sameHeightButton: {},
    sameSizeButton: {},
    snapGridButton: {},
    snapRulerButton: {},
    snapGuideLineButton: {},
    modelHorizonButton: {},
    modelVerticalButton: {},
    sizeToWindowPointButton: {},
    greekSmallDropdown: {},
    arrowDropdown: {},
    selectedEntityButton: {},
    theory1Dropdown: {},
    theory1DropdownData: [],
    theory2Dropdown: {},
    theory2DropdownData: [],
    fundamentalDropdown: {},
    fundamentalDropdownData: [],
    fundamental2Dropdown: {},
    fundamental2DropdownData: [],
    theoryFunctionDropdown: {},
    theoryFunctionDropdownData: [],
    theoremDropdown: {},
    theoremDropdownData: [],
    timeDropdown: {},
    timeDropdownData: [],
    derivativeDropdown: {},
    derivativeDropdownData: [],
    instrumentDropdown: {},
    instrumentDropdownData: [],
    stabilityDropdown: {},
    stabilityDropdownData: []
  };

  private _insertAnnotationContent$ = new Subject<IAnnotationContent>();
  private _triggerDialog$ = new Subject<boolean>();

  constructor(
    private coreService: CoreService,
    private diagramSerivce: DiagramService
  ) {
    this.injectFunctionToRibbon(ERibbon);
  }

  get ribbon(): IRibbon {
    return this._ribbon
  }

  public getInsertAnnotationContentBS() {
    return this._insertAnnotationContent$.asObservable()
  }

  public setInsertAnnotationContent(value: IAnnotationContent) {
    this._insertAnnotationContent$.next(value);
  }

  private injectFunctionToRibbon(ribbon: IRibbon): void {
    ribbon.communicationButton.clicked = () => this.setDomain(EDomain.COMMUNICATION);
    ribbon.theoryButton.clicked = () => this.setDomain(EDomain.THEORY);
    ribbon.copyButton.clicked = () => this.diagramHandler(EDiagramAction.COPY);
    ribbon.pasteSettings.clicked = () => this.diagramHandler(EDiagramAction.PARSE);
    ribbon.captureImgButton.clicked = () => { this.setTriggerDialog(true) };
    ribbon.editImgButton.clicked = () => { this.setTriggerDialog(true) };
    ribbon.recordVideoButton.clicked = () => { this.setTriggerDialog(true) };
    ribbon.recordAudioButton.clicked = () => { this.setTriggerDialog(true) };
    ribbon.settingsButton.clicked = () => { this.setTriggerDialog(true) };

    this._ribbon = ribbon
  }

  private setDomain(domain: EDomain): void {
    this.coreService.saveCurrentDiagram();
    this.coreService.setDomain(domain);
  }

  private diagramHandler(action: EDiagramAction): void {
    this.diagramSerivce.regiterAction(action);
  }

  public getTriggerDialog() {
    return this._triggerDialog$.asObservable();
  }

  private setTriggerDialog(value) {
    this._triggerDialog$.next(value);
  }

  public async captureImage() {
    let stream = await recordScreen(true, false);
    if (stream) {
      await createCapture(stream)
    } else {
      alert("Browser not supported! Please use a different browser.");
    }
  }

  public async recordVideo() {
    let stream = await recordScreen(true, false);
    if (stream) {
      createRecorder(stream)
    } else {
      alert("Browser not supported! Please use a different browser.");
    }
  }

  public async recordVoice() {
    let mediaRecorder;
    try {
      let stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
      if (stream) {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        let chunks = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        }
        mediaRecorder.onerror = (e) => {
          alert(e.error);
        }
        mediaRecorder.onstop = (e) => {
          let blod = new Blob(chunks);
          FileSaver.saveAs(blod, 'audio-record.mp3');
          stream.getTracks().forEach(item=>item.stop());
        }
      }
    } catch (err) {
      console.error(err)
    }
  }
}
