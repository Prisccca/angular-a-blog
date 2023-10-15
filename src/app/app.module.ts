import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeroTitleComponent } from './components/hero-title/hero-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { LayoutArticleUmComponent } from './components/layout-article-um/layout-article-um.component';
import { LayoutArticleDoisComponent } from './components/layout-article-dois/layout-article-dois.component';
import { WriterProfileComponent } from './components/writer-profile/writer-profile.component';
import { EditorialTextComponent } from './components/editorial-text/editorial-text.component';
import { IndexComponent } from './pages/index/index.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeroTitleComponent,
    SmallCardComponent,
    BigCardComponent,
    LayoutArticleUmComponent,
    LayoutArticleDoisComponent,
    WriterProfileComponent,
    EditorialTextComponent,
    IndexComponent,
    EditorialComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
