function NotFoundPage() {
	return (
		<div className="flex flex-col h-screen items-center justify-center mx-auto max-w-4xl gap-4">
			<div className="text-center">
				<h1 className="text-8xl md:text-9xl  font-bold">404</h1>
				<h2 className="text-2xl md:text-4xl text-gray-400 font-semibold">Page Not Found</h2>
			</div>
			<p className="text-gray-500">
				The page you are looking for might have been removed had its name changed or is temporarily unavailable.
			</p>
			<a href="/" className="text-blue-500 link">
				Go to Home
			</a>
		</div>
	);
}

export default NotFoundPage;
