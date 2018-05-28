export class Contact {
    id: string;

    constructor(
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
            this.id = this.generateGuid();
    }

    getFullname(){
        return this.name + " " + this.surname;
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    generateGuid(): string{
        return this.s4() + this.s4() + '-' 
            + this.s4() + '-' 
            + this.s4() + '-' 
            + this.s4() + '-' 
            + this.s4() + this.s4() + this.s4();
    }
}
 