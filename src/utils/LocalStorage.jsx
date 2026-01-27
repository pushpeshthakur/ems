const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@company.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        title: "Complete UI Design",
        description: "Design dashboard UI using HTML & CSS",
        date: "2026-01-20",
        category: "Design",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-18",
        category: "Bug Fix",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Update Resume",
        description: "Add latest projects to resume",
        date: "2026-01-15",
        category: "Personal",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    name: "Neha Verma",
    email: "neha@company.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        title: "Create Login Page",
        description: "Develop login page using React",
        date: "2026-01-22",
        category: "Frontend",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate login API",
        date: "2026-01-19",
        category: "Backend",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Prepare project documentation",
        date: "2026-01-16",
        category: "Documentation",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      },
      {
        title: "Code Review",
        description: "Review teammate’s pull request",
        date: "2026-01-21",
        category: "Review",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    name: "Rohit Singh",
    email: "rohit@company.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        title: "Setup MongoDB",
        description: "Configure MongoDB database",
        date: "2026-01-17",
        category: "Database",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Create API Endpoints",
        description: "Develop CRUD APIs",
        date: "2026-01-22",
        category: "Backend",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve DB query performance",
        date: "2026-01-18",
        category: "Optimization",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Priya Patel",
    email: "priya@company.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Create PPT for client meeting",
        date: "2026-01-21",
        category: "Presentation",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Client Feedback Analysis",
        description: "Analyze feedback from last meeting",
        date: "2026-01-19",
        category: "Analysis",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Email Follow-up",
        description: "Send follow-up emails to clients",
        date: "2026-01-20",
        category: "Communication",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Report Submission",
        description: "Submit weekly progress report",
        date: "2026-01-16",
        category: "Report",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    name: "Karan Mehta",
    email: "karan@company.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        title: "Testing Application",
        description: "Perform unit testing",
        date: "2026-01-22",
        category: "Testing",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Bug Reporting",
        description: "Report bugs in Jira",
        date: "2026-01-19",
        category: "QA",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Automation Script",
        description: "Write test automation script",
        date: "2026-01-18",
        category: "Automation",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  }
];


const admin = [{
    "id": 101,
    "name": "Admin User",
    "email": "admin@company.com",
    "role": "admin",
    "password": "123"
}
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin);
}
    