/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'NoGeek' } } );
        expect( input.value ).toBe( 'NoGeek' )

        // screen.debug();
    });

    test('Debe llamar OnNewCategory si el input tiene un valor', () => { 
        const inputValue = 'NoGeek';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'NoGeek' } } );
        fireEvent.submit( form );

        // screen.debug();
        
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe llamar OnNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
});