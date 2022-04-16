export type SectionContactProps = {
  basics: {
    email?: string;
    phone?: string;
    website?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
    };
    profiles?: {
      network: string;
      username: string;
      url: string;
    }[];
  };
};
