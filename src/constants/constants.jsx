export const projects = [
    {
      title: 'OnMa RestAPI',
      description: "Die OnMa RestAPI ist eine REST-API, die auf Spring Boot basiert und von einer MySQL-Datenbank unterstützt wird. Sie bietet CRUD-Funktionalität (Create, Read, Update, Delete) für die Verwaltung von Benutzern, Produkten und Bestellungen. Die API ist mit Modellen, Diensten, Repositories und Controllern strukturiert, um die Trennung von Anliegen und Skalierbarkeit zu gewährleisten. Die API bietet auch Sicherheitsfunktionen wie Authentifizierung und Autorisierung, um sicherzustellen, dass nur autorisierte Benutzer auf bestimmte Endpunkte zugreifen können.",
        image: '/images/1.png',
        tags: ['Spring Boot', 'MySQL', 'REST API'],
      source: 'https://github.com/DomRuff/OnMa-RestAPI',
      id: 0,
    },
    {
      title: 'OnMa React App',
      description:"Die OnMa React App ist eine moderne Frontend-Anwendung, die mit React und Vite.js erstellt wurde. Gestaltet mit TailwindCSS, bietet die App eine schlanke und reaktionsfähige Benutzeroberfläche für die Interaktion mit einer E-Commerce-Plattform. Sie ermöglicht es den Nutzern, Produkte zu verkaufen oder zu durchsuchen, ihren Einkaufswagen zu verwalten und den Bestell- und Verkaufverlauf anzuzeigen. Die App kommuniziert mit einer Backend-API (der OnMa - REST API), um CRUD-Operationen für Produkte, Benutzer und Bestellungen durchzuführen.",
      image: '/images/2.png',
      tags: ['React', 'JavaScript', 'TailwindCSS'],
      source: 'https://github.com/DomRuff/OnMa-react-app',
      id: 1,
    },
    {
      title: 'EMS RESTAPI',
      description: "Die EMS-RESTAPI ist eine REST-API, die mit Spring Boot erstellt wurde und auf einer PostgreSQL-Datenbank basiert. Sie bietet CRUD-Funktionalität (Create, Read, Update, Delete) für die Verwaltung von Mitarbeitern. Die API ist mit Modellen, Diensten, Repositories und Controllern strukturiert, um eine Trennung der Anliegen und Skalierbarkeit zu gewährleisten.",
      image: '/images/3.png',
      tags: ['Spring Boot', 'PostgreSQL', 'REST API'],
      source: 'https://github.com/DomRuff/EMS-RESTAPI',
      id: 2,
    },
    {
      title: 'Todo App',
      description: "Eine lokale, nicht-persistente Anwendung zur Verwaltung von Todo-Listen, die mit React und Vite erstellt wurde und mit TailwindCSS responsives Styling bietet. Die Funktionen umfassen das Erstellen neuer Todo-Listen, das Hinzufügen neuer Todo-Elemente und das Löschen von Todo-Elementen.",
      image: '/images/4.png',
      tags: ['React', 'JavaScript', 'TailwindCSS'],
      source: 'https://github.com/DomRuff/todo-app',
      id: 3,
    },
    {
      title: 'Equadle',
      description: 'Eine Imitation des Nerdle-Spiels mit Angular und modernem Styling durch SCSS. Der Schwerpunkt dieses Projekts lag auf der Auseinandersetzung mit Angular und der Konzentration auf seine Funktionen, wie Property und Event Binding.',
      image: '/images/5.png',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      source: 'https://github.com/DomRuff/Equadle',
      visit: 'https://domruff.github.io/Equadle/',
      id: 4,
    },
    {
      title: 'Calculator App',
      description: "Eine einfache Taschenrechner-App, die mit React entwickelt wurde. Mit der App können Benutzer grundlegende arithmetische Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen. Komplexere Funktionen wie Quadrat, Quadratwurzel, Prozentsatz und Bruch werden ebenfalls angeboten. Die App enthält auch eine Schaltfläche zum Löschen, mit der Benutzer das Eingabefeld löschen und eine neue Berechnung starten können.",
      image: '/images/6.png',
      tags: ['React', 'JavaScript', 'TailwindCSS'],
      source: 'https://github.com/DomRuff/calculator-app',
      id: 5,
    },
  ];
  
  export const TimeLineData = [
    { year: 2018, text: 'Abitur', },
    { year: 2022, text: 'Bachelor of Science Informatik', },
    { year: 2024, text: 'Master of Science Informatik', },
  ];