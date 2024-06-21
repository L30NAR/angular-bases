import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl:'./lista.component.html',
  styleUrl: './lista.component.css',

})

export class ListaComponent {

    @Input()

  public characterLista: Character[]=[{
    name: 'Trunk',
    power: 10
  }]


  @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletCharacter(id?: string):void{

    if (!id) return;

    this.onDelete.emit( id )
  }

}
