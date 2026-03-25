export interface HealthCheck {
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
}

// --- AUTH TYPES ---

export interface AuthStatus {
  loggedIn: boolean;
  sessionId?: string;
}

export interface LogoutResponse {
  success: boolean;
}

export interface ErrorResponse {
  error: string;
}

// --- CLASSROOM TYPES ---

export interface Course {
  id: string;
  name: string;
  section?: string;
  descriptionHeading?: string;
}

export interface CourseWork {
  id: string;
  title: string;
  description?: string;
  dueDate?: {
    year: number;
    month: number;
    day: number;
  };
  maxPoints?: number;

  materials?: {
    driveFile?: { driveFile: { id: string; title: string; alternateLink: string } };
    youtubeVideo?: { id: string; title: string; alternateLink: string };
    link?: { url: string; title: string };
    form?: { formUrl: string; title: string };
  }[];
}

export type SubmissionAttachmentItem = {
  driveFile?: { id: string; title: string; alternateLink: string };
  link?: { url: string; title: string };
  form?: { formUrl: string; title: string; responseUrl?: string };
  youtubeVideo?: { id: string; title: string; alternateLink: string };
};

export interface Submission {
  id: string;
  courseWorkId: string;
  state: string;
  late?: boolean;

  assignedGrade?: number;
  draftGrade?: number;

  assignmentSubmission?: {
    attachments?: SubmissionAttachmentItem[];
  };

  shortAnswerSubmission?: {
    answer: string;
  };
}

export interface CourseWorkWithSubmission {
  courseWork: CourseWork;
  submission: Submission | null;
}