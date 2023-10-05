    export let roomData: Record<string, any>[] = [  
    {
      Id: 28,
      Subject: 'Matek óra',
      Description: 'Mindenki kedvenc tárgya.',
      StartTime: new Date(2021, 7, 2, 9, 0),
      EndTime: new Date(2021, 7, 2, 11, 0),
      RoomId: 1
    },
    {
      Id: 29,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 17, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 6
    },
    {
      Id: 30,
      Subject: 'Frontend fejlesztés',
      Description: 'Csak nézz rá.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 2
    },
    {
      Id: 31,
      Subject: 'Backend fejlesztés',
      Description: 'Az összes adatod a miénk.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 8
    },
    {
      Id: 32,
      Subject: 'Biorobotok építése',
      Description: 'Valakinek ezt is meg kell csinálnia.',
      StartTime: new Date(2021, 7, 2, 16, 0),
      EndTime: new Date(2021, 7, 2, 17, 30),
      RoomId: 7
    },
    {
      Id: 33,
      Subject: 'Szoftverfejlesztés 1',
      Description: 'Az alkotás sosem volt még ilyen bonyolult.',
      StartTime: new Date(2021, 7, 2, 14, 30),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 2
    },
    {
      Id: 34,
      Subject: 'Szoftverfejlesztés előadás',
      Description: 'Ne csak hallgasd, figyelj.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 13, 0),
      RoomId: 3
    },
    {
      Id: 35,
      Subject: 'Backup elmentése CD-re',
      Description: 'Tartsd az adataid a párnád alatt.',
      StartTime: new Date(2021, 7, 2, 15, 0),
      EndTime: new Date(2021, 7, 2, 16, 30),
      RoomId: 8
    },
    {
      Id: 36,
      Subject: 'Matek óra',
      Description: 'Mindenki kedvenc tárgya.',
      StartTime: new Date(2021, 7, 2, 9, 30),
      EndTime: new Date(2021, 7, 2, 11, 30),
      RoomId: 4
    },
    {
      Id: 37,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 10, 0),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 9
    },
    {
      Id: 38,
      Subject: 'Frontend fejlesztés',
      Description: 'Csak nézz rá.',
      StartTime: new Date(2021, 7, 2, 15, 0),
      EndTime: new Date(2021, 7, 2, 17, 0),
      RoomId: 4
    },
    {
      Id: 39,
      Subject: 'Backend fejlesztés',
      Description: 'Az összes adatod a miénk.',
      StartTime: new Date(2021, 7, 2, 9, 0),
      EndTime: new Date(2021, 7, 2, 10, 30),
      RoomId: 5
    },
    {
      Id: 40,
      Subject: 'Biorobotok építése',
      Description: 'Valakinek ezt is meg kell csinálnia.',
      StartTime: new Date(2021, 7, 2, 11, 30),
      EndTime: new Date(2021, 7, 2, 12, 30),
      RoomId: 5
    },
    {
      Id: 41,
      Subject: 'Szoftverfejlesztés 1',
      Description: 'Az alkotás sosem volt még ilyen bonyolult.',
      StartTime: new Date(2021, 7, 2, 14, 0),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 10
    },
    {
      Id: 43,
      Subject: 'Frontend fejlesztés',
      Description: 'Csak nézz rá.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 2
    },
    {
      Id: 44,
      Subject: 'Matek óra',
      Description: 'Mindenki kedvenc tárgya.',
      StartTime: new Date(2021, 7, 2, 17, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 1
    },
    {
      Id: 45,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 16, 30),
      EndTime: new Date(2021, 7, 2, 18, 0),
      RoomId: 3
    },
    {
      Id: 46,
      Subject: 'Backend fejlesztés',
      Description: 'Az összes adatod a miénk.',
      StartTime: new Date(2021, 7, 2, 18, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 4
    },
    {
      Id: 47,
      Subject: 'Frontend fejlesztés',
      Description: 'Csak nézz rá.',
      StartTime: new Date(2021, 7, 2, 15, 30),
      EndTime: new Date(2021, 7, 2, 18, 0),
      RoomId: 5
    },
    {
      Id: 48,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 18, 30),
      EndTime: new Date(2021, 7, 2, 20, 0),
      RoomId: 5
    },
    {
      Id: 49,
      Subject: 'Matek óra',
      Description: 'Mindenki kedvenc tárgya.',
      StartTime: new Date(2021, 7, 2, 14, 30),
      EndTime: new Date(2021, 7, 2, 16, 0),
      RoomId: 6
    },
    {
      Id: 50,
      Subject: 'Backend fejlesztés',
      Description: 'Az összes adatod a miénk.',
      StartTime: new Date(2021, 7, 2, 9, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 6
    },
    {
      Id: 51,
      Subject: 'Frontend fejlesztés',
      Description: 'Csak nézz rá.',
      StartTime: new Date(2021, 7, 2, 10, 30),
      EndTime: new Date(2021, 7, 2, 12, 0),
      RoomId: 7
    },
    {
      Id: 52,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 18, 0),
      EndTime: new Date(2021, 7, 2, 19, 30),
      RoomId: 7
    },
    {
      Id: 53,
      Subject: 'Backend fejlesztés',
      Description: 'Az összes adatod a miénk.',
      StartTime: new Date(2021, 7, 2, 15, 30),
      EndTime: new Date(2021, 7, 2, 17, 0),
      RoomId: 9
    },
    {
      Id: 54,
      Subject: 'Mesterséges Intelligencia',
      Description: 'Se vele, se nélküle nem tudunk élni.',
      StartTime: new Date(2021, 7, 2, 11, 0),
      EndTime: new Date(2021, 7, 2, 12, 30),
      RoomId: 8
    },
    {
      Id: 55,
      Subject: 'Matek óra',
      Description: 'Mindenki kedvenc tárgya.',
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
  