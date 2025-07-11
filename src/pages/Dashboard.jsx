import { FiBookOpen } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { LuCircleAlert } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";

//rrd
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ========== */}
          <div className="navbar bg-base-100 h-16">
            <div className="flex-1">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, userName!</p>
              </div>
            </div>
            <div className="flex-none">
              <div className="badge badge-ghost px-3  font-semibold me-5">
                Free
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== main section ====================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-100 shadow-sm border-2  border-base-200 p-5">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-semibold">
                Total Subjects
              </h2>
              <FiBookOpen className="h-4 w-4 text-muted-foreground opacity-50" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs opacity-75">
                {/* {getUsagePercentage}/{getSubjectLimit} used */}10
              </p>
            </p>
          </div>

          <div className="card bg-base-100 shadow-sm border-2  border-base-200 p-5">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-semibold">Assignments</h2>
              <FiCalendar className="h-4 w-4 text-muted-foreground opacity-50" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs opacity-60">0 completed</p>
            </p>
          </div>

          <div className="card bg-base-100  shadow-sm border-2  border-base-200 p-5">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-semibold">Study Hours</h2>
              <CiClock2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-bold">0 h</div>
              <p className="text-xs opacity-60">This week</p>
            </p>
          </div>

          <div className="card bg-base-100  shadow-sm border-2  border-base-200 p-5">
            <div className="card-header flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-semibold">
                Current Streak
              </h2>
              <FiTarget className="h-4 w-4 text-muted-foreground opacity-50" />
            </div>
            <p className="card-content">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs  opacity-60">Days</p>
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Progress Overview */}
          <div className="card bg-base-100 lg:col-span-2 flex flex-col gap-8 border-2 p-5">
            <div className="card-header">
              <h2 className="card-title text-2xl font-bold">
                Progress Overview
              </h2>
              <p className="card-description text-sm font-semibold text-base-content opacity-60">
                Your academic progress at a glance
              </p>
            </div>
            <p className="card-content space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">
                    Assignment Completion
                  </span>
                  <span className="text-sm font-semibold opacity-60">0 %</span>
                </div>
                {/* ================ completion rate ============================ */}
                <div className="h-2 relative  w-full overflow-hidden rounded-full bg-gray-100" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">Completed: 0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LuCircleAlert className="h-4 w-4 text-orange-500 " />
                  <span className="text-sm font-semibold">Upcoming: 0</span>
                </div>
              </div>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="card bg-base-100 border-2  p-5 flex flex-col gap-5">
            <div className="card-header">
              <h2 className="text-2xl font-bold">Quick Actions</h2>
              <p className="card-description font-semibold opacity-50">
                Get started with common tasks
              </p>
            </div>
            <p className="card-content space-y-3">
              <Link
                to="/subjects/new"
                className="btn w-full justify-start text-base-100 bg-blue-600 hover:bg-blue-500"
              >
                <FaPlus className="mr-2 h-4 w-4" />
                Add Subject
              </Link>

              <Link
                to="/assignments/new"
                className="w-full justify-start border btn bg-transparent"
              >
                <FaPlus className="mr-2 h-4 w-4" />
                Create Assignment
              </Link>

              <Link
                to="/subjects"
                className="w-full justify-start btn bg-transparent"
              >
                <FiBookOpen className="mr-2 h-4 w-4" />
                View All Subjects
              </Link>

              <Link
                to="/assignments"
                className="w-full justify-start btn bg-transparent"
              >
                <FiCalendar className="mr-2 h-4 w-4" />
                View Assignments
              </Link>

              <Link
                href="/pricing"
                className="w-full justify-start btn bg-transparent"
              >
                <IoMdTrendingUp className="mr-2 h-4 w-4" />
                Upgrade to Pro
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
