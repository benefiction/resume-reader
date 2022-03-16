export type TimelineEntry = {
  name: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type TimelineProps = {
  timelineEntrys: TimelineEntry[];
};
