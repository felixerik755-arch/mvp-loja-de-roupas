import { describe, it, expect } from 'vitest';
import { validarProduto } from '../script.js';

describe('Validação de produtos da loja', () => {
    it('deve aceitar um produto com dados válidos', () => {
        const produto = {
            nome: 'Camiseta básica',
            preco: 49.90,
            quantidade: 10
        };

        expect(validarProduto(produto).valido).toBe(true);
    });

    it('deve rejeitar um produto sem nome', () => {
        const produto = {
            nome: '',
            preco: 49.90,
            quantidade: 10
        };

        expect(validarProduto(produto).valido).toBe(false);
    });

    it('deve rejeitar um preço igual a zero', () => {
        const produto = {
            nome: 'Camiseta básica',
            preco: 0,
            quantidade: 10
        };

        expect(validarProduto(produto).valido).toBe(false);
    });

    it('deve rejeitar uma quantidade negativa', () => {
        const produto = {
            nome: 'Camiseta básica',
            preco: 49.90,
            quantidade: -1
        };

        expect(validarProduto(produto).valido).toBe(false);
    });

    it('deve rejeitar um nome contendo apenas espaços', () => {
        const produto = {
            nome: '   ',
            preco: 49.90,
            quantidade: 10
        };

        expect(validarProduto(produto).valido).toBe(false);
    });

    it('deve rejeitar um preço negativo', () => {
        const produto = {
            nome: 'Camiseta básica',
            preco: -10,
            quantidade: 10
        };

        expect(validarProduto(produto).valido).toBe(false);
    });

    it('deve rejeitar uma quantidade decimal', () => {
        const produto = {
            nome: 'Camiseta básica',
            preco: 49.90,
            quantidade: 2.5
        };

        expect(validarProduto(produto).valido).toBe(false);
    });
});
