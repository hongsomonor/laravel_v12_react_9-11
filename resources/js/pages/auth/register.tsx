import { useState } from 'react';
import bot_icon from '/public/build/images/recaptcha-icon.png';

const register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
    });
    const [isRobot, setIsRobot] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Registration submitted:', formData);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="flex w-[900px] flex-col gap-7 rounded-2xl bg-gray-100 px-2 py-4 shadow-md">
                <h1 className="mt-10 mb-4 text-center text-3xl font-bold">Create Your New Account</h1>
                <div className="mx-auto flex w-[90%] gap-4">
                    <div className="mx-auto flex w-[50%] flex-col gap-4">
                        <label htmlFor="fullName" className="font-bold">
                            Full Name
                        </label>
                        <input
                            className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                            type="text"
                            value={formData.fullName}
                            id="fullName"
                            onChange={handleInputChange}
                            name="fullName"
                            placeholder="Enter your fulll name"
                        />
                    </div>
                    <div className="mx-auto flex w-[50%] flex-col gap-4">
                        <label htmlFor="email" className="font-bold">
                            Email Address
                        </label>
                        <input
                            className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                            type="email"
                            value={formData.email}
                            id="email"
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="mx-auto flex w-[90%] gap-4">
                    <div className="mx-auto flex w-[50%] flex-col gap-4">
                        <label htmlFor="email" className="font-bold">
                            Phone Number
                        </label>
                        <input
                            className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                            type="text"
                            value={formData.phoneNumber}
                            id="phoneNumber"
                            onChange={handleInputChange}
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mx-auto flex w-[50%] flex-col gap-4">
                        <label htmlFor="email" className="font-bold">
                            Address
                        </label>
                        <input
                            className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                            type="text"
                            value={formData.address}
                            id="address"
                            onChange={handleInputChange}
                            name="address"
                            placeholder="Enter your address"
                        />
                    </div>
                </div>
                <div className="mx-auto flex w-[90%] flex-col gap-4">
                    <label htmlFor="email" className="font-bold">
                        Create Password
                    </label>
                    <input
                        className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                        type="password"
                        value={formData.password}
                        id="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mx-auto flex w-[90%] flex-col gap-4">
                    <label htmlFor="email" className="font-bold">
                        Confirm Password
                    </label>
                    <input
                        className="w-full rounded-md border-1 border-gray-300 bg-white px-3 py-4 outline-0"
                        type="password"
                        value={formData.confirmPassword}
                        id="confirmPassword"
                        onChange={handleInputChange}
                        name="confirmPassword"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="ml-[46px] flex w-[35%] items-center justify-between border border-gray-300 px-3 py-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="size-[30px]"
                            name="robot"
                            checked={!isRobot}
                            onChange={(e) => setIsRobot(!e.target.checked)}
                            id="robot"
                        />
                        <span>I'm not a robot</span>
                    </div>
                    <img src={bot_icon} className="w-[50px]" alt="" />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="mx-auto w-[90%] cursor-pointer rounded-lg bg-orange-500 p-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600"
                >
                    register
                </button>
                <div className="mx-auto mb-6 flex w-[90%] items-center justify-center gap-1">
                    <span>Already have an account?</span>
                    <a href="#" className="text-[17px] font-bold text-orange-400">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default register;
