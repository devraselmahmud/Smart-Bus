import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private service: UserService) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
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
  this.service.login(model).subscribe({
    next: () => {
      alert('Login Successfully!');
    },
    error: (err: any) => {
      alert(err);
    }
  });
}

}
