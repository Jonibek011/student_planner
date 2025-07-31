import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from ".././components/ui/card";
import {
  CalendarDays,
  BookOpen,
  CheckCircle,
  Hourglass,
  Bell,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockDataService, mockUsers } from "../lib/mockData";
import { format } from "date-fns";
export default function DashboardPage() {
  const [dashboardStats, setDashboardStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = mockUsers[0].id;
    mockDataService.getDashboardStats(userId).then((data) => {
      setDashboardStats(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-background rounded-lg shadow-md p-8">
        <p className="text-lg text-muted-foreground">Yuklanmoqda...</p>
      </div>
    );
  }

  if (!dashboardStats) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-background rounded-lg shadow-md p-8">
        <p className="text-lg text-muted-foreground">
          Ma'lumotlar yuklanmadi. Iltimos, keyinroq urinib ko'ring.
        </p>
      </div>
    );
  }

  const {
    userStatistics,
    recentAssignments,
    upcomingSessions,
    unreadNotifications,
  } = dashboardStats;
  return (
    <main className="flex flex-1 mx-6  flex-col gap-6 p-6 md:gap-10 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner min-h-[90vh]">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 shadow-xl border-none transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row  justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Jami topshiriqlar
            </CardTitle>
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              {userStatistics.total_assignments}
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
              {userStatistics.completed_assignments} tasi bajarilgan
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 shadow-xl border-none transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800 dark:text-green-200">
              Jami o'qish soatlari
            </CardTitle>
            <Hourglass className="h-5 w-5 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900 dark:text-green-100">
              {userStatistics.total_study_hours} soat
            </div>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">
              Eng uzun seriya: {userStatistics.longest_streak} kun
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow-xl border-none transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800 dark:text-purple-200">
              Joriy seriya
            </CardTitle>
            <CalendarDays className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              {userStatistics.streak_days} kun
            </div>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
              Har kuni o'qishda davom eting!
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 shadow-xl border-none transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-800 dark:text-red-200">
              Yangi bildirishnomalar
            </CardTitle>
            <Bell className="h-5 w-5 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-900 dark:text-red-100">
              {unreadNotifications.length}
            </div>
            <p className="text-xs text-red-700 dark:text-red-300 mt-1">
              O'qilmagan bildirishnomalar
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        <Card className="col-span-2 shadow-xl border-none bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold">
              Yaqinlashib kelayotgan topshiriqlar
            </CardTitle>
            <button className="btn btn-sm h-9  border border-gray-300 hover:bg-gray-100 bg-transparent">
              <Link href="/assignments" className="flex">
                Barchasini ko'rish <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </button>
          </CardHeader>
          <CardContent>
            {recentAssignments.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                Hozircha yaqinlashib kelayotgan topshiriqlar yo'q.
              </p>
            ) : (
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className=" flex items-center hover:bg-gray-100 rounded-xl justify-between p-3   transition-colors"
                  >
                    <div className="">
                      <Link
                        href={`/assignments/${assignment.id}`}
                        className="font-semibold font-sans text-lg text-[#09090B] hover:underline"
                      >
                        {assignment.title}
                      </Link>
                      <p className="text-sm text-[#71717A]">
                        {assignment.subject?.name} -{" "}
                        {format(
                          new Date(assignment.deadline),
                          "MMM d, yyyy HH:mm"
                        )}
                      </p>
                    </div>
                    <div
                      className={
                        assignment.completed
                          ? "bg-green-500 text-white badge"
                          : "badge bg-gray-100"
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

        <Card className="shadow-xl border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Tezkor harakatlar
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Link
              href="/assignments/new"
              className="btn btn-sm  ps-4 h-10 bg-transparent flex justify-start shadow-none  text-[#09090B] font-thin items-center hover:bg-gray-100 border border-gray-200"
            >
              <CheckCircle className=" h-4 w-4" /> Yangi topshiriq qo'shish
            </Link>

            <Link
              href="/study-sessions/new"
              className="btn btn-sm  ps-4 h-10 bg-transparent flex justify-start shadow-none  text-[#09090B] font-thin items-center hover:bg-gray-100 border border-gray-200"
            >
              <BookOpen className=" h-4 w-4" /> O'qish sessiyasini boshlash
            </Link>

            <Link
              href="/goals/new"
              className="btn btn-sm  ps-4 h-10 bg-transparent flex justify-start shadow-none  text-[#09090B] font-thin items-center hover:bg-gray-100 border border-gray-200"
            >
              <CalendarDays className=" h-4 w-4" /> Yangi maqsad qo'shish
            </Link>

            <Link
              href="/subjects/new"
              className="btn btn-sm  ps-4 h-10 bg-transparent flex justify-start shadow-none  text-[#09090B] font-thin items-center hover:bg-gray-100 border border-gray-200"
            >
              <BookOpen className=" h-4 w-4" /> Yangi fan qo'shish
            </Link>
          </CardContent>
        </Card>

        <Card className="col-span-full shadow-xl border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              O'qish sessiyalari
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingSessions.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                Hozircha rejalashtirilgan o'qish sessiyalari yo'q.
              </p>
            ) : (
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center hover:bg-gray-100  justify-between p-3 rounded-xl transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-[#09090B]">
                        {session.subject?.name}
                      </p>
                      <p className="text-sm text-[#71717A] ">
                        {session.assignment?.title
                          ? `${session.assignment.title} - `
                          : ""}
                        {format(
                          new Date(session.start_time),
                          "MMM d, yyyy HH:mm"
                        )}
                        {session.end_time
                          ? ` - ${format(new Date(session.end_time), "HH:mm")}`
                          : ""}
                      </p>
                    </div>
                    <div className="badge bg-gray-100 text-[#09090B] ">
                      45 daqiqa
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
