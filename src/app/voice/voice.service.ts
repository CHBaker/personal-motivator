import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VoiceService {
  constructor(private http: HttpClient) {}
}
