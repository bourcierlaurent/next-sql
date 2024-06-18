import { useState, useEffect } from "react";

type User = {
	id: number;
	name: string;
	email: string;
};

export default function Manage() {
	const [users, setUsers] = useState<User[]>([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch("/api/users");
			if (!response.ok) {
				throw new Error("Failed to fetch users");
			}
			const data: User[] = await response.json();
			setUsers(data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const addUser = async () => {
		try {
			const response = await fetch("/api/users/add", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email }),
			});

			if (!response.ok) {
				throw new Error("Failed to add user");
			}

			const data = await response.json();
			console.log(data);
			fetchUsers(); // Refresh the list
			setName("");
			setEmail("");
		} catch (error) {
			console.error("Error adding user:", error);
		}
	};

	return (
		<div>
			<h1>Manage Users</h1>
			<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<button onClick={addUser}>Add User</button>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.email})
					</li>
				))}
			</ul>
		</div>
	);
}
