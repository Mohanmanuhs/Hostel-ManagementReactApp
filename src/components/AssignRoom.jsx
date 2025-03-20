import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/api";

export default function RoomAssignment() {
    const [rooms, setRooms] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [roomSearch, setRoomSearch] = useState("");
    const [studentSearch, setStudentSearch] = useState("");

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await api.get("/room/byFloor/1");
                setRooms(response.data);
            } catch (err) {
                console.log("Failed to load applications.");
            }
        };
        const fetchStudents = async () => {
            try {
                const response = await api.get("room/getStudents/withoutRoom");
                setStudents(response.data);
            } catch (err) {
                console.log("Failed to load applications.");
            }
        };

        fetchRooms();
        fetchStudents();
    }, []);

    return (
        <div className="min-h-screen flex justify-center bg-gray-900 text-white">
        <div className="p-6 grid grid-cols-2 gap-6">
            {/* Left Side - Rooms */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Rooms</h1>
                <Input
                    type="text"
                    placeholder="Search rooms..."
                    value={roomSearch}
                    onChange={(e) => setRoomSearch(e.target.value)}
                    className="mb-2"
                />
                <div className="space-y-2">
                    {rooms.filter(room => room.roomNo.toString().includes(roomSearch)).map((room) => (
                        <Card
                            key={room.roomId}
                            className={`p-4 cursor-pointer hover:shadow-lg transition-all ${selectedRoom?.roomId === room.roomId ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => setSelectedRoom(room)}
                        >
                            <p className="text-lg font-semibold">Room {room.roomNo}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right Side - Students */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Students</h1>
                <Input
                    type="text"
                    placeholder="Search students..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="mb-2"
                />
                <div className="space-y-2">
                {students.filter(student => student.studentName.toLowerCase().includes(studentSearch.toLowerCase())).map((student) => (
                        <Card
                            key={student.studentId}
                            className={`p-4 cursor-pointer hover:shadow-lg transition-all ${selectedStudent?.studentId === student.studentId ? 'border-2 border-green-500' : ''}`}
                            onClick={() => setSelectedStudent(student)}
                        >
                            <p className="text-lg font-semibold">{student.studentName}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Assign Button */}
            <div className="col-span-2 flex justify-center mt-4">
                <Button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    disabled={!selectedRoom || !selectedStudent}
                    onClick={() => console.log("Assign", selectedStudent, "to", selectedRoom)}
                >
                    Assign
                </Button>
            </div>
        </div>
        </div>
    );
}