import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LucideSearch } from '@lucide/angular';

@Component({
  selector: 'app-search-bar',
  imports: [LucideSearch],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() citySearch = new EventEmitter<string>();

  @ViewChild('cityInput') cityinput!: ElementRef<HTMLInputElement>;

  searchCity(city: string, input: HTMLInputElement) {
    const trimmedCity = city.trim();

    if(!trimmedCity) {
      return;
    }

    this.citySearch.emit(trimmedCity);
  }

  clearInput() {
    this.cityinput.nativeElement.value = '';
  }
}
