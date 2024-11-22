import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private service: UserService,
              private router: Router) {}

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
      this.router.navigate(['/dashboard']);
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}

}
