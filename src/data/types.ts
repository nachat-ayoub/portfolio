// * Projects Types :

const ProjectStatusKeys = {
  Started: null,
  'In Development': null,
  Completed: null,
};
export const ProjectStatus = Object.keys(ProjectStatusKeys);

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
  status: keyof typeof ProjectStatusKeys; // Add the project status field
}

export interface IProjectsFilter {
  id?: number;
  tags?: string[];
  title?: string;
  status?: IProject['status'];
}
