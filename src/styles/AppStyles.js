import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const BotaoTema = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Lista = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.background};

  padding: 15px;
  margin-bottom: 10px;

  border-radius: 10px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const GrupoBotoes = styled.div`
  display: flex;
  gap: 8px;
`;

export const Botao = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Formulario = styled.form`
  display: flex;
  gap: 10px;
`;

export const FiltroContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;