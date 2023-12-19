import Layout from '@/components/Layout'
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<LoginErrorType>();
  
    const submit = (event: React.FormEvent) => {
      event.preventDefault();
      setLoading(true);
      axios
        .post("/api/auth/forgot-password", { email: email })
        .then((res) => {
          setLoading(false);
          const response = res.data;
          if (response.status == 200) {
            toast.success(response.message, { theme: "colored" });
          } else if (response.status == 400) {
            setErrors(response.errors);
          } else if (response.status == 500) {
            toast.success(response.message, { theme: "colored" });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("The error is", err);
        });
    };
  return (
    <Layout title='Recuperar senha'>
        <ToastContainer />
      <div className="flex justify-center">
        <div className="w-[500px] p-5 rounded-lg shadow-lg bg-white bg-opacity-70">
          <h1 className="text-2xl font-bold">Esqueçeu a senha ?</h1>
          <p>
          Não se preocupe isso acontece o tempo todo.
           Escreva o seu email abaixo e mandaremos um email de recuperação.
          </p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block mb-3">Email</label>
              <input
                type="email"
                placeholder="exmplo@mail.com"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="text-red-500">{errors?.email}</span>
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-lg text-white"
                disabled={loading}
              >
                {loading ? "Processing" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

    </Layout>
  )
}

export default ForgotPasswordScreen