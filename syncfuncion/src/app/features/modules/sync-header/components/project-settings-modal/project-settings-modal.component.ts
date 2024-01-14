import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
import { FormsModule } from '@angular/forms';
import { STORAGE_KEY } from 'src/app/utils/constants';

@Component({
  selector: 'project-settings-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, SyncDialogComponent],
  templateUrl: './project-settings-modal.component.html',
  styleUrls: ['./project-settings-modal.component.scss']
})
export class ProjectSettingsModalComponent {
  @ViewChild('micSettingSelection') micSelectionRef: ElementRef;
  @ViewChild('audioInSelection') audioInSelectionRef: ElementRef;
  @ViewChild('audioOutSelection') audioOutSelectionRef: ElementRef;
  @Input() visible = false;
  @Output() closeModal = new EventEmitter();
  public audioOutSelectionOptions = [];
  public audioInSelectionOptions = [];
  public micInSelectionOptions = [];
  public audioRecording = false;
  public audioOutputDevices = [];
  public audioInputDevices = [];
  public hardWareEncode = false;
  public audioOut = false;
  public audioIn = false;
  public recordValue = false;
  public micSelectionValue;
  public audioInSelectionValue;
  public audioOutSelectionValue;
  public videoDevice = {
    output: {
      enable: false,
      value: null
    },
    input: {
      enable: false,
      value: null
    }
  };
  public audioDevice = {
    playback: "true",
    mic: null
  }
  public hardwareEncording = false;
  public EDialogSize = EDialogSize;

  constructor() {
    this.getDevices();
  }

  public handleVisibleChange(value: boolean) {
    this.closeModal.emit(value);
  }

  public onCheckBoxHardware(event) {
    this.hardwareEncording = event;
    this.saveSettings();
  }
  public onCheckBoxAudioOut(event) {
    this.videoDevice.output.enable = event;
    this.disableVideoSetting();
    this.saveSettings();
  }
  public onCheckBoxAudioIn(event) {
    this.videoDevice.input.enable = event;
    this.disableVideoSetting();
    this.saveSettings();
  }
  public onChangeRadioRecord(event) {
    this.audioDevice.playback = event;
    this.disableAudioSetting();
    this.saveSettings();
  }

  public onAudioInSelectChange(event) {
    const target = event.target as HTMLSelectElement;
    this.videoDevice.input.value = target.value;
    this.disableVideoSetting();
    this.saveSettings();
  }
  public onAudioOutSelectChange(event) {
    const target = event.target as HTMLSelectElement;
    this.videoDevice.output.value = target.value
    this.disableVideoSetting();
    this.saveSettings();
  }
  public onMicSelectChange(event) {
    const target = event.target as HTMLSelectElement;
    this.audioDevice.mic = target.value;
    this.saveSettings();
  }
  private saveSettings() {
    const jsonSettings = {
      hardWareEncode: this.hardWareEncode, audioDevice: this.audioDevice, videoDevice: this.videoDevice};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jsonSettings));
  }

  private disableAudioSetting() {
    if (this.audioDevice.playback === "true") {
      this.recordValue = true;
      if (this.micSelectionRef) {
        this.micSelectionRef.nativeElement.disabled = true;
      }
    }
    if (this.audioDevice.playback === "false") {
      this.recordValue= true;
      if (this.micSelectionRef) {
        this.micSelectionRef.nativeElement.disabled = false;
      }
    }
  }

  private disableVideoSetting() {
    if (this.audioOutSelectionRef) {
      if (!this.videoDevice.output.enable) {
        this.audioOutSelectionRef.nativeElement.disabled = true;
      } else {
        this.audioOutSelectionRef.nativeElement.disabled = false;
      }
    }

    if (this.audioInSelectionRef) {
      if (!this.videoDevice.input.enable) {
        this.audioInSelectionRef.nativeElement.disabled = true;
      } else {
        this.audioInSelectionRef.nativeElement.disabled = false;
      }
    }
  }

  private async getDevices() {
    // Check if the enumerateDevices method is available
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      // Enumerate devices
      await navigator.mediaDevices.getUserMedia({audio: true, video: false});
      await navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          devices = devices.filter(item=> item.deviceId != 'default');
          this.audioOutputDevices = devices.filter(device => device.kind === 'audiooutput');
          this.audioInputDevices = devices.filter(device => device.kind === 'audioinput');
          this.audioOutputDevices.forEach(item => {
            this.audioOutSelectionOptions.push({
              text: item['label'],
              value: item['deviceId']
            })
          })
          this.audioInputDevices.forEach(item => {
            this.audioInSelectionOptions.push({
              text: item['label'],
              value: item['deviceId']
            });
            this.micInSelectionOptions.push({
              text: item['label'],
              value: item['deviceId']
            });
          })
        })
        .then(devices => {
          this.loadSettings();
          this.bindDataSetting()
        })
        .catch(error => {
          console.error('Error enumerating devices:', error);
        });
    } else {
      console.error('enumerateDevices not supported.');
    }
  }

  private loadSettings() {
    const settings = localStorage.getItem(STORAGE_KEY);
    if (settings) {
      let jsonSettings = JSON.parse(settings);
      this.hardwareEncording = !!jsonSettings['hardwareEncording'] ? jsonSettings['hardwareEncording'] : this.hardwareEncording;
      if (!!jsonSettings['videoDevice']) {
        this.videoDevice = jsonSettings['videoDevice'];
      } else {
        this.videoDevice = {
          output: {
            enable: false,
            value: null
          },
          input: {
            enable: false,
            value: null
          }
        }
      }
      if (!!jsonSettings['audioDevice']) {
        this.audioDevice = jsonSettings['audioDevice'];
      } else {
        this.audioDevice = {
          playback: "true",
          mic: null
        }
      }
    }
  }

  private bindDataSetting() {
    this.hardWareEncode = this.hardwareEncording;
    this.audioOut = this.videoDevice.output.enable;
    this.audioIn = this.videoDevice.input.enable;

    this.setSelectedValue(this.audioOutSelectionOptions, this.videoDevice.output.value);
    this.setSelectedValue(this.audioInSelectionOptions, this.videoDevice.input.value);
    this.setSelectedValue(this.micInSelectionOptions, this.audioDevice.mic);

    this.disableVideoSetting();
    this.disableAudioSetting()
  }

  private setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.length; i++) {
      if (selectObj[i].value == valueToSet) {
        selectObj[i].selected = true;
        return;
      }
    }
  }
}
