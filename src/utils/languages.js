const texts = [
  //English
  {
    otherLanguages: [
      {
        name: 'Portuguese',
        countryCode: 'BR',
        indexCode: 1,
      },
      {
        name: 'Spanish',
        countryCode: 'ES',
        indexCode: 2,
      },
    ],
    currentLanguage: 'English',
    countryCode: 'US',
    title: 'I bet I can read your mind',
    subtitle: "Don't believe me? try out",
    instructions: [
      'Choose one card and click on the pile that contains it',
      'Now choose the pile that contains the chosen card',
      'Is this your card? I hope so',
    ],
    restartButton: 'Play again',
  },
  //Portuguese
  {
    otherLanguages: [
      {
        name: 'Inglês',
        countryCode: 'US',
        indexCode: 0,
      },
      {
        name: 'Espanhol',
        countryCode: 'ES',
        indexCode: 2,
      },
    ],
    currentLanguage: 'Português',
    countryCode: 'BR',
    title: 'Aposto que eu consigo ler sua mente',
    subtitle: 'Não acredita? Faz o teste',
    instructions: [
      'Escolha uma carta e clique na pilha onde ela está',
      'Agora escolha a pilha onde está sua carta',
      'Eu acredito que essa seja sua carta!',
    ],
    restartButton: 'Jogar novamente',
  },
  // Spanish
  {
    otherLanguages: [
      {
        name: 'Ingles',
        countryCode: 'US',
        indexCode: 0,
      },
      {
        name: 'Portugués',
        countryCode: 'BR',
        indexCode: 1,
      },
    ],
    currentLanguage: 'Espanol',
    countryCode: 'ES',
    title: 'Apuesto a que puedo leer tu mente',
    subtitle: '¿No te lo crees? Toma el examen',
    instructions: [
      'Elige una carta y haz clic en la pila donde está',
      'Ahora elige la linea donde está tu carta',
      '¡Creo que ésta es tu carta!',
    ],
    restartButton: 'Jugar de nuevo',
  },
];
export default texts;
