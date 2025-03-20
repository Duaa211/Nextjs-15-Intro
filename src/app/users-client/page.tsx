"use client";
import {useEffect, useState} from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users");
                const users = await response.json();
                setUsers(users);
            } catch (error) {
                setError("Failed to fetch users");
                if (error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Users</h1>
            <ul className="space-y-4 p-4">
                {users.map((user: User) => (
                    <li key={user.id} className="bg-gray-100 p-4 rounded-md shadow-sm text-gray-800">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}