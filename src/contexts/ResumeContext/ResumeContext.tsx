import { createContext } from 'react';
import type { IResumeContext } from './ResumeContext.types';

const defaultValue: IResumeContext = {
    setResumeJson: null as any,
    resume: undefined,
};

export const ResumeContext = createContext<IResumeContext>(defaultValue);
