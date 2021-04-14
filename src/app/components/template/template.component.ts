import {Component, OnInit} from '@angular/core';
import {TemplateService} from '../../services/template.service';
import {Template} from '../../models/template/template';
import {ActivatedRoute} from '@angular/router';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  id: number;
  template: Template;
  editor = DecoupledEditor;

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  constructor(private templateService: TemplateService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.templateService.getTemplate(this.id).subscribe(data => {
      this.template = data;
    }, error => alert(error.message));
  }

}
