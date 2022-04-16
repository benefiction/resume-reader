import { ResumeJson } from '@/@types/resume';

export const mockResumeJsonMax: ResumeJson = {
  basics: {
    name: 'Benedikt Villwock',
    label: 'Software Engineer',
    image:
      'https://de.gravatar.com/userimage/131062096/0070a8c4988987e7e90adeadbe95f53a.jpg?size=300',
  },
  work: [
    {
      name: 'company name',
      position: 'position',
      website: 'https://www.benefiction.def',
      startDate: 'some date',
      endDate: 'other date',
      summary: 'descriptive summary',
      highlights: ['highlight1', 'highlight2'],
    },
    {
      name: 'company name1',
      position: 'position1',
      website: 'https://benefiction.github.io/',
      startDate: 'some date1',
      endDate: 'other date1',
      summary: 'descriptive summary1',
      highlights: ['highlight11', 'highlight12'],
    },
  ],
  awards: [
    {
      title: 'award1',
      date: 'some date',
      awarder: 'awarder',
      summary: 'descriptive summary1',
    },
    {
      title: 'award2',
      date: 'some date',
      awarder: 'awarder',
      summary: 'descriptive summary2',
    },
  ],
};
