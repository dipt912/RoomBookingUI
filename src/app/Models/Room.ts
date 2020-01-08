export class Room {
   id: number;
   name: string;
   location: string;
   capacities = Array<LayoutCapacity>();

}

export class LayoutCapacity {
  layout: Layout;
  capacity: number;
}

export enum Layout {
  THEATER= 'Theater',
  USHAPE= 'UShape',
  BOARD = 'Board meeting'
}
