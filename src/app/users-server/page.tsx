type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function usersServer() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    const users = await response.json();

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