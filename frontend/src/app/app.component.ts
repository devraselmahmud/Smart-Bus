import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'name',
          type: 'input',
          props: {
            label: 'Name',
            placeholder: 'Name',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            placeholder: 'Email',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'studentId',
          type: 'input',
          props: {
            label: 'Student ID',
            placeholder: 'Student ID',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'password',
          type: 'input',
          props: {
            label: 'Password',
            placeholder: 'Password',
            required: true,
          },
        },
      ]
    }
]; 

  onSubmit(model: any) {
    console.log(this.model);
  }

}
