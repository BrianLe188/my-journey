export type Project = {
  id: string;
  name: string;
  thumbnail: string;
  key: string;
  description: string;
  link: string;
  status: string;
  techs: string[];
};

export type Timeline = {
  id: string;
  date: string;
  title: string;
  content: string | null;
};
