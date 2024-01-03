import Layout from '@/components/Layout'
import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getError } from '@/utils/error';


interface FormType {
  email: string;
  password?: string;
}







const ForgotPasswordScreen = () => {
    
    const [loading, setLoading] = useState(false);
    // const [errors, setErrors] = useState<LoginErrorType>();



    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormType>();


  
    const submitHandler = async ({ email, password }: FormType) => {
  
      setLoading(true);
      try {
        await axios.post("/api/auth/forgot-password", { email: email }).then((res:any)=>{
          const response = res.data;
          console.log('ESSE È O RESPONSE',response);
          if (response.status == 200) {
            toast.success(response.message, { theme: "colored" });
            setLoading(false);
          } else if (response.status == 400) {
            
          } else if (response.status == 500) {
            toast.error(response.message, { theme: "colored" });
            setLoading(false);
          }
        })
      
     
  
       
      } catch (err) {
        toast.error(getError(err));
        setLoading(false);
          console.log("The error is", err);
      }
     



    };
  return (
    <Layout title='Recuperar senha'>
        
      <div className="flex justify-center">
        <div className="w-[500px] p-5 rounded-sm shadow-lg bg-white bg-opacity-70">
          <h1 className="text-xl lg:text-2xl font-bold">Esqueçeu a senha ?</h1>
          <p className='flex text-sm lg:text-base'>
          Não se preocupe isso acontece o tempo todo.
           Escreva o seu email abaixo e mandaremos um email de recuperação.
          </p>
          <form onSubmit={handleSubmit(submitHandler)}>
          
            <div className="mb-3 mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full mt-1"
              placeholder='exemplo@email.com'
              id="email"
              autoFocus
              {...register('email', {
                required: 'Por favor insira um email válido',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Por favor use um formato de email válido',
                },
              })}
            />
            {errors.email && (
              <div className="text-red-600">{errors.email.message}</div>
            )}
          </div>
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-sm text-white"
                disabled={loading}
              >
                {loading ? "Processando" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>

    </Layout>
  )
}

export default ForgotPasswordScreen