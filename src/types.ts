export interface Project {
  title: string;
  description: string;
  tech: { name: string }[];
  version: string;
  size: string;
  features: string[];
  technicalDetails: {
    platform: string;
    requirements: string;
    language: string;
    ram: string;
    cpu: string;
    internet?: string;
  };
  download: string;
  sourceCode: string;
}