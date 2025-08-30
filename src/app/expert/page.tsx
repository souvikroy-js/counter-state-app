import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import ExpertCounter from "@/components/shadcnui/ExpertCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert | Expert State App",
	description: "Expert Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Expert Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ExpertCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
