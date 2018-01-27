export class Quiz {
  _id: string;
  title: string;
  description: string;
  questions?: Array<any> = [];
  active?: boolean = false;
}
