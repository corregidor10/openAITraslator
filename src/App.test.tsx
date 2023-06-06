import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders App component', () => {
        const { container } = render(<App title="Test" />);

        expect(container).toBeTruthy();
    });

    test('renders App component with title', () => {
        const { getByText, container } = render(<App title="Test" />);
        const titleElement = getByText('Test');

        expect(container.contains(titleElement));
    });
});
