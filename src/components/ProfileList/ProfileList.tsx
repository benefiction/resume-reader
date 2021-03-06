import { SvgAsMask } from '@/components/SvgAsMask';
import { getProfileIcon } from '@/utils/profileIcoMatcher';
import React from 'react';
import style from './ProfileList.module.css';
import type { ProfileListProps } from './ProfileList.types';

export const ProfileList: React.FC<ProfileListProps> = ({ profiles }) => {
  return (
    <ul className={style.profile_list}>
      {profiles.map((profile) => {
        const profileIconSrc = getProfileIcon(profile.network);
        const { network, username, url } = profile;
        return (
          profileIconSrc && (
            <li key={profile.network} className={style.profile}>
              <a className={style.profile_link} href={url}>
                <SvgAsMask styleClass={style.icon} src={profileIconSrc} title={network} />
                <span>{username}</span>
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
};
