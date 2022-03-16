import React from 'react';
import style from './Timeline.module.css';
import type { TimelineProps } from './Timeline.types';

export const Timeline: React.FC<TimelineProps> = ({ timelineEntrys }) => {
  return (
    <dl className={style.situation_list}>
      {timelineEntrys.map((entry, index) => (
        <React.Fragment key={index}>
          <dt className={style.situation_title}>
            <p className={style.period}>
              <time dateTime={entry.startDate}>{entry.startDate}</time> -
              <time dateTime={entry.endDate}>{entry.endDate}</time>
            </p>
            <strong className={style.position}>{entry.position}</strong>
            <strong className={style.company}>{entry.name}</strong>
          </dt>
          <dd className={style.situation_detail}>
            <p className={style.description}>{entry.summary}</p>
            <ul className={style.highlights}>
              {entry.highlights.map((highlight, index) => (
                <li className={style.highlight} key={index}>
                  {highlight}
                </li>
              ))}
            </ul>
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
