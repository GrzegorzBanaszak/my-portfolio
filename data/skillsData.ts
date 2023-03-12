export type SkillType = {
  name: string;
  description: string;
};

export type SectionType = {
  type: string;
  data: Array<SkillType>;
};

export const skillsData: Array<SectionType> = [
  {
    type: "Frondend Skills",
    data: [
      {
        name: "html",
        description:
          "HTML był językiem który nie sprawił mi wiele trudności w nauca z racji tego że jest to język opisowy i w przeciwiećstwie do XML jast wardzo intuicyjny.Jedyną rzeczą nad którą nadal pracuje jest budowanie stron tak aby uzyskiwały one wysoki wskaźnik SEO",
      },
      {
        name: "css",
        description:
          "Wiekszość swojego czasu podczas budowy strony spędam włąśni z CSS.To on sprawia że strona internetowa nabiera unikalnego wyglądu i staje się bardziej żywa.",
      },
      {
        name: "sass",
        description:
          "Język ten poznałem w trakcie kursy programisty React.Posiada wiele funkcji które sprawiają że pisanie kodu CSS staje się bardziej efektywne oraz pozwala uniknąć redundancji kodu.",
      },
      {
        name: "javascript",
        description:
          "Na początku javascript był dla mnie językiem trudnym do zrozumienia gdzyż wcześniej miałem do czynienia z statycznimi i trudno było mi się przyzwiczaić do nowego podejścia.",
      },
      {
        name: "typescript",
        description:
          "Typescript jest językiem który bardzo lubię gdzyż wprowadza wiele usprawnień do Javascriptu i pozwala wychwycić błędy już na poziomie kodu.Jest to bardzo przydatan umiejętnoś zwłasza przy dużych projektach.W większości moich aplikacji korzystam właśnie z niego i mam zamiar poznawać go głębiej gdzyż wiem że mam jeszcze wiele do nauki.",
      },
      {
        name: "react",
        description:
          "React był pierwszym frameworkem w którym na poważnie zaczołem tworzyć aplikacje.Jego zaletą jest to że ma niski próg wejścia oraz daje swobode w tworzeniu aplikacji.",
      },
      {
        name: "redux",
        description:
          "Z reduxa zaczołem kożystać gdy poszukiwałem narzędzia które lepiej pozwoli mi zażądzać stanami aplikacji.Troche mi zajeło nauczenie się reduxa ale bardzo pomocnym był pakiet redux Redux Toolkit",
      },
      {
        name: "vue",
        description:
          "Vue jest to drugi framework który poznałem.Chciałem stworzyć aplikacje lecz spróbować z czymś innym niż React.Miałem do wyboru Angulara lub Vue, wybór padł na Vue i nie żałuje.Bardzo polubiłem go za prostotę zażadzania stanami aplikacji.",
      },
      {
        name: "nextjs",
        description:
          "NextJs w mojej opinii jest ulepszoną wersią Reacta.Najlepszymi ulepszeniami które posiada next wedłóg mnie są nestedPages, możliwość budowania API oraz SSR i SSG",
      },
    ],
  },
  {
    type: "Backend Skills",
    data: [
      {
        name: "node",
        description:
          "Za pomocą NodeJs głownie tworzyłem aplikacjie REST API. Korzystałem w wiekszości z Express, JWT oraz Cookies.",
      },
      {
        name: "mysql",
        description:
          "Poza MYSQL używałem także Sql server oba oparte na zapytaniach SQL.",
      },
      {
        name: "mongodb",
        description:
          "Jedna Z najczęściej używanych przezemnie baz danych w moich projektach.Do komunikacji najczęściej używam Mongoose.",
      },
      {
        name: "c#",
        description:
          "Pierwszy język programowania który poznałem.Używałem go do budowy REST API z ASP.NET , Unity i aplikacjach konsolowych.",
      },
    ],
  },
  {
    type: "Others Skills",
    data: [
      {
        name: "git",
        description:
          "Jedna z ważniejszych umiejętności który każdy programista powinien opanowć czyli GIT.System kontroli wersji GIT poznałem wraz z nauką C# lecz dopier z czasem zaczołem lepiej go poznawać i doceniać jego zalety.",
      },
      {
        name: "docker",
        description:
          "Gdy pierwszy raz spotkałem się z Dockerem nie potrafiłem znalez zastosowania do jego użycia.Jego zastosowanie zrozumiałem gdzy pracołałem nad aplikacją i potrzebowałem servera SQL i doker pozwalał na szybkie postawienie bez dużej konfiguracji.",
      },
      {
        name: "vs code",
        description:
          "Jest to główny edytor kodu z którego korzystam. Wcześniej kożystałem z Visual Studio przy pisanu w języku C# lecz gdy zaczołem pisać aplikacje w Javascript musiałem poszukać lepszego środowiska i Visual Studio Code okazał się idealny ze względu na swoja uniwersalność.",
      },
      {
        name: "figma",
        description:
          "Z figmy zaczołem korzystać z potrzeby zwizualizowania strony przed rozpoczęciem pracy nad nią.Figma okazała się świetna z przyczyny łatwości w obsłudze i darmowości",
      },
    ],
  },
];
