// export interface PostProps {
//   title: string;
//   url: string;
//   cover_image: string;
//   created_at: Date;
//   edited_at: Date;
// }

export interface ProjectProps {
  title: string;
  image: string;
  github_url: string;
  site_url: string;
  tags: string[];
}

export interface SkillProps {
  name: string;
  icon: string;
}
