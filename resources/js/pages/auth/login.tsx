import fb_icon from '/public/build/images/fb-icon.png';
import google_icon from '/public/build/images/google-icon.png';

export default function Login() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="flex w-[700px] flex-col gap-8 rounded-2xl bg-gray-100 px-2 py-4 shadow-md">
                <h1 className="mt-10 mb-4 text-center text-3xl font-bold">Welcome Back! Please login</h1>
                <div className="mx-auto flex w-[90%] flex-col gap-4">
                    <label htmlFor="email" className="font-bold">
                        Email Address
                    </label>
                    <input
                        className="w-full rounded-md border-1 border-gray-400 bg-white px-3 py-4 outline-0"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mx-auto flex w-[90%] flex-col gap-4">
                    <label htmlFor="email" className="font-bold">
                        Your Password
                    </label>
                    <input
                        className="w-full rounded-md border-1 border-gray-400 bg-white px-3 py-4 outline-0"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mx-auto flex w-[90%] justify-between">
                    <div className="flex gap-3">
                        <input type="checkbox" name="" id="" />
                        <span className="font-bold">Remember me</span>
                    </div>
                    <a href="#" className="font-bold text-orange-400">
                        Forgot password?
                    </a>
                </div>
                <button className="mx-auto w-[90%] cursor-pointer rounded-lg bg-orange-500 p-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600">
                    Login
                </button>
                <span className="text-center font-bold">Or</span>
                <div className="mx-auto flex w-[90%] flex-col gap-2">
                    <a
                        href="#"
                        className="group mx-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-1 border-gray-400 bg-white p-4 font-bold text-white transition-all duration-300 hover:border-orange-600"
                    >
                        <img src={google_icon} className="w-[25px]" alt="" />
                        <span className="text-black transition-all duration-300 group-hover:text-orange-500">Login With Google</span>
                    </a>
                    <a
                        href="#"
                        className="group mx-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-1 border-gray-400 bg-white p-4 font-bold text-white transition-all duration-300 hover:border-orange-600"
                    >
                        <img src={fb_icon} className="w-[25px]" alt="" />
                        <span className="text-black transition-all duration-300 group-hover:text-orange-500">Login With Facebook</span>
                    </a>
                </div>
                <div className="mx-auto mb-6 flex w-[90%] items-center justify-center gap-1">
                    <span>Don't have an account?</span>
                    <a href="#" className="font-bold text-orange-400">
                        Create New Account
                    </a>
                </div>
            </div>
        </div>
    );
}
