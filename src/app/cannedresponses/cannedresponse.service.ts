import { Injectable } from '@angular/core';

@Injectable()
export class CannedResponseService {

  getResponse(sentiment: string, score = 1): string {
    return 'Dont\'t worry, be happy';
  }
}
