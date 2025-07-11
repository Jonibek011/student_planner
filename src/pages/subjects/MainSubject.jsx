import { Link } from "react-router-dom";

//icons
import { FiBookOpen } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

//input form
import { InputForm } from "../../components";
import { useState } from "react";
const mockSubjects = [
  {
    id: 1,
    name: "Matematika",
    color: "bg-blue-500",
    assignments: 5,
    completedAssignments: 2,
    description: "Oliy matematika va analiz",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    name: "Dasturlash",
    color: "bg-green-500",
    assignments: 3,
    completedAssignments: 1,
    description: "Web dasturlash va React",
    createdAt: "2024-01-02",
  },
  {
    id: 3,
    name: "Falsafa",
    color: "bg-purple-500",
    assignments: 2,
    completedAssignments: 0,
    description: "Falsafa tarixi va mantiq",
    createdAt: "2024-01-03",
  },
];

//main function
function MainSubject() {
  const [subjects, setSubjects] = useState(mockSubjects);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteSubject = (id) => {
    setSubjects((prev) => prev.filter((subject) => subject.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/dashboard">
              <FiBookOpen className="h-8 w-8 text-blue-600" />
            </Link>
            <span className="text-2xl font-bold text-gray-900">StudyPlan</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="btn btn-ghost">
              Dashboard
            </Link>
            <button className="btn btn-ghost">Profil</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Fanlarim</h1>
            <p className="text-gray-600">Barcha fanlaringizni boshqaring</p>
          </div>
          <Link
            to="/subjects/new"
            className="mt-4 sm:mt-0 btn bg-blue-600 hover:bg-blue-500 text-white rounded-2xl"
          >
            <FaPlus className="h-4 w-4 mr-2" />
            Yangi Fan Qo'shish
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <InputForm
              placeholder="Fanlarni qidirish..."
              value={searchTerm}
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-100 p-8 border-2">
            <div className=" card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className=" font-semibold">Jami Fanlar</h2>
              <FiBookOpen className="h-4 w-4 opacity-60" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-extrabold">{subjects.length}</div>
            </p>
          </div>

          <div className="card bg-base-100 p-8 border-2">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className=" font-semibold">Jami Topshiriqlar</h2>
              <FiCalendar className="h-4 w-4 opacity-60" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-extrabold">
                {subjects.reduce(
                  (total, subject) => total + subject.assignments,
                  0
                )}
              </div>
            </p>
          </div>

          <div className="card bg-base-100 p-8 border-2">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="font-semibold">Bajarilgan</h2>
              <FiCalendar className="h-4 w-4 opacity-60" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-extrabold">
                {subjects.reduce(
                  (total, subject) => total + subject.completedAssignments,
                  0
                )}
              </div>
            </p>
          </div>
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length === 0 ? (
          <div className="card border-2 ">
            <p className="card-content text-center py-12">
              <FiBookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? "Fan topilmadi" : "Hali fan qo'shilmagan"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm
                  ? "Qidiruv so'zingizni o'zgartiring"
                  : "Birinchi faningizni qo'shish uchun tugmani bosing"}
              </p>
              {!searchTerm && (
                <Link href="/subjects/new">
                  <button>
                    <FaPlus className="h-4 w-4 mr-2" />
                    Fan Qo'shish
                  </button>
                </Link>
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.id}
                className="card border-2 bg-base-100 p-8 hover:shadow-lg transition-shadow flex flex-col gap-5"
              >
                <div className="card-header flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${subject.color}`}
                      ></div>
                      <h2 className=" card-title text-2xl">{subject.name}</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/subjects/${subject.id}/edit`}
                        className="btn btn-sm btn-ghost"
                      >
                        <FaEdit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => deleteSubject(subject.id)}
                        className="text-red-600 hover:text-red-700 btn btn-ghost btn-sm"
                      >
                        <FaRegTrashAlt className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="card-description">{subject.description}</p>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className=" text-gray-600">Topshiriqlar</span>
                      <div className="badge badge-ghost">
                        {subject.completedAssignments}/{subject.assignments}
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${
                            subject.assignments > 0
                              ? (subject.completedAssignments /
                                  subject.assignments) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <Link
                        href={`/subjects/${subject.id}`}
                        className="btn btn-sm bg-transparent"
                      >
                        Ko'rish
                      </Link>
                      <Link
                        href={`/assignments/new?subject=${subject.id}`}
                        className="btn btn-sm bg-blue-600 hover:bg-blue-500 text-white"
                      >
                        <FaPlus className="h-4 w-4 mr-1" />
                        Topshiriq
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainSubject;
