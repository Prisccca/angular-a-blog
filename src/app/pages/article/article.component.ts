import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../dataFake/dataFake';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  articleImage: string = ""
  @Input()
  articleTitle: string = ""
  @Input()
  articleDescription: string = ""
  @Input()
  articleData: string = ""
  @Input()
  articleSubtitle: string = ""
  private id: string | null = "0"


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))
  }

  setValuesToComponent(id:string){
      const result = dataFake.filter(article => article.id.toString() == id)
  }

}
