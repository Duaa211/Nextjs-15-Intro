export const users = [
    {id: 1, name: 'John', email: 'john@example.com'},
    {id: 2, name: 'Doe', email: 'doe@example.com'},
    {id: 3, name: 'Smith', email: 'smith@example.com'},
]

export async function GET() {
    return Response.json(users)
}

export async function POST(request: Request) {
    const user = await request.json()
    const newUser = {id: users.length + 1, ...user}
    users.push(newUser)
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
}