// eslint-disable-next-line no-unused-vars
let bcrypt = require('bcryptjs');

interface User {
    name:string;
    email: string;
    password: string
    isAdmin: boolean;
    password_reset_token?: string;
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
           password_reset_token: '',
        },
        {
            name:'Victor',
            email:'victorpachara@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin: false, 
            password_reset_token: '',
         },
    ],
}

export default data