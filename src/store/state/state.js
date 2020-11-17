export default {
  products: [],
  categories: [],
  groups: [],
  cart: [],
  compare: [],
  homeSlideId: 1,
  fileTypes: [
    {
      name: "Технические характеристики",
      prefics: 'specifications-'
    },
    {
      name: "Пособие пользователя",
      prefics: 'user-manual-'
    },
    {
      name: "Паспорт",
      prefics: 'passport-'
    }
  ],
  form: [
    {
      id: 1,
      name: 'Описание работ:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        'Новое строительство',
        'Замена устаревшей системы',
        'Частичная замена существующей системы с целью уменьшения расходов и/или повышения комфорта'
      ]
    },
    {
      id: 2,
      name: 'Назначение помещений:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        'Жильё',
        'Офис',
        'Магазин',
        'Питание',
        'Производство',
        'Медицина или дошкольное образование',
        'Другое'
      ]
    },
    {
      id: 3,
      name: 'Отапливаемая площадь, кв. м:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'inputNumber'
    },
    {
      id: 4,
      name: 'Теплопотери, кВт:',
      isNeeded: false,
      isRequiered: false,
      dataType: 'inputNumber'
    },
    {
      id: 5,
      name: 'Что должен обеспечить тепловой насос:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        'Отопление',
        'Горячее водоснабжение',
        'Нагрев бассейна',
        'Другое'
      ]
    },
    {
      id: 6,
      name: 'Электроснабжение:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        '220 Вольт, одна фаза',
        '380 Вольт, три фазы'
      ]
    },
    {
      id: 7,
      name: 'Лимит электрической энергии, выделенный электроснабжающей компанией, кВт:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'inputNumber'
    },
    {
      id: 8,
      name: 'Пожелания (если есть) по источнику энергии:',
      isNeeded: false,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        'Грунт',
        'Воздух улицы',
        'Воздух вентиляции',
        'Вода неглубоко от поверхности грунта, и водоем рядом',
        'Собственный водоем'
      ]
    },
    {
      id: 8,
      name: 'Площадь собственной, незастроенной в это время, земли, м2:',
      isNeeded: true,
      isRequiered: false,
      dataType: 'inputNumber'
    },
    {
      id: 9,
      name: 'Количество жителей (для расчета расхода горячей воды):',
      isNeeded: true,
      isRequiered: false,
      dataType: 'inputNumber'
    },
    {
      id: 10,
      name: 'Вид, или виды отопления:',
      isNeeded: false,
      isRequiered: false,
      dataType: 'checkboxes',
      fields: [
        'Полом',
        'Радиаторами',
        'Стенами'
      ]
    },
    {
      id: 11,
      name: 'Температурный график отопления, ℃, подающая/обратная магистраль (если известно):',
      isNeeded: false,
      isRequiered: false,
      dataType: 'inputText'
    },
    {
      id: 12,
      name: 'Бивалентный (альтернативный) источник тепла, если имеется или планируется к установке (газовый, пелетный, жидкотопливный котел, солнечный колектор, и т.п.):',
      isNeeded: false,
      isRequiered: false,
      dataType: 'inputText'
    },
    {
      id: 13,
      name: 'Область, район (для определения климатической зоны):',
      isNeeded: true,
      isRequiered: false,
      dataType: 'inputText'
    },
    {
      id: 14,
      name: 'Дополнительная информация:',
      isNeeded: false,
      isRequiered: false,
      dataType: 'inputArea'
    },
    {
      id: 15,
      name: 'Ваши контактные данные:',
      isNeeded: false,
      isRequiered: false,
      dataType: 'fieldset',
      fields: [
        {
          name: 'Имя:',
          isNeeded: false,
          isRequiered: true,
          dataType: 'inputText',
        },
        {
          name: 'Фамилия:',
          isNeeded: true,
          isRequiered: false,
          dataType: 'inputText',
        },
        {
          name: 'Отчество:',
          isNeeded: false,
          isRequiered: false,
          dataType: 'inputText',
        },
        {
          name: 'Телефон:',
          isNeeded: false,
          isRequiered: true,
          dataType: 'inputTel',
        },
        {
          name: 'E-mail:',
          isNeeded: false,
          isRequiered: false,
          dataType: 'inputEmail',
        }
      ]
    }
  ]
}