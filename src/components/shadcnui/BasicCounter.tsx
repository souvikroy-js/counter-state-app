"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const BasicCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value :
				<span className="text-center text-xl"> {count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>
				<Button
					onClick={plus}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
