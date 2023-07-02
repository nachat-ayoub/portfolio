// * Projects Types :

export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubRepo: string | null;
  liveDemo: string | null;
  startDate: string;
  endDate: string;
  status: 'Started' | 'In Development' | 'Completed'; // Add the project status field
}

export interface IProjectsFilter {
  id?: number;
  tags?: string[];
  title?: string;
  status?: IProject['status'];
}
