// ao definir uma interface com todas as propriedades necessárias, o TypeScript garante que todas as instâncias de vídeo sejam consistentes,
// alertando sobre qualquer ausência ou tipo incorreto, beneficiando a equipe ao reduzir erros e facilitar a manutenção.

export interface Book {
  titulo: string;
  autor: string;
  favorito: boolean;
  genero: literaryTypes;
  imagem: string;
}

export interface literaryTypes {
  id: string;
  value: string;
  livros: Book[];
}
