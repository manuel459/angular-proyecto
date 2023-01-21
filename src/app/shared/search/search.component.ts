import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<form>
    <input class ="form-control me-2"
           type = "search"
           placeholder="Search"
           [formControl]="inputSearch"/>
     </form>`,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public inputSearch = new FormControl<string>('',{
    nonNullable: true,
  });
  ngOnInit(): void {
 
   this.onChange();
  }

  //Decorador de eventos personalizados
  @Output() searchEvent = new EventEmitter<string>();


  onChange(): void 
  {
    this.inputSearch.valueChanges.pipe(
      map((value: string) => value.trim()),
      filter((value: string ) => value !== '' && value !== null),
      distinctUntilChanged(),
      tap((value:string )=> this.searchEvent.emit(value))
    )
    .subscribe();
  }

}
