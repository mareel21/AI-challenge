// Fake data generated using common fictional names
// No real names, titles, or department names from the original leaderboard
const leaderboardData = [
    {
        id: 1,
        name: "Alex Johnson",
        title: "Senior Software Engineer",
        department: "Engineering",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        presentations: 17,
        reviews: 0,
        mentoring: 0,
        total: 536
    },
    {
        id: 2,
        name: "Morgan Davis",
        title: "Group Manager",
        department: "Operations",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
        presentations: 10,
        reviews: 0,
        mentoring: 0,
        total: 328
    },
    {
        id: 3,
        name: "Jordan Rivera",
        title: "Lead QA Engineer",
        department: "Quality Assurance",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
        presentations: 1,
        reviews: 7,
        mentoring: 0,
        total: 320
    },
    {
        id: 4,
        name: "Taylor Nakamura",
        title: "Lead QA Engineer",
        department: "Quality Assurance",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
        presentations: 1,
        reviews: 7,
        mentoring: 0,
        total: 320
    },
    {
        id: 5,
        name: "Casey Thompson",
        title: "Frontend Developer",
        department: "Engineering",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
        presentations: 8,
        reviews: 5,
        mentoring: 2,
        total: 295
    },
    {
        id: 6,
        name: "Riley Patel",
        title: "DevOps Engineer",
        department: "Infrastructure",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley",
        presentations: 5,
        reviews: 3,
        mentoring: 4,
        total: 270
    },
    {
        id: 7,
        name: "Quinn Martinez",
        title: "Product Designer",
        department: "Design",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quinn",
        presentations: 6,
        reviews: 2,
        mentoring: 1,
        total: 248
    },
    {
        id: 8,
        name: "Avery Chen",
        title: "Backend Developer",
        department: "Engineering",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Avery",
        presentations: 4,
        reviews: 6,
        mentoring: 0,
        total: 230
    },
    {
        id: 9,
        name: "Dakota Wilson",
        title: "Data Analyst",
        department: "Analytics",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dakota",
        presentations: 3,
        reviews: 4,
        mentoring: 2,
        total: 215
    },
    {
        id: 10,
        name: "Skyler Brooks",
        title: "Scrum Master",
        department: "Operations",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Skyler",
        presentations: 2,
        reviews: 3,
        mentoring: 5,
        total: 198
    },
    {
        id: 11,
        name: "Harper Lee",
        title: "Security Engineer",
        department: "Infrastructure",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harper",
        presentations: 3,
        reviews: 1,
        mentoring: 3,
        total: 185
    },
    {
        id: 12,
        name: "Reese Andersen",
        title: "UX Researcher",
        department: "Design",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reese",
        presentations: 2,
        reviews: 5,
        mentoring: 1,
        total: 172
    }
];

// Extract unique departments for filter
const departments = [...new Set(leaderboardData.map(item => item.department))];
