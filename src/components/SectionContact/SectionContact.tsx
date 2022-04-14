import iconEmail from '@/assets/contact_email.svg';
import iconLocation from '@/assets/contact_location.svg';
import iconPhone from '@/assets/contact_phone.svg';
import iconWww from '@/assets/contact_www.svg';
import { ProfileList } from '@/components/ProfileList';
import { ResumeSection } from '@/components/ResumeSection';
import { SvgAsMask } from '@/components/SvgAsMask';
import React from 'react';
import style from './SectionContact.module.css';
import type { SectionContactProps } from './SectionContact.types';

export const SectionContact: React.FC<SectionContactProps> = ({ basics }) => {
  return (
    <ResumeSection title={'Contact'}>
      <address>
        <ul>
          {basics.email && (
            <li className={style.detail}>
              <SvgAsMask styleClass={style.icon} src={iconEmail} />
              <a className={style.email} href={`mailto:${basics.email}`}>
                {basics.email}
              </a>
            </li>
          )}
          {basics.phone && (
            <li className={style.detail}>
              <SvgAsMask styleClass={style.icon} src={iconPhone} />
              <a href={`tel:${basics.phone}`}>{basics.phone}</a>
            </li>
          )}
          {basics.website && (
            <li className={style.detail}>
              <SvgAsMask styleClass={style.icon} src={iconWww} />
              <a href={basics.website}>{basics.website}</a>
            </li>
          )}

          {basics.location?.city && (
            <li className={style.detail}>
              <SvgAsMask styleClass={style.icon} src={iconLocation} />
              <span>
                {basics.location.address && (
                  <span className={style.address_detail}>{basics.location.address}</span>
                )}

                <span className={style.address_detail}>
                  {basics.location.city}
                  {basics.location.postalCode
                    ? ` ${basics.location.postalCode}`
                    : `${basics.location.countryCode && `, ${basics.location.countryCode}`}`}
                </span>
              </span>
            </li>
          )}
        </ul>
      </address>
      {basics.profiles && <ProfileList profiles={basics.profiles} />}
    </ResumeSection>
  );
};
