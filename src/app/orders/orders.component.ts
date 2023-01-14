import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataResolverService } from '../services/data-resolver.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  valid : number | undefined

  constructor( private dataResolverService :DataResolverService) 
  {
    this.valid = 0;
  }

  ngOnInit(): void {
    console.log(this.dataResolverService.resolve());
    console.log("llego")
    this.route.data.subscribe(({myData}) => console.log(myData));
    }

}
