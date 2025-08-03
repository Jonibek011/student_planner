import { useEffect, useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LiaCheckCircle } from "react-icons/lia";
//params
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Link } from "react-router-dom";
import { mockDataService, mockUsers } from "../../lib/mockData";

import { format } from "date-fns";
//main function
function SubjectId() {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  useEffect(() => {
    const asyncData = async () => {
      //   const userId = mockUsers[0].id; // Use mock user ID
      console.log("ID: ", id);
      const subj = await mockDataService.getSubjectById(id);
      console.log("SUUBJ: ", subj);
      setSubject(subj);
    };
    asyncData();
  }, [id]);

  if (!subject) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const completedAssignments = subject.assignments.filter(
    (a) => a.completed
  ).length;
  const totalAssignments = subject.assignments.length;

  return (
    <main className="flex flex-1 flex-col gap-4 md:mx-6 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Link
          to="/subjects"
          className="btn btn-xs p-0 w-7 h-7 border border-gray-300 bg-transparent hover:bg-gray-200"
        >
          <LuArrowLeft className="h-4 w-4" />
          <span className="sr-only">Orqaga</span>
        </Link>

        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {subject.name}
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Link
            to={`/subjects/${subject.id}/edit`}
            className="btn btn-sm bg-transparent border border-gray-300 hover:bg-gray-100 inline-flex justify-center items-center gap-1 h-9"
          >
            <FaRegEdit className="h-4 w-4 mr-2" /> Fanni tahrirlash
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full card-1 shadow ">
          <CardHeader className="flex flex-col">
            <CardTitle>Fan haqida ma'lumot</CardTitle>
            <CardDescription className="text-[#71717A]">
              {subject.description || "Tavsif yo'q."}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-2">
              <LuBookOpen className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Jami topshiriqlar: {totalAssignments}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LiaCheckCircle className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Bajarilgan topshiriqlar: {completedAssignments}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LuCalendarDays className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                O'qish sessiyalari: {subject.study_sessions.length}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full shadow-md">
          <CardHeader>
            <CardTitle className="">Topshiriqlar</CardTitle>
          </CardHeader>
          <CardContent>
            {subject.assignments.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                Bu fan uchun topshiriqlar yo'q.
              </p>
            ) : (
              <div className="space-y-3 ">
                {subject.assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-xl  transition-colors"
                  >
                    <div>
                      <Link
                        href={`/assignments/${assignment.id}`}
                        className="font-medium hover:underline text-[#09090B]"
                      >
                        {assignment.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Deadline:{" "}
                        {format(
                          new Date(assignment.deadline),
                          "MMM d, yyyy HH:mm"
                        )}
                      </p>
                    </div>
                    <div
                      className={
                        assignment.completed
                          ? "badge badge-neutral text-white text-xs"
                          : "badge bg-gray-100 text-xs"
                      }
                    >
                      {assignment.completed ? "Bajarilgan" : "Kutilmoqda"}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-full shadow">
          <CardHeader>
            <CardTitle>O'qish sessiyalari</CardTitle>
          </CardHeader>
          <CardContent>
            {subject.study_sessions.length === 0 ? (
              <p className="text-[#71717B] text-center py-4">
                Bu fan uchun o'qish sessiyalari yo'q.
              </p>
            ) : (
              <div className="space-y-3">
                {subject.study_sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="font-medium text-[#09090B]">
                        {format(
                          new Date(session.start_time),
                          "MMM d, yyyy HH:mm"
                        )}
                        {session.end_time
                          ? ` - ${format(new Date(session.end_time), "HH:mm")}`
                          : ""}
                      </p>
                      {session.assignment?.title && (
                        <p className="text-sm text-muted-foreground">
                          Topshiriq: {session.assignment.title}
                        </p>
                      )}
                    </div>
                    <div className=" badge badge-outline text-xs border-gray-300 text-[#09090B]">
                      {session.duration_minutes} daqiqa
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default SubjectId;
