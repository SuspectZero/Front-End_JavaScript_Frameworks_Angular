import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import {baseURL} from '../shared/baseurl';

@Injectable()
export class ProcessHttpmsgService {

  constructor() {
  }

  public extractData(res: Response) {
    const body = res.json();

    return body || {};
  }

}
