import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ArticleComponent } from './pages/article/article.component';
import { EditorialComponent } from './pages/editorial/editorial.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'article',
    component:ArticleComponent
  },
  {
    path:'editorial',
    component:EditorialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
