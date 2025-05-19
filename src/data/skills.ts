export interface Skill {
  name: string;
  level: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Vue.js", level: 58 },
  { name: "Tailwind CSS", level: 75 },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 82 },
  { name: "Golang", level: 75 },
  { name: "SQL", level: 68 },
  { name: "Linux", level: 90 },
];

export const tools: Tool[] = [
  { name: "Git", icon: "github" },
  { name: "CLI", icon: "CLI" },
  { name: "MySQL", icon: "MySQL"},
  { name: "Vitest", icon: "Vitest"},
];
