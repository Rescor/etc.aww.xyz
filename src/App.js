import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import './App.css';

const items = {
  istar: {
    id: 1,
    title: "2Moons",
    description: "2Moons - космическая браузерная стратегия.",
    route: "istar",
    links: [
      {name: "Открыть", url: "https://2moons.xyz/"},
      {name: "Пост на DTF с описанием игры", url: "https://dtf.ru/games/2013438-2moons-kosmicheskaya-brauzernaya-strategiya"}
    ],
    prefix: "",
    cover_image: "2moons.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },
  raw: {
    id: 2,
    title: "RAW",
    description: "Сайд-скролл шутер про отважного лисёнка.\nЭто была первая игра, которую я создал.",
    route: "raw",
    links: [
      {name: "Открыть", url: "https://etc.aww.xyz/storage/raw"},
      {name: "Исходный код", url: "https://github.com/Rescor/RAW"},
    ],
    prefix: "",
    cover_image: "raw.jpg",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },
  timewaster: {
    id: 3,
    title: "Time Waster",
    description: "Инструмент для ручного брутфорса четырёхзначных кодов блокировки.",
    route: "timewaster",
    links: [
      {name: "Открыть", url: "https://etc.aww.xyz/storage/timewaster"}
    ],
    prefix: "",
    cover_image: "tw.png",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },
  cydia: {
    id: 4,
    title: "Сертификаты для старых iOS",
    description: "Сертификаты для старых версий iOS, которые не работают с новыми центрами сертификаций.\nИх установка так же исправляет ошибку сертификатов в Cydia.",
    route: "cydia",
    links: [
      {name: "Открыть", url: "http://etc.aww.xyz/storage/certs"}
    ],
    prefix: "",
    cover_image: "ios6.png",
    created_at: "2017-01-01 14:00:00",
    updated_at: "2017-01-01 14:00:00"
  },
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage items={items} />,
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <MainPage items={items} /> },
      { path: ":item", element: <ItemPage items={items} /> },
    ],
  }
])

export default function App() {
  return <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>
}
