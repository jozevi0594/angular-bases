import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'trunks',
    power:10
  }]

 @Output()
  public onDeleted:EventEmitter<string>=new EventEmitter();

  deleteCharacterById(id?:string):void{
    if (!id) return;
    this.onDeleted.emit(id);
  }
}
