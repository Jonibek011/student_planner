import { InputForm } from "../../components";
import { Form } from "react-router-dom";
import { PiGoogleChromeLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border   my-auto  p-6 border-gray-300 max-w-[446px] w-[446px] mx-auto rounded-xl ">
        <h2 className="text-2xl font-bold text-center text-[#020817]">
          Sign in
        </h2>
        <p className="text-center text-[#64748B] mt-1 mb-6 text-sm">
          Enter your information to get start with StuudyFlow
        </p>
        <button className="w-full border py-2 text-center flex justify-center gap-4 rounded-lg hover:bg-gray-100">
          <span>
            <PiGoogleChromeLogoBold />
          </span>
          <span className="text-sm">Continue with Google</span>
        </button>

        <div className="relative mt-5">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        <Form method="post" className="mt-5 flex flex-col gap-5">
          <InputForm
            type="email"
            name="email"
            placeholder="Enter your email"
            label="Email"
          />

          <InputForm
            className=""
            type="password"
            name="password"
            placeholder="Create your password"
            label="Password"
          />

          <button className="btn font-sans bg-blue-600 hover:bg-blue-500 text-white">
            Sign in
          </button>
        </Form>

        <div className="text-center mt-4 font-sans font-medium">
          Don't you have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
