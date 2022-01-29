import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss']
})
export class CreateNewFormComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  show(): void {
    this.visibleChange.emit(this.visible = true);
  }

  hide(): void {
    this.visibleChange.emit(this.visible = false);
  }

  onClose(): void {
    this.hide();
  }

  onClick(event: any): void {
    event.stopPropagation();
  }

  ngOnInit(): void {

  }

}
