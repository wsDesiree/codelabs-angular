import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tosos: Todo[] = [
    {
      action: "Dishes"
    },
    {
      action: "Soccer Practice"
    },
  ]
  constructor() { }
}
