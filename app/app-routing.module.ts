import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { AbouttUsComponent } from './pages/aboutt-us/aboutt-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'category',component:SingleCategoryComponent},
  { path: 'post' ,component:SinglePostsComponent },

  { path: 'about',component: AbouttUsComponent },
  { path: 'term-conditions',component:TermsAndConditionComponent },
  { path: 'contact',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
