// eslint-disable-next-line no-unused-vars
let bcrypt = require('bcryptjs');






interface User {
    name:string;
    email: string;
    password: string
    isAdmin: boolean;
}

interface Data {

    users: User[];
}

const data:Data = {
    users:[
        {
           name:'Admin',
           email:'admin@ditto.com',
           password:bcrypt.hashSync('thmpv77d6f'),
           isAdmin: true, 
        },
       
        {
            name:'Victor',
            email:'victor@ditto.com',
            password:bcrypt.hashSync('123456'),
            isAdmin: false, 
         },
         {
            name:'SuperUser',
            email:'sindico@ditto.com',
            password:bcrypt.hashSync('cpdaxhtz'),
            isAdmin: true, 
         },
    ],
    
    
}
export default data