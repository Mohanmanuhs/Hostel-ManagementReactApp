import api from "../api";
import { useEffect, useState } from "react";

export default function StaffHostelDetails({ hostelId }) {
    const [hostel, setHostel] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await api.get(`hostel/details/${hostelId}`);
                setHostel(response.data);
            } catch (err) {
                setError("Failed to load applications.");
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, []);

    return (

        <div className="min-h-screen bg-gray-900 text-white p-6">
            {loading ? (
                <p className="text-gray-400">Loading Details...</p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : hostel === null ? (
                <p className="text-gray-400">Hostel Details not found.</p>
            ) : (

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center">{hostel.name}</h1>
                    <p className="text-gray-400 text-center text-lg mt-2">{hostel.location}</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <span className="text-gray-300">Capacity</span>
                            <p className="text-2xl font-semibold">{hostel.capacity}</p>
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg">
                            <span className="text-gray-300">Empty Seats</span>
                            <p className="text-2xl font-semibold">{hostel.empty_seats}</p>
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg">
                            <span className="text-gray-300">Fees</span>
                            <p className="text-2xl font-semibold">₹{hostel.fees}</p>
                        </div>

                        {hostel.phone && (
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <span className="text-gray-300">Contact</span>
                                <p className="text-2xl font-semibold">{hostel.phone}</p>
                            </div>
                        )}
                    </div>
                </div>
            )
            }
        </div>
    )
}
