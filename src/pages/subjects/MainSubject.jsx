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
//global context
import { useGlobalContext } from "../../hooks/useGlobalContext";
//window siza
import { useWindowSize } from "../../hooks/useWindowSize";
//main function
const MainSubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { openSidebar } = useGlobalContext();
  const { width, height } = useWindowSize();

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
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
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

      <div
        className={`grid gap-4 md:${
          openSidebar && width < 900 ? "grid-cols-1 " : "grid-cols-2"
        } lg:${openSidebar && width < 1170 ? "grid-cols-2 " : "grid-cols-3"}`}
      >
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
                  <button
                    disabled
                    className="btn disabled:bg-red-300 disabled:text-white btn-sm h-9 inline-flex items-center gap-2 justify-center
                   text-white bg-red-500 hover:bg-red-400"
                  >
                    <FaRegTrashAlt className="h-4 w-4 " />{" "}
                    <span className="">O'chirish</span>
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
