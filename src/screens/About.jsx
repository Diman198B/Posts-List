import React from "react";

const About = () => {
  return (
    <div>
      <h1 style={{ margin: "25px 15px" }}>SPA на React</h1>

      <h2 style={{ margin: "15px" }}>Реализовано:</h2>
      <ol>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Авторизация с сохранением в LocalStorage (заглушка. т.к. нет Backend)
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Асинхронная подгрузка постов с jsonplaceholder на axios
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>Пагинация</li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Кастомный мини UI-KIT
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Создание + добавление нового поста
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>Сортировка</li>
        <li style={{ margin: "15px", fontSize: "20px" }}>Поиск + фильтрация</li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Детальная страница поста, подгрузка с jsonplaceholder на axios
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Постраничная навигация на React-Router v.5.2
        </li>
        <li style={{ margin: "15px", fontSize: "20px" }}>Стили moduleCSS</li>
        <li style={{ margin: "15px", fontSize: "20px" }}>
          Анимация на React-Transition-Group
        </li>
      </ol>
      <h2 style={{ margin: "100px 15px " }}>Разработано Diman198B</h2>
    </div>
  );
};
export default About;
