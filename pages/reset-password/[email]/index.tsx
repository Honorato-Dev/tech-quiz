import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPassword({
  params,
}: {
  params: { email: string };
}) {
  const searchParam = useSearchParams();
  const [authState, setAuthState] = useState({
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/reset-password", {
        email: params.email,
        signature: searchParam.get("signature"),
        password: authState.password,
        password_confirmation: authState.cpassword,
      })
      .then((res) => {
        const response = res.data;
        if (response.status == 400) {
          toast.error(response.message, { theme: "colored" });
        } else if (response.status == 200) {
          toast.success(response.message, { theme: "colored" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err..", err);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] p-5 rounded-sm shadow-lg bg-white bg-opacity-70">
          <h1 className="text-2xl font-bold">Mudar a senha?</h1>

          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block mb-1">Senha</label>
              <input
                type="password"
                placeholder="Digite a nova senha"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, password: event.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <label className="block mb-1">Confirmar senha</label>
              <input
                type="password"
                placeholder="Confirme a nova senha"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, cpassword: event.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-lg text-white"
                disabled={loading}
              >
                {loading ? "Processando.." : "Confirmar"}
              </button>
            </div>
            <div className="mt-5 text-center">
              <Link href="/login" className="text-indigo-500 font-semibold">
                {" "}
                Voltar 
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}