import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Template} from '../models/template/template';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getTemplates(): Observable<Template[]>{
    return this.http.get<Template[]>(this.apiServerUrl + '/templates');
  }

  public getTemplate(templateId: number): Observable<Template>{
    return this.http.get<Template>(this.apiServerUrl + '/templates/' + templateId);
  }

  addTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>(this.apiServerUrl + '/templates/create', template);
  }
}
