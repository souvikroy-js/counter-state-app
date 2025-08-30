"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const AdvancedCounter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		setCount(count + 1);
	};

	const minusOne = () => {
		setCount(count - 1);
	};

	const plusTen = () => {
		setCount(count + 10);
	};

	const minusTen = () => {
		setCount(count - 10);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					className="cursor-pointer">
					<CirclePlus /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default AdvancedCounter;
