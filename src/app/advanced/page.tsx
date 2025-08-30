import AdvancedCounter from "@/components/shadcnui/AdvancedCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Advanced State App",
	description: "Advanced Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Advanced Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AdvancedCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
