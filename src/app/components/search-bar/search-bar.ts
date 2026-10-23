import { Component, EventEmitter, Output } from '@angular/core';
import { LucideSearch } from '@lucide/angular';

@Component({
  selector: 'app-search-bar',
  imports: [LucideSearch],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() citySearch = new EventEmitter<string>();

  searchCity(city: string) {
    const trimmedCity = city.trim();

    if(!trimmedCity) {
      return;
    }

    this.citySearch.emit(trimmedCity);
  }
}
