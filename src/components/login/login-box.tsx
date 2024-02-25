import Link from "next/link";

const LoginBox = () => {
  return (
    <div className="absolute z-50 w-full h-full flex justify-center items-center">
      <div className="w-10/12 lg:w-[500px] py-8 px-6 lg:px-10 backdrop-brightness-50 backdrop-blur-xl rounded-xl shadow-lg text-white flex flex-col gap-6">
        <div className="font-montserrat text-xl lg:text-3xl font-semibold">
          Welcome Back
        </div>
        <div className="font-poppins w-full flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <p className="text-white text-xs">Email</p>
            <input
              className="bg-transparent border-[1px] rounded text-sm p-2 border-neutral-300 focus:border-white text-neutral-300 focus:text-white outline-none"
              placeholder="Enter Email"
            />
          </div>

          <div className="w-full flex flex-col">
            <p className="text-white text-xs">Password</p>
            <input
              className="bg-transparent border-[1px] rounded text-sm p-2 border-neutral-300 focus:border-white text-neutral-300 focus:text-white outline-none"
              placeholder="Enter Password"
            />
          </div>
          <div className="rounded bg-blue-500 w-36 h-9 flex justify-center items-center">
            Login
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <hr className="grow" />
          <p className="font-poppins text-sm">or</p>
          <hr className="grow" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded bg-red-500 h-9 flex justify-center items-center shadow-md">
            Google Login
          </div>
          <div className="rounded bg-blue-500 h-9 flex justify-center items-center shadow-md">
            Facebook Login
          </div>
        </div>
        <div className="font-poppins text-xs">
          Dont have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
