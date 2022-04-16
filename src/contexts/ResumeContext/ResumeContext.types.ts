import type { ResumeJson } from '@/@types/resume';

export interface IResumeContext {
  setResumeJson: TypeSetResumeJson;
  resume?: ResumeJson;
}

export type TypeSetResumeJson = (resumeJson: ResumeJson) => void;
