export type ExperienceType = 'work' | 'education' | 'project';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: ExperienceType;
  technologies?: string[];
}
