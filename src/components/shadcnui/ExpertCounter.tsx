"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		if (count <= 99) {
			setCount(count + 1);
		}
	};

	const minusOne = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count >= 10) {
			setCount(count - 10);
		}
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					disabled={count < 1}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					disabled={count > 99}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					disabled={count < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					disabled={count > 90}
					className="cursor-pointer">
					<CirclePlus /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounter;
