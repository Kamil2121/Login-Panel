import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }

}
