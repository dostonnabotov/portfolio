import type { PostProps, ProjectProps } from "../types";
import projects from "./projects.json";

export async function fetchBlogArticles(): Promise<PostProps[]> {
  const response = await fetch(
    "https://dev.to/api/articles?username=dostonnabotov"
  );
  const data = await response.json();
  return data as PostProps[];
}

export function fetchProjects(): ProjectProps[] {
  return projects;
}
