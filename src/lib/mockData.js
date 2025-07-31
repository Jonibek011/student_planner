// This file simulates a backend data service using in-memory data.
// In a real application, this would interact with a database.

export const mockUsers = [
  {
    id: "user-1",
    name: "Alice Smith",
    email: "alice@example.com",
    avatar_url: "https://api.dicebear.com/7.x/lorelei/svg?seed=Alice",
  },
  {
    id: "user-2",
    name: "Bob Johnson",
    email: "bob@example.com",
    avatar_url: "https://api.dicebear.com/7.x/lorelei/svg?seed=Bob",
  },
];

const dataStore = {
  subjects: [
    {
      id: "sub-1",
      name: "Matematika",
      description: "Algebra, Geometriya va Kalkulus asoslari.",
      assignments: [],
      study_sessions: [],
    },
    {
      id: "sub-2",
      name: "Fizika",
      description: "Mexanika, Termodinamika va Elektromagnetizm.",
      assignments: [],
      study_sessions: [],
    },
    {
      id: "sub-3",
      name: "Dasturlash",
      description: "Python va JavaScript asoslari.",
      assignments: [],
      study_sessions: [],
    },
  ],
  assignments: [
    {
      id: "assign-1",
      title: "Algebra uy vazifasi",
      description: "1-bobdagi barcha masalalarni yechish.",
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      subject_id: "sub-1",
      completed: false,
      study_sessions: [],
    },
    {
      id: "assign-2",
      title: "Fizika laboratoriyasi hisoboti",
      description: "Tajriba natijalarini tahlil qilish va hisobot tayyorlash.",
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      subject_id: "sub-2",
      completed: false,
      study_sessions: [],
    },
    {
      id: "assign-3",
      title: "Python loyihasi",
      description: "Kichik veb-ilova yaratish.",
      deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      subject_id: "sub-3",
      completed: false,
      study_sessions: [],
    },
    {
      id: "assign-4",
      title: "Matematika imtihoniga tayyorgarlik",
      description: "O'tgan yillar testlarini yechish.",
      deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
      subject_id: "sub-1",
      completed: true,
      study_sessions: [],
    },
  ],
  studySessions: [
    {
      id: "session-1",
      subject_id: "sub-1",
      assignment_id: "assign-1",
      start_time: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      duration_minutes: 60,
    },
    {
      id: "session-2",
      subject_id: "sub-3",
      assignment_id: "assign-3",
      start_time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(
        Date.now() - 1 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000
      ).toISOString(),
      duration_minutes: 90,
    },
    {
      id: "session-3",
      subject_id: "sub-1",
      assignment_id: null,
      start_time: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
      end_time: new Date(
        Date.now() + 1 * 24 * 60 * 60 * 1000 + 45 * 60 * 1000
      ).toISOString(),
      duration_minutes: 45,
    },
  ],
  goals: [
    {
      id: "goal-1",
      title: "GPA 4.0 ga erishish",
      description: "Barcha fanlardan a'lo baho olish.",
      due_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
      completed: false,
      progress: 75,
    },
    {
      id: "goal-2",
      title: "Yangi dasturlash tilini o'rganish",
      description: "Rust tilini o'rganish va kichik loyiha yaratish.",
      due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      completed: false,
      progress: 30,
    },
    {
      id: "goal-3",
      title: "Ilmiy maqola yozish",
      description: "Fizika bo'yicha ilmiy maqola tayyorlash.",
      due_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      completed: true,
      progress: 100,
    },
  ],
  learningResources: [
    {
      id: "learn-1",
      title: "Kalkulusga kirish",
      content: "Kalkulus differensial va integral hisobni o'z ichiga oladi...",
    },
    {
      id: "learn-2",
      title: "Python dasturlash asoslari",
      content:
        "Python - bu yuqori darajadagi, interpretatsiya qilinadigan dasturlash tili...",
    },
    {
      id: "learn-3",
      title: "Kvant mexanikasi",
      content:
        "Kvant mexanikasi atomlar va subatomik zarralar darajasida materiya va energiya xatti-harakatlarini o'rganadi...",
    },
  ],
};

// Populate relationships
dataStore.subjects.forEach((subject) => {
  subject.assignments = dataStore.assignments.filter(
    (a) => a.subject_id === subject.id
  );
  subject.study_sessions = dataStore.studySessions.filter(
    (s) => s.subject_id === subject.id
  );
});

dataStore.assignments.forEach((assignment) => {
  assignment.subject = dataStore.subjects.find(
    (s) => s.id === assignment.subject_id
  );
  assignment.study_sessions = dataStore.studySessions.filter(
    (s) => s.assignment_id === assignment.id
  );
});

dataStore.studySessions.forEach((session) => {
  session.subject = dataStore.subjects.find((s) => s.id === session.subject_id);
  session.assignment = dataStore.assignments.find(
    (a) => a.id === session.assignment_id
  );
});

const simulateDelay = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockDataService = {
  async getSubjects() {
    await simulateDelay();
    return dataStore.subjects;
  },

  async getSubjectById(id) {
    await simulateDelay();
    return dataStore.subjects.find((s) => s.id === id);
  },

  async addSubject(newSubject) {
    await simulateDelay();
    const id = `sub-${Date.now()}`;
    const subject = { id, ...newSubject, assignments: [], study_sessions: [] };
    dataStore.subjects.push(subject);
    return subject;
  },

  async getAssignments() {
    await simulateDelay();
    return dataStore.assignments.map((a) => ({
      ...a,
      subject: dataStore.subjects.find((s) => s.id === a.subject_id),
    }));
  },

  async getAssignmentById(id) {
    await simulateDelay();
    const assignment = dataStore.assignments.find((a) => a.id === id);
    if (assignment) {
      return {
        ...assignment,
        subject: dataStore.subjects.find((s) => s.id === assignment.subject_id),
        study_sessions: dataStore.studySessions.filter(
          (s) => s.assignment_id === assignment.id
        ),
      };
    }
    return undefined;
  },

  async addAssignment(newAssignment) {
    await simulateDelay();
    const id = `assign-${Date.now()}`;
    const assignment = { id, ...newAssignment, study_sessions: [] };
    dataStore.assignments.push(assignment);
    const subject = dataStore.subjects.find(
      (s) => s.id === newAssignment.subject_id
    );
    if (subject) {
      subject.assignments.push(assignment);
    }
    return assignment;
  },

  async getStudySessions() {
    await simulateDelay();
    return dataStore.studySessions.map((s) => ({
      ...s,
      subject: dataStore.subjects.find((sub) => sub.id === s.subject_id),
      assignment: dataStore.assignments.find((a) => a.id === s.assignment_id),
    }));
  },

  async addStudySession(newSession) {
    await simulateDelay();
    const id = `session-${Date.now()}`;
    const session = { id, ...newSession };
    dataStore.studySessions.push(session);
    const subject = dataStore.subjects.find(
      (s) => s.id === newSession.subject_id
    );
    if (subject) {
      subject.study_sessions.push(session);
    }
    if (newSession.assignment_id) {
      const assignment = dataStore.assignments.find(
        (a) => a.id === newSession.assignment_id
      );
      if (assignment) {
        assignment.study_sessions.push(session);
      }
    }
    return session;
  },

  async getGoals() {
    await simulateDelay();
    return dataStore.goals;
  },

  async addGoal(newGoal) {
    await simulateDelay();
    const id = `goal-${Date.now()}`;
    const goal = { id, ...newGoal };
    dataStore.goals.push(goal);
    return goal;
  },

  async getLearningResources() {
    await simulateDelay();
    return dataStore.learningResources;
  },

  async getLearningResourceById(id) {
    await simulateDelay();
    return dataStore.learningResources.find((r) => r.id === id);
  },

  async addLearningResource(newResource) {
    await simulateDelay();
    const id = `learn-${Date.now()}`;
    const resource = { id, ...newResource };
    dataStore.learningResources.push(resource);
    return resource;
  },

  async getDashboardStats() {
    await simulateDelay();

    const totalAssignments = dataStore.assignments.length;
    const completedAssignments = dataStore.assignments.filter(
      (a) => a.completed
    ).length;
    const totalStudyMinutes = dataStore.studySessions.reduce(
      (sum, session) => sum + session.duration_minutes,
      0
    );
    const totalStudyHours = Math.floor(totalStudyMinutes / 60);

    const userStatistics = {
      total_assignments: totalAssignments,
      completed_assignments: completedAssignments,
      total_study_hours: totalStudyHours,
      longest_streak: 14,
      streak_days: 7,
    };

    const recentAssignments = dataStore.assignments
      .filter((a) => !a.completed)
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
      .slice(0, 5)
      .map((a) => ({
        ...a,
        subject: dataStore.subjects.find((s) => s.id === a.subject_id),
      }));

    const upcomingSessions = dataStore.studySessions
      .filter((s) => new Date(s.start_time) > new Date())
      .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
      .slice(0, 5)
      .map((s) => ({
        ...s,
        subject: dataStore.subjects.find((sub) => sub.id === s.subject_id),
        assignment: dataStore.assignments.find((a) => a.id === s.assignment_id),
      }));

    const unreadNotifications = [
      {
        id: "notif-1",
        message: "Yangi topshiriq qo'shildi: Algebra uy vazifasi",
      },
      {
        id: "notif-2",
        message: "Fizika laboratoriyasi hisoboti muddati yaqinlashmoqda",
      },
    ];

    return {
      userStatistics,
      recentAssignments,
      upcomingSessions,
      unreadNotifications,
    };
  },
};
