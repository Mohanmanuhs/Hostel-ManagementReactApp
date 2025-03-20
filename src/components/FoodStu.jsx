import { useState } from "react";

export default function ConfirmDinner() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed(true);
        console.log("Student confirmed for dinner"); // Replace with API call if needed
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
            <h1 className="text-3xl font-bold text-green-500 mb-4">Dinner Confirmation</h1>
            {!isConfirmed ? (
                <>
                    <p className="text-gray-400 mb-6">Click the button below to confirm your dinner.</p>
                    <button
                        onClick={handleConfirm}
                        className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                        Confirm Dinner
                    </button>
                    <p className="text-gray-300 text-lg mt-4 mb-6 italic">
                        "A warm meal is waiting for you! 🍽️ Confirm your dinner now."
                    </p>
                </>
            ) : (
                <p className="text-lg text-green-400 font-semibold italic">
                    ✅ You have successfully confirmed your dinner! Enjoy your meal! 🍽️
                </p>
            )}
        </div>
    );
}
