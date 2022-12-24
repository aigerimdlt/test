const category = {
    name1: 'База данных',
    name2: 'Структура',
    name3: 'Машиностроение'
}
const cardsData = [
    {
        id: 1,
        title: 'Кнопки при авторизации и регистрации',
        params: {
            status: 'выполняется',
            role: 'Указан',
            responsible: 'Группа людей',
            director: 'Ерганат Мерзентай',
            deadline: 'Завтра',
            category: category.name1
        },
        count: 3,
    },
    {
        id: 2,
        title: 'Эксперт статистики не работает',
        params: {
            status: 'выполняется',
            role: 'Не указан',
            responsible: 'Группа людей',
            director: 'Канат Баев',
            deadline: 'Любая дата',
            category: category.name1
        },
        count: 5,
    },
    {
        id: 3,
        title: 'В личном кабинет неправильно списывается баланс',
        params: {
            status: 'ждет выполнения',
            role: 'Указан',
            responsible: 'Группа людей',
            director: 'Ануар Беришев',
            deadline: 'Сегодня',
            category: category.name3
        },
        count: 0,
    },
    {
        id: 4,
        title: 'Структура папок проект',
        params: {
            status: 'выполняется',
            role: 'Не указан',
            responsible: 'Строители',
            director: 'Ануар Беришев',
            deadline: 'Любая дата',
            category: category.name2
        },
        count: 3,
    },
    {
        id: 5,
        title: 'Рейстат',
        description: 'статистика',
        params: {
            status: 'ждет выполнения',
            role: 'Не указан',
            responsible: 'Строители',
            director: 'Ерганат Мерзентай',
            deadline: 'Любая дата',
            category: category.name3
        },
        count: 3,
    },
    {
        id: 1,
        title: 'Данные в запросе счета на оплату',
        params: {
            status: 'выполняется',
            role: 'Указан',
            responsible: 'Группа людей',
            director: 'Ерганат Мерзентай',
            deadline: 'Завтра',
            category: category.name1
        },
        count: 3,
    },
    {
        id: 2,
        title: 'Письма на активацию рассылки',
        params: {
            status: 'выполняется',
            role: 'Не указан',
            responsible: 'Группа людей',
            director: 'Канат Баев',
            deadline: 'Любая дата',
            category: category.name1
        },
        count: 5,
    },
    {
        id: 3,
        title: 'При импорте контактов нужно чтобы номера',
        params: {
            status: 'ждет выполнения',
            role: 'Указан',
            responsible: 'Группа людей',
            director: 'Ануар Беришев',
            deadline: 'Сегодня',
            category: category.name3
        },
        count: 0,
    },
    {
        id: 4,
        title: 'База данных для проекта',
        params: {
            status: 'выполняется',
            role: 'Не указан',
            responsible: 'Строители',
            director: 'Ануар Беришев',
            deadline: 'любая дата',
            category: category.name2
        },
        count: 3,
    },
    {
        id: 5,
        title: 'Рейстат',
        description: 'статистика',
        params: {
            status: 'ждет выполнения',
            role: 'Не указан',
            responsible: 'Строители',
            director: 'Ерганат Мерзентай',
            deadline: 'любая дата',
            category: category.name3
        },
        count: 3,
    },
]