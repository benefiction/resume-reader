import { jestMockedComponent } from '@/mocks/jestMockComponent';
import { MockComponent } from '@/mocks/MockComponent';
import { render } from '@testing-library/react';
import React from 'react';
import { ResumeSection } from '../';

const mockComponentTitle = 'BASICS';
const mockComponentText = 'Test Component';

const mockResumeSectionHeaderComponent =
    jestMockedComponent(mockComponentTitle);

jest.mock('@/components/ResumeSectionHeader', () => {
    return {
        ResumeSectionHeader: (props: any) =>
            mockResumeSectionHeaderComponent(props),
    };
});

describe('<ResumeSection>', () => {
    it('renders the child/conntent', () => {
        const { getByText } = render(
            <ResumeSection title={mockComponentTitle}>
                <MockComponent contentString={mockComponentText} />
            </ResumeSection>
        );

        const componentText = getByText(mockComponentText);
        expect(document.body.contains(componentText));
    });

    it('it contains a headline and the headline gets the right params', () => {
        const { getByText } = render(
            <ResumeSection title={mockComponentTitle}></ResumeSection>
        );
        expect(mockResumeSectionHeaderComponent).toBeCalledWith({
            title: mockComponentTitle,
        });
        const sectionHeadline = getByText(mockComponentTitle);
        expect(document.body.contains(sectionHeadline));
    });
});
