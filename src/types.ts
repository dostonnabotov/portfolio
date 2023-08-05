export interface PostProps {
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  cover_image: string;
  reading_time_minutes: number;
  created_at: Date;
  edited_at: Date;
  comments_count: number;
  public_reactions_count: number;
}

export interface ProjectProps {
  title: string;
  image: string;
  github_url: string;
  site_url: string;
  skills: string[];
}
