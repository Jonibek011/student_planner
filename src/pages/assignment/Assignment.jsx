import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  PlusCircle,
  CalendarDays,
  BookOpen,
  CheckCircle,
  Edit,
} from "lucide-react";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { mockDataService, mockUsers } from "../../lib/mockData";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
//main function
function Assignment() {
  const { openSidebar } = useGlobalContext();
  const { width } = useWindowSize();
  const [assignments, setEssignments] = useState([]);
  useEffect(() => {
    const assignmentData = async () => {
      const userId = mockUsers[0].id; // Use mock user ID
      const assignment = await mockDataService.getAssignments(userId);
      setEssignments(assignment);
    };
    assignmentData();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Topshiriqlar</h1>
        <button className="ml-auto gap-1">
          <Link
            to="/assignments/new"
            className="btn font-semibold flex items-center justify-center gap-2 bg-[#18181BE6] text-[#FAFAFA] hover:bg-[#42424b]"
          >
            <PlusCircle className="h-[18px] w-[18px] " />
            <span className="">Yangi topshiriq</span>
          </Link>
        </button>
      </div>
      <div
        className={`grid gap-4 md:${
          width < 900 && width > 767 && openSidebar
            ? "grid-cols-1"
            : "grid-cols-2"
        } lg:grid-cols-3`}
      >
        {assignments.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center py-8">
            Hozircha topshiriqlar yo'q. Yangisini qo'shing!
          </p>
        ) : (
          assignments.map((assignment) => (
            <Card
              key={assignment.id}
              className="hover:shadow-lg shadow transition-shadow duration-200"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">
                  {assignment.title}
                </CardTitle>
                <div
                  className={
                    assignment.completed
                      ? "badge badge-neutral text-white text-[12px]"
                      : "badge bg-gray-200 text-[12px]"
                  }
                >
                  {assignment.completed ? "Bajarilgan" : "Kutilmoqda"}
                </div>
              </CardHeader>
              <CardContent className="grid gap-2">
                <CardDescription className="text-sm text-[#71717B] ">
                  {assignment.description || "Tavsif yo'q."}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-[#71717B]">
                  <BookOpen className="h-4 w-4" />
                  <span>Fan: {assignment.subject?.name || "Noma'lum"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#71717B]">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    Deadline:{" "}
                    {format(new Date(assignment.deadline), "MMM d, yyyy HH:mm")}
                  </span>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Link
                    href={`/assignments/${assignment.id}`}
                    className="btn  btn-sm h-9 border border-gray-200 bg-transparent hover:bg-gray-100 text-sm font-thin "
                  >
                    <Edit className="h-4 w-4 mr-1" /> Ko'rish
                  </Link>

                  {/* Mark as complete/delete functionality would be here */}
                  <button
                    className="btn btn-sm h-9 text-[#18181B] font-thin disabled:bg-gray-100 disabled:text-[#9494a8]  "
                    disabled={assignment.completed}
                  >
                    <CheckCircle className="h-5 w-5 mr-1" /> Bajarildi
                  </button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}

export default Assignment;
