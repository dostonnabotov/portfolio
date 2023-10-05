import type { ProjectProps, SkillProps } from "../types";
import projects from "./projects.json";
import skills from "./skills.json";

// export async function fetchBlogArticles(): Promise<PostProps[]> {
//   const response = await fetch(
//     "https://dev.to/api/articles?username=dostonnabotov"
//   );
//   const data = await response.json();
//   return data as PostProps[];
// }

export function fetchProjects(limit?: number): ProjectProps[] {
  return limit ? projects.slice(0, limit) : projects;
}

export function fetchSkills(): SkillProps[] {
  return skills;
}
