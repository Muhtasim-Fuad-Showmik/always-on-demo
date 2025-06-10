"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
			<div className="flex items-center gap-2">
				{theme === 'light' && (
					<Image
						src="/logo-labelled.png"
						alt="Logo"
						width={243}
						height={32}
					/>
				)}
				{theme !== 'light' && (
					<Image
						src="/logo-labelled-white.png"
						alt="Logo"
						width={243}
						height={32}
					/>
				)}
			</div>
			<div className="flex items-center justify-between space-x-4">
				<ModeToggle />
				<Button className="w-24 md:w-32" size="lg">Login</Button>
			</div>
		</nav>
	);
};