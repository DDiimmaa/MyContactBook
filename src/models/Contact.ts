export class Contact {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public category: number = 0, 
        public description: string = "",
        public phone: string = "",
        public email: string = "",
        public info: string = "",
        public dateOfBirth: string = "",
        public instagramLink: string = "",
        public facebookLink: string = "",
        public image: string = "") { 
    }

    getFullname(){
        return this.name + " " + this.surname;
    }
}
 