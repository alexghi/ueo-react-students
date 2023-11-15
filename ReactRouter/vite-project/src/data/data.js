export const dashboardsData = [
  {
    id: 1,
    name: "Task 1",
    description: "Description for Task 1...",
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description for Task 2...",
  },
  {
    id: 3,
    name: "Task 3",
    description: "Description for Task 3...",
  },
  {
    id: 4,
    name: "Task 4",
    description: "Description for Task 4...",
  },
  {
    id: 5,
    name: "Task 5",
    description: "Description for Task 5...",
  },
];

export const getDashboardWithId = (givenId) => {
  return dashboardsData.filter((val) => val.id === parseInt(givenId))[0];
};
