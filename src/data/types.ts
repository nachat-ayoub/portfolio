// * Projects Types :

export const ProjectStatusKeys = {
  Started: 'bg-blue-600',
  'In Development': 'bg-orange-600',
  Completed: 'bg-green-600',
  'Not Working': 'bg-red-600',
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
  issue?: string | null;
}

export interface IProjectsFilter {
  id?: number;
  tags?: string[];
  title?: string;
  status?: IProject['status'];
}
