import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  private service;
  public text: string;

  constructor(service: MyDataService) { this.service = service }

  ngOnInit() {
    this.text = this.service.get();
  }

}