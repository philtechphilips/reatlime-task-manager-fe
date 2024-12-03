import Table from "../components/dashboard/home/Table";
export const BarChartData = {
  chartData: [
    {
      period: "Monday",
      avg_points: 5,
    },
    {
      period: "Tuesday",
      avg_points: 0,
    },
    {
      period: "Wednesday",
      avg_points: 6,
    },
    {
      period: "Thursday",
      avg_points: 0,
    },
    {
      period: "Friday",
      avg_points: 0,
    },
    {
      period: "Saturday",
      avg_points: 0,
    },
    {
      period: "Sunday",
      avg_points: 0,
    },
  ],
  totalPoints: 11,
};

export const TableData = [
  {
    task: "Create a NextJs Dashboard Template",
    assignee: "Pelumi Isola",
    dueDate: "25-11-2024",
    notes: "The dashboard should have mock data",
  },
  {
    task: "Implement User Authentication",
    assignee: "Chinelo Okafor",
    dueDate: "30-11-2024",
    notes: "Include Google and email/password login options",
  },
  {
    task: "Design a Landing Page",
    assignee: "Ahmed Musa",
    dueDate: "05-12-2024",
    notes: "Ensure mobile responsiveness and SEO optimization",
  },
  {
    task: "Set Up Database Schema",
    assignee: "Fola Adebayo",
    dueDate: "28-11-2024",
    notes: "Use MSSQL with proper relationships",
  },
  {
    task: "Develop Notification System",
    assignee: "Ifeanyi Okeke",
    dueDate: "10-12-2024",
    notes: "Add email and in-app notifications",
  },
  {
    task: "Integrate Payment Gateway",
    assignee: "Zainab Aliyu",
    dueDate: "15-12-2024",
    notes: "Use Stripe for processing payments",
  },
  {
    task: "Conduct Code Review",
    assignee: "Bola Johnson",
    dueDate: "20-12-2024",
    notes: "Review all pull requests and document issues",
  },
  {
    task: "Optimize Application Performance",
    assignee: "Taiwo Adeyemi",
    dueDate: "12-12-2024",
    notes: "Focus on reducing load time and memory usage",
  },
  {
    task: "Write Unit Tests",
    assignee: "Mary Eze",
    dueDate: "18-12-2024",
    notes: "Achieve at least 80% code coverage",
  },
  {
    task: "Prepare Deployment Scripts",
    assignee: "Emeka Chukwu",
    dueDate: "22-12-2024",
    notes: "Automate deployment to staging and production",
  },
];

export const dataSource = {
  cardData: [
    {
      Id: "Task1",
      Title: "Task - 1",
      Status: "Open",
      Assignee: "Alice",
      Priority: "High",
      Summary: "Analyze the new requirements gathered from the customer.",
      Tags: "Analysis,Requirements",
    },
    {
      Id: "Task2",
      Title: "Task - 2",
      Status: "InProgress",
      Assignee: "Bob",
      Priority: "Normal",
      Summary: "Improve application performance.",
      Tags: "Performance,Improvement",
    },
    {
      Id: "Task3",
      Title: "Task - 3",
      Status: "Review",
      Assignee: "Charlie",
      Priority: "Low",
      Summary: "Create unit tests for the newly implemented features.",
      Tags: "Testing,UnitTests",
    },
    {
      Id: "Task4",
      Title: "Task - 4",
      Status: "Done",
      Assignee: "David",
      Priority: "Critical",
      Summary: "Fix the bugs reported during user acceptance testing.",
      Tags: "Bugs,Fixes",
    },
    {
      Id: "Task5",
      Title: "Task - 5",
      Status: "Open",
      Assignee: "Emma",
      Priority: "High",
      Summary: "Design the UI for the new feature.",
      Tags: "UI,Design",
    },
    {
      Id: "Task6",
      Title: "Task - 6",
      Status: "InProgress",
      Assignee: "Frank",
      Priority: "Normal",
      Summary: "Integrate the payment gateway.",
      Tags: "Payment,Integration",
    },
    {
      Id: "Task7",
      Title: "Task - 7",
      Status: "Review",
      Assignee: "Grace",
      Priority: "Low",
      Summary: "Prepare documentation for the release.",
      Tags: "Documentation,Release",
    },
    {
      Id: "Task8",
      Title: "Task - 8",
      Status: "Done",
      Assignee: "Henry",
      Priority: "Critical",
      Summary: "Deploy the application to the production environment.",
      Tags: "Deployment,Production",
    },
  ],
};
