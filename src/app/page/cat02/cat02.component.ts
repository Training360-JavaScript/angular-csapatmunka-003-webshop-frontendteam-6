import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  constructor( private am: ActivatedRoute ) {}

  name: string = '';

  ngOnInit(): void {
    this.am.params.subscribe( params=> {
      this.name =  params['name'];
    } );
  }

}
