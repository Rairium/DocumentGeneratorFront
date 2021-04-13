import {Component, OnInit} from '@angular/core';
import {TemplateService} from '../../services/template.service';
import {Template} from '../../models/template/template';
import {ActivatedRoute} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  id: number;
  template: Template;
  editor = ClassicEditor;

  constructor(private templateService: TemplateService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.templateService.getTemplate(this.id).subscribe(data => {
      this.template = data;
    }, error => alert(error.message));
  }

}
