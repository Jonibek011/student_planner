import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { FaPlus, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { mockDataService, mockUsers } from "../../lib/mockData";

const MainSubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      const userId = mockUsers[0].id;
      const data = await mockDataService.getSubjects(userId);
      setSubjects(data);
      setLoading(false);
    };

    fetchSubjects();
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 mx-8 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Fanlar</h1>
        <Link
          to="/subjects/new"
          className="btn btn-sm bg-[#18181B] hover:bg-[#2d2d31] h-11 px-4 text-gray-100 font-thin flex gap-2 items-center"
        >
          <FiPlusCircle className="h-4 w-4" />
          Yangi fan
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center py-8">
            Hozircha fanlar yo'q. Yangisini qo'shing!
          </p>
        ) : (
          subjects.map((subject) => (
            <Card
              key={subject.id}
              className="hover:shadow-lg transition-shadow border-2 duration-200"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">
                  {subject.name}
                </CardTitle>
                <div className="badge bagde-secondary bg-gray-200 text-xs font-semibold">
                  {subject.assignments.length} topshiriq
                </div>
              </CardHeader>
              <CardContent className="grid gap-2">
                <CardDescription className="text-sm text-[#71717A]">
                  <span className="text-[#71717A] text-sm">
                    {subject.description || "Tavsif yo'q."}
                  </span>
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-[#71717A]">
                  <FiBookOpen className="h-4 w-4" />
                  <span>{subject.study_sessions.length} o'qish sessiyasi</span>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Link
                    className="btn btn-sm h-9  border border-gray-200 hover:bg-gray-100 bg-transparent text-[#09090B] font-[600]"
                    to={`/subjects/${subject.id}`}
                  >
                    <FaRegEdit className="h-4 w-4 mr-1" /> Ko'rish
                  </Link>
                  <button className="btn btn-sm h-9 text-white bg-red-300">
                    <FaRegTrashAlt className="h-4 w-4 mr-1" /> O'chirish
                  </button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
};

export default MainSubject;
