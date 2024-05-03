import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => { 
    const title = 'Whatever';
    const url = 'https://whatever.com/image.jpg';

    test('Match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con la url y el alt indicado', () => { 
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe mostrar el título en el componente', () => { 
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});