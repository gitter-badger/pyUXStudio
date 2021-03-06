import { Http, Response } from '@angular/http';
import { ApiService } from './api.service';
import { Injectable, EventEmitter } from '@angular/core';

export interface ProjectData {
  project_name?: string;
  projectFH?: File;
}
export interface State {
  current: number;
  data?: ProjectData | null;
}

export const _STATE_INIT = 100;
export const _STATE_NEW = 200;
export const _STATE_LOAD = 300;
export const _STATE_ERROR = 400;

@Injectable()
export class StateService {
  currentState: State;
  displayTopBox: boolean = false;
  topBoxTxt: string = '';
  public error_details: Response;
  public stateChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: Http) {
    this.currentState = {current : _STATE_INIT, data : null };
  }
  emitChangeEvent() {
    this.stateChange.emit('stateChange');
  }
  get state() {
    return this.currentState;
  }
  set state(newState: State) {
    this.currentState = newState;
    this.emitChangeEvent();
  }
  get topBox() {
      return this.displayTopBox;
  }
  set topBox(disp: boolean) {
    this.displayTopBox = disp;
  }
  get topBoxText() {
    return this.topBoxTxt;
  }
  set topBoxText(txt: string) {
    this.topBoxTxt = txt;
  }
  public createNewProject() {
    let api: ApiService = new ApiService(this, this.http);
    api.addProject(this.state.data.project_name);
  }
}
