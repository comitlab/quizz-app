export class User {
    constructor(public firstName: string, 
                public lastName: string,
                public email: string,
                public birthDate: string, // date
                public birthplace: string,
                public telephone: number,
                public addTelephone: number,
                public cni: number,
                public serie: string,
                public homeInstitution: string,
                public average: number,
    ) {}
}