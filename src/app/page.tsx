"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("Loading...");
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("/api/home")
            .then(response => response.json())
            .then(data => {
                setTeam(data.team);
                setMessage(data.message);
            })
            .catch(() => setMessage("Failed to load data"));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <h1 className="text-4xl font-bold mb-6 animate-bounce">{message}</h1>
            <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Team</h2>
                <ul className="space-y-2">
                    {team.length > 0 ? (
                        team.map((person, index) => (
                            <li
                                key={index}
                                className="p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
                            >
                                {person}
                            </li>
                        ))
                    ) : (
                        <li>No team found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
