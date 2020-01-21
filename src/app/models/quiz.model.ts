export class Quiz {
    constructor(
        public id: number,
        public title: string,
        public session: string,
        public filiere: string,
        public question?: string[],
        public reply?: string[],
    ) {}
  }