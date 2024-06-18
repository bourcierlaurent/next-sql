"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Login() {
	const [host, setHost] = useState("localhost");
	const [database, setDatabase] = useState("");
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		fetch("/api/auth", {
			method: "POST",
			body: JSON.stringify({ host, database, user, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					localStorage.setItem("token", data.token);
					window.location.href = "/";
				} else {
					alert("Wrong credentials");
				}
			});
	};

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className="w-90 max-w-2xl min-h-screen mx-auto flex items-center justify-center">
				<div className="bg-white bg-opacity-5 p-8 rounded-lg shadow-lg w-full">
					<Image
						src="/images/mysql.png"
						alt="mysql svg"
						width={200}
						height={0}
						sizes="100vw"
						className="mx-auto mb-10 h-auto"
					/>
					<form onSubmit={handleLogin} className="space-y-6">
						<div>
							<label htmlFor="serveur" className="block text-sm font-medium">
								Serveur
							</label>
							<input
								type="text"
								id="host"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black bg-opacity-5 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="localhost"
								value={host}
								onChange={(e) => setHost(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium">
								Utilisateur
							</label>
							<input
								type="user"
								id="user"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black bg-opacity-5 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="root"
								value={user}
								onChange={(e) => setUser(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor="password" className="block text-sm font-medium">
								Password
							</label>
							<input
								type="password"
								id="password"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black bg-opacity-5 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor="database" className="block text-sm font-medium">
								Base de données
							</label>
							<input
								type="text"
								id="database"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black bg-opacity-5 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="database"
								value={database}
								onChange={(e) => setDatabase(e.target.value)}
							/>
						</div>
						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
