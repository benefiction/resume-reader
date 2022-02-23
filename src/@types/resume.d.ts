export declare type ResumeJson = {
    basics: ResumeBasics;
    work?: ResumeWork[];
    volunteer?: ResumeVolunteer[];
    education?: ResumeEducation[];
    awards?: ResumeAward[];
    publications?: ResumePublication[];
    skills?: ResumeSkill[];
    languages?: ResumeLanguage[];
    interests?: ResumeInterest[];
    references?: ResumeReference[];
    projects?: ResumeProject[];
};

// Language: typescript
// Path: types/resume.d.ts
export declare type ResumeBasics = {
    name: string;
    label?: string;
    picture?: string;
    email?: string;
    phone?: string;
    website?: string;
    summary?: string;
    location?: ResumeLocation;
    profiles?: ResumeProfile[];
};

// Language: typescript
// Path: types/resume.d.ts
export declare type ResumeLocation = {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
};

// Language: typescript
// Path: types/resume.d.ts
export declare type ResumeProfile = {
    network: string;
    username: string;
    url: string;
};

// Language: typescript
// Path: types/resume.d.ts
export declare type ResumeWork = {
    name: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
};

export declare type ResumeVolunteer = {};
export declare type ResumeEducation = {};
export declare type ResumeAward = {};
export declare type ResumePublication = {};

export declare type ResumeSkill = {
    name: string;
    level: string;
    keywords: string[];
};
export declare type ResumeLanguage = {
    language: string;
    fluency: string;
};
export declare type ResumeInterest = {
    name: string;
    keywords: string[];
};

export declare type ResumeReference = {
    name: string;
    reference: string;
};

export declare type ResumeProject = {
    name: string;
    description: string;
    highlights: string[];
    keywords: string[];
    startDate: string;
    endDate: string;
    url: string;
    roles: string[];
    entity: string;
    type: string;
};
