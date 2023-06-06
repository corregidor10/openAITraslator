// crea los test para el componente Translator
import { render } from '@testing-library/react';
import { Traslator } from './Traslator';

describe('Translator', () => {
    test('renders Translator component', () => {
        const { container } = render(<Traslator />);

        expect(container).toBeTruthy();
    });
});
