/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => { 
    test('Debe regresar el estado inicial', () => { 
        const { result } = renderHook( () => useFetchGifs('cats') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y isLoading en false', async() => { 
        const { result } = renderHook( () => useFetchGifs('cats') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
});