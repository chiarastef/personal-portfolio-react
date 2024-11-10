import { Project } from "../models/Project";

import countries from "../assets/projects/countries.png";
import multiStepForm from "../assets/projects/multi-step-form.png";
import airTravelFootprint from "../assets/projects/air-travel-footprint.png";
import newYorkTimesClone from "../assets/projects/new-york-times-clone.png";
import weatherForecast from "../assets/projects/weather-forecast.png";

export const projects: Project[] = [
  {
    name: "Countries",
    description:
      "Built with TypeScript, React, React Router, Tailwind, REST Countries API",
    githubUrl: "https://github.com/chiarastef/countries",
    liveUrl: "https://countries-frontendmentor.netlify.app/",
    previewImg: countries,
  },
  {
    name: "Multi-step Form",
    description: "Built with TypeScript, React, Styled Components, Material UI",
    githubUrl: "https://github.com/chiarastef/multi-step-form-frontend-mentor",
    liveUrl: "https://multi-step-form-frontendmentor.netlify.app/",
    previewImg: multiStepForm,
  },
  {
    name: "Air Travel Footprint",
    description: "Built with React, CSS Modules, Material UI, GoClimate API",
    githubUrl: "https://github.com/chiarastef/air-travel-footprint",
    liveUrl: "https://air-travel-footprint.netlify.app/",
    previewImg: airTravelFootprint,
  },
  {
    name: "New York Times Clone",
    description:
      "Built with React, React Router, CSS Modules, Axios, New York Times API",
    githubUrl: "https://github.com/chiarastef/new-york-times-clone",
    liveUrl: "https://new-york-times-clone-react.netlify.app/",
    previewImg: newYorkTimesClone,
  },
  {
    name: "Weather Forecast",
    description: "Built with React, CSS Modules, Axios, OpenWeather API",
    githubUrl: "https://github.com/chiarastef/react-weather-app",
    liveUrl: "https://react-weather-forecast-website.netlify.app/",
    previewImg: weatherForecast,
  },
];
