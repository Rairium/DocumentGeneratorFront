import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {first} from 'rxjs/operators';
import {TemplateService} from '../../services/template.service';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  templateForm: FormGroup;
  private frontUrl = environment.frontUrl;
  loading = false;
  submitted = false;
  context = DecoupledEditor;

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private templateService: TemplateService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit() {
    this.templateForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      context: [''],
    });
  }

  get f() {
    return this.templateForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();
    if (this.templateForm.invalid) {
      return;
    }

    this.loading = true;
    this.templateService.addTemplate(this.templateForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Template was added successful', true);
          window.location.href = this.frontUrl + '/templates';
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          window.location.href = this.frontUrl + '/templates';
        });
  }
}
