import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MySQL management",
	description: "Manage your MySQL database",
	keywords: ["MySQL", "database", "management"],
	authors: { name: "A2B", url: "https://agences2b.com/" },
	robots: "index, follow",
	icons: [
		{
			url: "/favicon/apple-touch-icon.png",
			sizes: "180x180",
			type: "image/png",
			rel: "apple-touch-icon",
		},
		{
			url: "/favicon/favicon-32x32.png",
			sizes: "32x32",
			type: "image/png",
			rel: "icon",
		},
		{
			url: "/favicon/favicon-16x16.png",
			sizes: "16x16",
			type: "image/png",
			rel: "icon",
		},
		{
			url: "/favicon/favicon.ico",
			sizes: "16x16",
			type: "image/x-icon",
			rel: "shortcut icon",
		},
	],
	manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" data-theme="business">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#272A36" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
