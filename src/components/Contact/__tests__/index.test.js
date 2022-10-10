import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
    });

    it('Matches snapshot', () => {
        const { asFragment } = render(<Contact 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
            expect(asFragment).toMatchSnapshot();
    });
});