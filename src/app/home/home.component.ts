import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  ScheduleComponent, EventRenderedArgs, DragAndDropService,
  TimelineViewsService, GroupModel, EventSettingsModel, ResizeService, TimeScaleModel, WorkHoursModel, View, RenderCellEventArgs, PopupOpenEventArgs, ActionEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { roomData } from './data';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ 
    templateUrl: 'home.component.html',
    selector: 'app-root',
    styleUrls: ['home.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [TimelineViewsService, ResizeService, DragAndDropService]
})

export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

  public selectedDate: Date = new Date(2021, 7, 2);
  public timeScale: TimeScaleModel = { interval: 60, slotCount: 1 };
  public workHours: WorkHoursModel = { start: '08:00', end: '18:00' };
  public currentView: View = 'TimelineDay';
  public group: GroupModel = {
    enableCompactView: false,
    resources: ['MeetingRoom']
  };
  
  public resourceDataSource: Record<string, any>[] = [
    { text: 'IF-01', id: 1, color: '#ea7a57', capacity: 120, type: 'Előadó' },
    { text: 'IF-208', id: 2, color: '#7fa900', capacity: 16, type: 'Gépterem' },
    { text: 'IF-206', id: 3, color: '#5978ee', capacity: 12, type: 'Gyakorlati' },
    { text: 'IF-210', id: 4, color: '#fec200', capacity: 18, type: 'Gépterem' },
    { text: 'IF-02', id: 5, color: '#df5286', capacity: 110, type: 'Előadó' },
    { text: 'TEOKJ-107', id: 6, color: '#00bdae', capacity: 120, type: 'Előadó' },
    { text: 'TEOKJ-108', id: 7, color: '#865fcf', capacity: 20, type: 'Gépterem' },
    { text: 'TEOKJ-109', id: 8, color: '#1aaa55', capacity: 14, type: 'Gyakorlati' },
    { text: 'TEOKJ-201', id: 9, color: '#df5286', capacity: 14, type: 'Gépterem' },
    { text: 'TEOKJ-202', id: 10, color: '#710193', capacity: 10, type: 'Gyakorlati' }
  ];
  
  public allowMultiple = true;

  public eventSettings: EventSettingsModel = {
    dataSource: extend([], roomData) as Record<string, any>[],
    fields: {
      id: 'Id',
      subject: { title: 'Summary', name: 'Subject' },
      location: { title: 'Location', name: 'Location' },
      description: { title: 'Comments', name: 'Description' },
      startTime: { title: 'From', name: 'StartTime' },
      endTime: { title: 'To', name: 'EndTime' }
    }
  };

  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;

  public isReadOnly(endDate: Date): boolean {
    return (endDate < new Date(2021, 6, 31, 0, 0));
  }

  public onEventRendered(args: EventRenderedArgs): void {
    const data: Record<string, any> = args.data;
    if (this.isReadOnly(data.EndTime as Date)) {
      args.element.setAttribute('aria-readonly', 'true');
      args.element.classList.add('e-read-only');
    }
  }

  public onRenderCell(args: RenderCellEventArgs): void {
    if (args.element.classList.contains('e-work-cells')) {
      if (args.date && args.date < new Date(2021, 6, 31, 0, 0)) {
        args.element.setAttribute('aria-readonly', 'true');
        args.element.classList.add('e-read-only-cells');
      }
    }
    if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
      const target: HTMLElement = args.element.querySelector('.e-resource-text') as HTMLElement;
      target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
    }
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.data && args.type) {
      const data: Record<string, any> = args.data as Record<string, any>;
      let target: HTMLElement | undefined;
  
      if (args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
        if (Array.isArray(args.element) && args.element.length > 0) {
          target = args.element[0];
        }
      } else {
        target = args.target as HTMLElement;
      }
  
      if (target && target.classList.contains('e-work-cells')) {
        if ((target.classList.contains('e-read-only-cells')) ||
          (!this.scheduleObj.isSlotAvailable(data))) {
          args.cancel = true;
        }
      } else if (target && target.classList.contains('e-appointment') &&
        (this.isReadOnly(data.EndTime as Date))) {
        args.cancel = true;
      }
    }
  }
  
  public onActionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data: Record<string, any> | Record<string, any>[] | undefined;
      if (args.requestType === 'eventCreate') {
        data = args.data as Record<string, any>[];
      } else if (args.requestType === 'eventChange') {
        data = args.data as Record<string, any> | Record<string, any>[];
      }
      
      if (Array.isArray(data)) {
        for (const eventData of data) {
          if (!this.scheduleObj.isSlotAvailable(eventData as Record<string, any>)) {
            args.cancel = true;
            break;
          }
        }
      } else {
        if (!this.scheduleObj.isSlotAvailable(data as Record<string, any>)) {
          args.cancel = true;
        }
      }
    }
  }
}
