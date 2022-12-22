import { select } from "../dialogs";
import { listProjects } from "./projects";

export async function promptSelectProject({
	accountId,
}: {
	accountId: string;
}): Promise<string> {
	const projects = await listProjects({ accountId });

	return select(
		"Select a project:",
		projects.map((project) => ({
			label: project.name,
			value: project.name,
		})),
		0
	);
}
