export interface TalentExperiences {
  companyName: string;
  undertaking: string;
  startDateAt: string;
  endDateAt: string;
  isCurrentlyWorking: boolean;
  yearsOfExperience: number;
  id: number;
}

export interface TalentProjects {
  id: number;
  projectName: string;
  projectOwner: string;
  description: string;
  relatedLink: string;
  startDateAt: string;
  endDateAt: string;
}

export interface TalentDetails {
  id: number;
  userId: number;
  userName: string;
  jobTitles: string[];
  skills: string[];
  experiences: TalentExperiences[];
  projects: TalentProjects[];
  files: {
    name: string;
    baseUrl: string;
  }[];
  urls: string[];
  introduction: string;
  user: {
    username: string;
    phoneNumber: string;
  };
}

export interface TalentContacts {
  id: number;
  createdAt: string;
  fromUsername: string;
  fromUserEmail: string;
  fromUserPhoneNumber: string;
  message: string;
}