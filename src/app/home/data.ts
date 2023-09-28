    export let roomData: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2021.',
      StartTime: new Date(2021, 6, 30, 9, 0),
      EndTime: new Date(2021, 6, 30, 11, 0),
      RoomId: 1
    },
    {
      Id: 2,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2021, 6, 30, 15, 0),
      EndTime: new Date(2021, 6, 30, 17, 0),
      RoomId: 5
    },
    {
      Id: 3,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2021, 6, 30, 9, 30),
      EndTime: new Date(2021, 6, 30, 11, 0),
      RoomId: 3
    },
    {
      Id: 4,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2021, 6, 30, 11, 0),
      EndTime: new Date(2021, 6, 30, 13, 0),
      RoomId: 4
    },
    {
      Id: 5,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 6, 30, 16, 0),
      EndTime: new Date(2021, 6, 30, 17, 30),
      RoomId: 5
    },
    {
      Id: 6, Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2021, 6, 30, 10, 30),
      EndTime: new Date(2021, 6, 30, 13, 0),
      RoomId: 6
    },
    {
      Id: 7,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2021, 6, 30, 15, 0),
      EndTime: new Date(2021, 6, 30, 16, 30),
      RoomId: 7
    },
    {
      Id: 8,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 6, 30, 8, 0),
      EndTime: new Date(2021, 6, 30, 9, 0),
      RoomId: 4
    },
    {
      Id: 9,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2021, 6, 30, 10, 0),
      EndTime: new Date(2021, 6, 30, 12, 0),
      RoomId: 8
    },
    {
      Id: 10,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 6, 30, 14, 30),
      EndTime: new Date(2021, 6, 30, 17, 0),
      RoomId: 9
    },
    {
      Id: 11,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2021, 6, 30, 9, 0),
      EndTime: new Date(2021, 6, 30, 10, 30),
      RoomId: 10
    },
    {
      Id: 12,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2021, 6, 30, 11, 30),
      EndTime: new Date(2021, 6, 30, 12, 0),
      RoomId: 5
    },
    {
      Id: 13,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 6, 30, 14, 0),
      EndTime: new Date(2021, 6, 30, 16, 0),
      RoomId: 5
    },
    {
      Id: 14,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2021.',
      StartTime: new Date(2021, 6, 31, 9, 0),
      EndTime: new Date(2021, 6, 31, 11, 0),
      RoomId: 1
    },
    {
      Id: 15,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2021, 6, 31, 14, 0),
      EndTime: new Date(2021, 6, 31, 17, 0),
      RoomId: 6
    },
    {
      Id: 16,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2021, 6, 31, 9, 30),
      EndTime: new Date(2021, 6, 31, 11, 0),
      RoomId: 2
    },
    {
      Id: 17,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2021, 6, 31, 11, 0),
      EndTime: new Date(2021, 6, 31, 13, 0),
      RoomId: 7
    },
    {
      Id: 18,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 6, 31, 16, 0),
      EndTime: new Date(2021, 6, 31, 17, 30),
      RoomId: 2
    },
    {
      Id: 19,
      Subject: 'Training session on C#',
      Description: 'Training session',
      StartTime: new Date(2021, 6, 31, 14, 30),
      EndTime: new Date(2021, 6, 31, 16, 0),
      RoomId: 9
    },
    {
      Id: 20,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2021, 6, 31, 10, 30),
      EndTime: new Date(2021, 6, 31, 13, 0),
      RoomId: 3
    },
    {
      Id: 21,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2021, 6, 31, 15, 0),
      EndTime: new Date(2021, 6, 31, 16, 30),
      RoomId: 3
    },
    {
      Id: 22,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 6, 31, 8, 0),
      EndTime: new Date(2021, 6, 31, 9, 0),
      RoomId: 4
    },
    {
      Id: 23,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2021, 6, 31, 10, 0),
      EndTime: new Date(2021, 6, 31, 12, 0),
      RoomId: 4
    },
    {
      Id: 24,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 7, 2, 16, 30),
      EndTime: new Date(2021, 7, 2, 18, 0),
      RoomId: 10
    },
    {
      Id: 25,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2021, 6, 31, 9, 0),
      EndTime: new Date(2021, 6, 31, 10, 30),
      RoomId: 5
    },
    {
      Id: 26,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2021, 6, 31, 11, 30),
      EndTime: new Date(2021, 6, 31, 12, 0),
      RoomId: 5
    },
    {
      Id: 27,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 6, 31, 14, 0),
      EndTime: new Date(2021, 6, 31, 16, 0),
      RoomId: 10
    },
  
    {
      Id: 28,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business goal of 2021.',
      StartTime: new Date(2021, 7, 2, 9, 0),
      EndTime: new Date(2021, 7, 2, 11, 0),
      RoomId: 1
    },
    {
      Id: 29,
      Subject: 'Training session on JSP',
      Description: 'Knowledge sharing on JSP topics.',
      StartTime: new Date(2021, 7, 2, 17, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 6
    },
    {
      Id: 30,
      Subject: 'Sprint Planning with Team members',
      Description: 'Planning tasks for sprint.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 2
    },
    {
      Id: 31,
      Subject: 'Meeting with Client',
      Description: 'Customer meeting to discuss features.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 8
    },
    {
      Id: 32,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 7, 2, 16, 0),
      EndTime: new Date(2021, 7, 2, 17, 30),
      RoomId: 7
    },
    {
      Id: 33,
      Subject: 'Training session on C#',
      Description: 'Training session',
      StartTime: new Date(2021, 7, 2, 14, 30),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 2
    },
    {
      Id: 34,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 13, 0),
      RoomId: 3
    },
    {
      Id: 35,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2021, 7, 2, 15, 0),
      EndTime: new Date(2021, 7, 2, 16, 30),
      RoomId: 8
    },
    {
      Id: 36,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 7, 2, 9, 30),
      EndTime: new Date(2021, 7, 2, 11, 30),
      RoomId: 4
    },
    {
      Id: 37,
      Subject: 'Customer Meeting',
      Description: 'Meeting to discuss customer reported issues.',
      StartTime: new Date(2021, 7, 2, 10, 0),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 9
    },
    {
      Id: 38,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 7, 2, 15, 0),
      EndTime: new Date(2021, 7, 2, 17, 0),
      RoomId: 4
    },
    {
      Id: 39,
      Subject: 'Training session on Vue',
      Description: 'Knowledge sharing on Vue concepts.',
      StartTime: new Date(2021, 7, 2, 9, 0),
      EndTime: new Date(2021, 7, 2, 10, 30),
      RoomId: 5
    },
    {
      Id: 40,
      Subject: 'Meeting with Team members',
      Description: 'Meeting to discuss on work report.',
      StartTime: new Date(2021, 7, 2, 11, 30),
      EndTime: new Date(2021, 7, 2, 12, 30),
      RoomId: 5
    },
    {
      Id: 41,
      Subject: 'Meeting with General Manager',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 7, 2, 14, 0),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 10
    },
    {
      Id: 43,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 2
    },
    {
      Id: 44,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 7, 2, 17, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 1
    },
    {
      Id: 45,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2021, 7, 2, 16, 30),
      EndTime: new Date(2021, 7, 2, 18, 0),
      RoomId: 3
    },
    {
      Id: 46,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 7, 2, 18, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 4
    },
    {
      Id: 47,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 7, 2, 15, 30),
      EndTime: new Date(2021, 7, 2, 18, 0),
      RoomId: 5
    },
    {
      Id: 48,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 7, 2, 18, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 5
    },
    {
      Id: 49,
      Subject: 'HR Meeting',
      Description: 'Meeting to discuss HR plans.',
      StartTime: new Date(2021, 7, 2, 14, 30),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 6
    },
    {
      Id: 50,
      Subject: 'Board Meeting',
      Description: 'Meeting to discuss business plans.',
      StartTime: new Date(2021, 7, 2, 9, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 6
    },
    {
      Id: 51,
      Subject: 'Client Meeting',
      Description: 'Meeting to discuss client requirements.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 7
    },
    {
      Id: 52,
      Subject: 'Appraisal Meeting',
      Description: 'Meeting to discuss employee appraisals.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 19, 30),
      RoomId: 7
    },
    {
      Id: 53,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 7, 2, 15, 30),
      EndTime: new Date(2021, 7, 2, 17, 0),
      RoomId: 9
    },
    {
      Id: 54,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 7, 2, 11, 0),
      EndTime: new Date(2021, 7, 2, 12, 30),
      RoomId: 8
    },
    {
      Id: 55,
      Subject: 'Support Meeting with Managers',
      Description: 'Meeting to discuss support plan.',
      StartTime: new Date(2021, 7, 2, 11, 0),
      EndTime: new Date(2021, 7, 2, 12, 30),
      RoomId: 10
    },
    {
      Id: 56,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 1
    },
    {
      Id: 57,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 2
    },
    {
      Id: 58,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 3
    },
    {
      Id: 59,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 4
    },
    {
      Id: 60,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 5
    },
    {
      Id: 61,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 6
    },
    {
      Id: 62,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 7
    },
    {
      Id: 63,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 8
    },
    {
      Id: 64,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 9
    },
    {
      Id: 65,
      Subject: 'Ebédszünet',
      StartTime: new Date(2021, 7, 2, 13, 0),
      EndTime: new Date(2021, 7, 2, 14, 0),
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
      IsBlock: true,
      RoomId: 10
    }
  ];
  