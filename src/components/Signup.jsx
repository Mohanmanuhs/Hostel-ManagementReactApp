import { useState } from "react";
import api from "../api";


const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        address: "",
        password: "",
        phone: "",
        role: "",
        position: "WARDEN",
    });

    const roles = ["STUDENT", "STAFF"];
    const positions = ["WARDEN", "MESS_WORKER"];

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.post("/user/register", user);
          alert("User created successfully!");
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };

    return (
        <section className="dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold  dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium  dark:text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label for="address" className="block mb-2 text-sm font-medium  dark:text-white">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={user.address}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium  dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                        minLength={6}
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label for="phone" className="block mb-2 text-sm font-medium  dark:text-white">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleChange}
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label for="role" className="block mb-2 text-sm font-medium  dark:text-white">Role</label>
                                    <select
                                        name="role"
                                        value={user.role}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select Role</option>
                                        {roles.map((role) => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                </div>
                                {user.role === "STAFF" && (
                                    <div>
                                        <label for="position" className="block mb-2 text-sm font-medium  dark:text-white">Position</label>
                                        <select
                                            name="position"
                                            value={user.position}
                                            onChange={handleChange}
                                            required
                                            className="bg-gray-750 border border-gray-300  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option value="">Select Position</option>
                                            {positions.map((pos) => (
                                                <option key={pos} value={pos}>{pos}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                            >
                                Register
                            </button>
                            <p className="text-sm font-light text-gray-100">
                                    Already have account? <a href="#" className="font-medium hover:underline dark:text-blue-500"> Login</a>
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Signup;
