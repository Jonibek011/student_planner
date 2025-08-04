import { useState } from "react";
import { mockDataService, mockUsers } from "../../lib/mockData";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
//icon
import { LuArrowLeft } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
//main function
function NewSubject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    const userId = mockUsers[0].id; // Use mock user ID

    try {
      await mockDataService.addSubject(userId, { name, description });
      toast("Yangi fan muvaffaqiyatli qo'shildi.");
      navigate("/subjects");
    } catch (error) {
      toast("Fanni qo'shishda xatolik yuz berdi.");
      console.error("Failed to add subject:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 mx-6">
      <div className="flex items-center gap-4">
        <Link
          to="/subjects"
          className="btn btn-xs p-0 h-7 w-7 border border-gray-200 bg-transparent hover:bg-gray-100"
        >
          <LuArrowLeft className="h-4 w-4" />
          <span className="sr-only">Orqaga</span>
        </Link>

        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Yangi fan qo'shish
        </h1>
      </div>
      <Card className="mx-auto w-full max-w-2xl shadow">
        <CardHeader className="flex flex-col">
          <CardTitle>Fan ma'lumotlari</CardTitle>
          <CardDescription className="text-[#71717B]">
            Yangi fan uchun nom va tavsifni kiriting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-[#393942] text-sm font-semibold"
              >
                Fan nomi
              </label>
              <input
                id="name"
                placeholder="Matematika, Fizika, Tarix..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-sm h-10 border text-[#18181B]  border-gray-200 bg-[]  focus:outline  outline-offset-4 placeholder:text-[#8b8b9b]"
                style={{ outlineWidth: "3px", outlineColor: "#393942" }}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="description"
                className="text-[#393942] font-semibold text-sm"
              >
                Tavsif (ixtiyoriy)
              </label>
              <textarea
                id="description"
                placeholder="Bu fan haqida qisqacha ma'lumot..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                style={{ outlineWidth: "3px", outlineColor: "#393942" }}
                className="textarea border  border-gray-200 placeholder:text-[#8b8b9b] text-[#18181B] focus:outline  outline-offset-4"
              />
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm bg-[#18181B]  hover:bg-[#38383f]  h-10 text-white disabled:opacity-50 disabled:bg-[#18181B]"
              disabled={isSaving}
            >
              {isSaving ? "Qo'shilmoqda..." : "Fanni qo'shish"}
            </button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export default NewSubject;
