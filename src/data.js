export default {
    info: {
        name: "Ковальчук Дмитрий Сергеевич",
        target: "Frontend developer",
        img :"../img/photo.jpg",
        about : "Стремлюсь стать частью профессиональной и дружной команды, чтобы развивать свои личные навыки Frontend и Backend разработки для достижения командных результатов, а также изучать новые для себя технологии. ",
        skills : ["HTML,CSS", "JavaScript ES6+", "Vue.js", "Rest API", "Git", "PHP, Laravel", "Python: Flask, aio-http"],
        location: "Иркутск",
        links: [""],
    },
    sections:[
        {
            title: "Образование",
            items: 
            [
                {
                    title: "Иркутский Государственный Университет",
                    faculty: "Факультет бизнес-коммуникаций и информатики",
                    dateFrom: "2018",
                    dateTo: "2022",
                    direction: "Прикладная информатика",
                    profile: "Разработка Программного Обеспечения",
                },
                /*{
                    title: "Иркутский Государственный Университет",
                    faculty: "Институт Математики и информационных технологий",
                    dateFrom: "2022",
                    dateTo: "2024",
                    direction: "Прикладная информатика",
                    profile: "Разработка, внедрение и управление жизненным циклом информационных систем",
                }*/
            ],
        },
        {
            title: "Опыт работы",
            items: 
            [
                {
                    title: "Институт Солнечно-Земной физики",
                    dateFrom: "Январь, 2022",
                    dateTo: "Март, 2022",
                    direction: "Junior developer",
                    profile: "Комплекс мониторинга ионосферы по данным ГНСС",
                    list: ["Разработка скриптов на Python для приема, обработки и сохранения потоков данных с базовой станции.",
                    "Реализация клиент-серверного взаимодействия между скриптами, используя socket'ы и ZMQ",
                    "Разработка собственного протокола передачи данных"],
                }
            ],
        },
        {
            title: "Проекты",
            sortable: "true",
            items:
            [
                {
                    title: "Сайт-резюме на Vue.js",
                    dateFrom: "Январь, 2023",
                    list : ["Верстка сайта, используя компонентный подход на Vue.js", "Реализация верстки под разные устройства"],
                    link : "https://github.com/coolbuch/resume-landing",
                    info: "Стек: Vue.js, HTML, CSS"
                },
                {
                    title: "Парсер сайта для сбора данных",
                    dateFrom: "Январь, 2023",
                    list : ["Написание JS-скрипта для автоматического сбора необходимой информации с HTML страницы",
                            "Обработка полученных данных и сохранение их в excel, используя Python"],
                    link : "https://github.com/coolbuch/TimeTreeParser",
                    info: "Стек: Python, JS"
                },
                {
                    title: "Личный кабинет студента ИГУ",
                    dateFrom: "Ноябрь, 2022",
                    dateTo: "Январь, 2023",
                    list : ["Верстка страниц сайта на HTML+bootstrap и Blade Templates",
                            "Создание и доработка роутов, контроллеров и моделей в Laravel",
                            "Построение запросов к БД Mysql",
                            "Создание элементов управления на JS(drop-down и тп)"],
                    info: "Стек: PHP, MySQL, JS, HTML, Bootstrap ",
                },
                {
                    title: "Аппаратно-программный комплекс для проведения викторин",
                    dateFrom: "Март, 2022",
                    dateTo: "Июнь, 2022",
                    list : ["Разработка клиентской части приложения на HTML/CSS/JS",
                            "Организация клиент-серверного взаимодействия на websocket",
                            "Проектирование и работа с БД MySQL",
                            "Создание HTTP сервера на Python-фреймворке aio-http",
                            "Разработка аппаратной части на микроконтролере NodeMCU"],
                    info: "Стек: Python, MySQL, JS, HTML, CSS, C++",
                },
                {
                    title: "Система регистрации датчиков",
                    dateFrom: "Июнь, 2021",
                    dateTo: "Июль, 2021",
                    list : ["Разработка REST-API сервера на Flask",
                            "Проектирование и работа с БД sqlite",
                            "Создание Anroid приложения для взаимодействия с датчиками и сервером",
                            "Сборка и программирование датчика на основе NodeMCU"],
                    info: "Стек: Python, sqlite, Java",
                    link : "https://github.com/coolbuch/LoraIOT",
                },
                {
                    title: "Приложение для работы ресторана",
                    dateFrom: "Декабрь, 2020",
                    dateTo: "Январь, 2021",
                    list : ["Реализация серверной логики на Flask",
                            "Проектирование и работа с БД sqlite",
                            "Создание шаблонов HTML страниц на jinja2"],
                    info: "Стек: Python, sqlite, HTML, CSS",
                    link: "https://github.com/coolbuch/restaurantProjectFlask",
                },
                {
                    title: "Приложение заметки на Vue.js",
                    dateFrom: "Декабрь, 2020",
                    list : ["Реализация удаления и добавления заметок, пометки о выполнении, сохранение в local storage"],
                    info: "Стек: Vue, HTML, bootstrap",
                    link: "https://coolbuch.github.io/VueJS_Notes/",
                }, 
                {
                    title: "Приложение \"Мой календарь\" на PHP",
                    dateFrom: "Июль, 2020",
                    list : ["Создание, обработка и валидация формы для события",
                            "Сохранение данных в БД MySQL",
                            "Верстка шаблона для страницы"],
                    info: "Стек: PHP, MySQL, HTML, CSS",
                    link: "http://phpproject.hostfl.ru/index.php",
                }, 
                {
                    title: "Приложение \"Регистрация на мероприятие\" на PHP",
                    dateFrom: "Июнь, 2020",
                    list : ["Создание, обработка и валидация формы на PHP",
                            "Сохранение данных в БД MySQL",
                            "Верстка шаблона для страницы"],
                    info: "Стек: PHP, MySQL, HTML, CSS",
                    link: "https://php_hw.hostfl.ru/",
                },
                {
                    title: "Игра \"Сапер\" на JS",
                    dateFrom: "Декабрь, 2019",
                    list : ["Законченная реализация игры сапер на JS с возможностью генерации поля различного размера с разным количеством мин"],
                    info: "Стек: HTML, CSS, JS",
                    link: "https://coolbuch.github.io/minesweeperOld/",
                },
                {
                    title: "Игра \"Собери паззл\" на JS",
                    dateFrom: "Декабрь, 2019",
                    list : ["Законченная реализация игры Паззл на JS"],
                    info: "Стек: HTML, CSS, JS",
                    link: "https://github.com/coolbuch/pazzleOld/",
                },
                {
                    title: "Todolist на JS",
                    dateFrom: "Декабрь, 2019",
                    list : ["Создание, редактирование, удаление заметок на JS"],
                    info: "Стек: HTML, CSS, JS",
                    link: "https://github.com/coolbuch/todolistJS/",
                }
            ],
        },
    ]
}  //TODO: Добавить отдельные ссылки для исходников и для демо