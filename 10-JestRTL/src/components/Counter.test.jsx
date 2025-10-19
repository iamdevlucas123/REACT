import React from 'react';
import  Counter  from './counter';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Exibe contador inicial e incrementa ao clicar", () => {
    render(<Counter/>)

    //Verifica o valor inicial
    expect(screen.getByText("Contador: 0")).toBeInTheDocument();

    //Simula o clique no botão
    fireEvent.click(screen.getByText("Incrementar"))

    //Verifica se o contador atualizou
    expect(screen.getByText("Contador: 1")).toBeInTheDocument();
})
