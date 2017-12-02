class Authors {
    name: string;
}

export const AUTHORSNAMES: Authors[] = [{
    "name" : "Sachin Jain"
}, {
    "name" : "Pratham"
},
{
    "name" : "Nikhil Jain"
},
{
    "name" : "Robert"
}
];

export class test {    
    newdata : any = AUTHORSNAMES;
    ngOnInit() {  
        return this.newdata;
    }
}