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
           email:'admin@techquiz.com',
           password:bcrypt.hashSync('123456'),
           isAdmin: true, 
        },
        {
            name:'Victor',
            email:'victorpachara@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin: false, 
         },
    ],
}

export default data