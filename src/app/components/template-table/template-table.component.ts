import {Component, OnInit} from '@angular/core';
import {Template} from '../../models/template/template';
import {TemplateService} from '../../services/template.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import * as DocumentEditor from '@ckeditor/ckeditor5-build-classic';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TemplateTableComponent implements OnInit {
  dataSource = new TemplateDataSource(this.templateService);
  displayedColumns = ['id', 'title', 'type'];
  public editor = DocumentEditor;
  expandedTemplate: Template | null;

  constructor(private templateService: TemplateService) {
  }

  ngOnInit() {
  }
}

export class TemplateDataSource extends DataSource<any> {
  parsedTemplateData: Template[];

  constructor(private templateService: TemplateService) {
    super();
  }

  connect(): Observable<Template[]> {
    return this.templateService.getTemplates();
  }

  disconnect() {
  }
}
