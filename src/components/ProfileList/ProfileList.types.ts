export type ProfileListEntry = {
  network: string;
  username: string;
  url: string;
};

export interface ProfileListEntryProps {
  profile: ProfileListEntry;
}

export interface ProfileListProps {
  profiles: ProfileListEntry[];
}
