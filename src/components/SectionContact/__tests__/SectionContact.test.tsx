import { render } from '@testing-library/react';
import React from 'react';
import { SectionContact } from '../';

describe('<SectionContact>', () => {
    it('renders the contact section with common data', () => {
        const mockprops = {
            email: 'github@benefiction.dev',
            phone: '344244',
            website: 'https://benefiction.dev',
        };

        const { getByText, queryByTitle } = render(
            <SectionContact basics={mockprops} />
        );

        Object.keys(mockprops).forEach((key) => {
            const element = getByText(mockprops[key]);
            expect(element).toBeInTheDocument();
        });

        const adressElement = queryByTitle('Location:');
        expect(adressElement).not.toBeInTheDocument();
    });

    it('renders the adress with postalCode', () => {
        const mockprops = {
            location: {
                address: 'street 5',
                postalCode: '23323',
                city: 'Munich',
                countryCode: 'GER',
                region: 'Bavaria',
            },
        };

        const { queryByText } = render(<SectionContact basics={mockprops} />);
        const { address, postalCode, city, countryCode, region } =
            mockprops.location;

        const adressEle = queryByText(address);
        const cityEle = queryByText(`${city} ${postalCode}`);
        const countryEle = queryByText(countryCode);
        const regionEle = queryByText(region);

        expect(adressEle).toBeInTheDocument();
        expect(cityEle).toBeInTheDocument();
        expect(countryEle).not.toBeInTheDocument();
        expect(regionEle).not.toBeInTheDocument();
    });

    it('renders the adress with countryCode as fallback for postalCode', () => {
        const mockprops = {
            location: {
                city: 'Munich',
                countryCode: 'GER',
                region: 'Bavaria',
            },
        };

        const { queryByText } = render(<SectionContact basics={mockprops} />);
        const { city, countryCode, region } = mockprops.location;

        const cityEle = queryByText(`${city}, ${countryCode}`);
        const regionEle = queryByText(region);

        expect(cityEle).toBeInTheDocument();
        expect(regionEle).not.toBeInTheDocument();
    });
});