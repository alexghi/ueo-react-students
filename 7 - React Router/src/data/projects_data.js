export const projectsData = [
  {
    id: 1,
    name: "Project 1",
    description: "This is how the project works...",
  },
  {
    id: 2,
    name: "Tesla Project",
    description: "Tesla project...",
  },
  {
    id: 3,
    name: "Nasa project",
    description: "Nasa Project",
  },
  {
    id: 4,
    name: "Wizzard Project",
    description: "pam pam",
  },
];

export const getProjectWithId = (givenId) => {
  return projectsData.filter((val) => val.id === parseInt(givenId))[0];
};
