// * Projects Types :
export interface ILiveDemo {
  url: string;
}

export interface ITeamMember {
  name: string;
  role: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  tags: string[];
  image: string;
  githubRepo: string | null;
  liveDemo: ILiveDemo | null;
  startDate: string;
  endDate: string;
  teamMembers: ITeamMember[];
  status: 'Started' | 'In Development' | 'Completed'; // Add the project status field
}

export interface IProjectsFilter {
  id?: number;
  technologies?: string[];
  tags?: string[];
  title?: string;
  teamMember?: string;
  status?: IProject['status'];
}
