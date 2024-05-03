/* eslint-disable no-undef */
import { GifGrid } from "../../src/components/GifGrid"
import { render, screen } from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 

    const category = 'cats'

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category} /> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'cats',
                url: 'https://localhost/cats.jpg'
            },
            {
                id: 'DEF',
                title: 'dogs',
                url: 'https://localhost/dogs.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    })
});