import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {EDomain} from "../enums/core.enum";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _domain: BehaviorSubject<EDomain> = new BehaviorSubject<EDomain>(EDomain.COMMUNICATION);

  constructor() {
  }

  public getDomain(): Observable<EDomain> {
    return this._domain.asObservable();
  }

  public setDomain(value: EDomain) {
    this._domain.next(value);
  }
}
