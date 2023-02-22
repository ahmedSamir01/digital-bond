import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ThankingComponent } from './components/thanking/thanking.component';

const routes: Routes = [{
    path: '',
    component: FormComponent,
  },
  {
    path: 'thanking',
    component: ThankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
