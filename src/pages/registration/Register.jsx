import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/UseAuth";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUp(name, email, password);
    if (result.success) {
      toast("Hisobingiz yaratildi. Endi kirishingiz mumkin.");
      navigate("/dashboard");
    } else {
      toast(result.error || "Ro'yxatdan o'tishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <Card className="w-full max-w-md bg-white shadow">
        <CardHeader className="text-center flex flex-col">
          <CardTitle className="text-3xl font-bold">
            Ro'yxatdan o'tish
          </CardTitle>
          <CardDescription className="text-[#71717A]">
            Yangi hisob yaratish uchun ma'lumotlaringizni kiriting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-[#18181B]">
                Ism
              </label>
              <input
                id="name"
                placeholder="Ismingiz"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                style={{ outlineWidth: "3px", outlineColor: "#393942" }}
                className=" input input-sm h-10 border text-[#18181B]  border-gray-200   focus:outline focus:outline-[#09090B]  outline-offset-4 placeholder:text-[#8b8b9b]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-[#18181B]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className=" input input-sm h-10 border text-[#18181B]  border-gray-200   focus:outline   outline-offset-4 placeholder:text-[#8b8b9b]"
                style={{ outlineWidth: "3px", outlineColor: "#393942" }}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm text-[#18181B]">
                Parol
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className=" input input-sm h-10 border text-[#18181B]  border-gray-200   focus:outline   outline-offset-4 placeholder:text-[#8b8b9b]"
                style={{ outlineWidth: "3px", outlineColor: "#393942" }}
              />
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm bg-[#18181B]  hover:bg-[#38383f]  h-10 text-white disabled:opacity-50 disabled:bg-[#18181B]"
              disabled={isLoading}
            >
              {isLoading ? "Ro'yxatdan o'tilmoqda..." : "Ro'yxatdan o'tish"}
            </button>
            <button
              className="w-full bg-transparent btn btn-sm h-10 hover:bg-gray-50 border"
              disabled={isLoading}
            >
              Google bilan ro'yxatdan o'tish
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-[#09090B]">
            Hisobingiz bormi?{" "}
            <Link to="/login" className="underline">
              Kirish
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
