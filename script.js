function submitForm(e){
    e.preventDefault();
}

// Список стран с кодами
const countries = {
    "004": "Афганистан",
    "008": "Албания",
    "012": "Алжир",
    "016": "Американское Самоа",
    "020": "Андорра",
    "024": "Ангола",
    "028": "Антигуа и Барбуда",
    "031": "Азербайджан",
    "032": "Аргентина",
    "036": "Австралия",
    "040": "Австрия",
    "044": "Багамы",
    "048": "Бахрейн",
    "050": "Бангладеш",
    "051": "Армения",
    "052": "Барбадос",
    "056": "Бельгия",
    "060": "Бермудские острова",
    "064": "Бутан",
    "068": "Боливия (Многонациональное Государство)",
    "070": "Босния и Герцеговина",
    "072": "Ботсвана",
    "074": "Буве, остров",
    "076": "Бразилия",
    "084": "Белиз",
    "086": "Британская территория в Индийском океане",
    "090": "Соломоновы острова",
    "092": "Виргинские острова (Британские)",
    "096": "Бруней-Даруссалам",
    "100": "Болгария",
    "104": "Мьянма",
    "108": "Бурунди",
    "112": "Беларусь",
    "116": "Камбоджа",
    "120": "Камерун",
    "124": "Канада",
    "132": "Кабо-Верде",
    "136": "Острова Кайман",
    "140": "Центральноафриканская Республика",
    "144": "Шри-Ланка",
    "148": "Чад",
    "152": "Чили",
    "156": "Китай",
    "158": "Тайвань (Китай)",
    "162": "Остров Рождества",
    "166": "Кокосовые (Килинг) острова",
    "170": "Колумбия",
    "174": "Коморские острова",
    "175": "Майотта",
    "178": "Конго",
    "180": "Конго (Демократическая Республика)",
    "184": "Острова Кука",
    "188": "Коста-Рика",
    "191": "Хорватия",
    "192": "Куба",
    "196": "Кипр",
    "203": "Чешская Республика",
    "204": "Бенин",
    "208": "Дания",
    "212": "Доминика",
    "214": "Доминиканская Республика",
    "218": "Эквадор",
    "222": "Сальвадор",
    "226": "Экваториальная Гвинея",
    "231": "Эфиопия",
    "232": "Эритрея",
    "233": "Эстония",
    "234": "Фарерские острова",
    "238": "Фолклендские острова (Мальвинские)",
    "239": "Южная Георгия и Южные Сандвичевы острова",
    "242": "Фиджи",
    "246": "Финляндия",
    "248": "Аландские острова",
    "250": "Франция",
    "254": "Французская Гвиана",
    "258": "Французская Полинезия",
    "260": "Французские Южные территории",
    "262": "Джибути",
    "266": "Габон",
    "268": "Грузия",
    "270": "Гамбия",
    "275": "Палестинская территория, оккупированная",
    "276": "Германия",
    "288": "Гана",
    "292": "Гибралтар",
    "296": "Кирибати",
    "300": "Греция",
    "304": "Гренландия",
    "308": "Гренада",
    "312": "Гваделупа",
    "316": "Гуам",
    "320": "Гватемала",
    "324": "Гвинея",
    "328": "Гайана",
    "332": "Гаити",
    "334": "Остров Херд и острова Макдональд",
    "336": "Ватикан",
    "340": "Гондурас",
    "344": "Гонконг",
    "348": "Венгрия",
    "352": "Исландия",
    "356": "Индия",
    "360": "Индонезия",
    "364": "Иран (Исламская Республика)",
    "368": "Ирак",
    "372": "Ирландия",
    "376": "Израиль",
    "380": "Италия",
    "384": "Кот-д'Ивуар",
    "388": "Ямайка",
    "392": "Япония",
    "398": "Казахстан",
    "400": "Иордания",
    "404": "Кения",
    "408": "Корея (Народно-Демократическаическая Республика)",
    "410": "Корея (Республика)",
    "414": "Кувейт",
    "417": "Киргизия",
    "418": "Лаосская Народно-Демократическая Республика",
    "422": "Ливан",
    "426": "Лесото",
    "428": "Латвия",
    "430": "Либерия",
    "434": "Ливия",
    "438": "Лихтенштейн",
    "440": "Литва",
    "442": "Люксембург",
    "446": "Макао",
    "450": "Мадагаскар",
    "454": "Малави",
    "458": "Малайзия",
    "462": "Мальдивы",
    "466": "Мали",
    "470": "Мальта",
    "474": "Мартиника",
    "478": "Мавритания",
    "480": "Маврикий",
    "484": "Мексика",
    "492": "Монако",
    "496": "Монголия",
    "498": "Молдова (Республика)",
    "499": "Черногория",
    "500": "Монтсеррат",
    "504": "Марокко",
    "508": "Мозамбик",
    "512": "Оман",
    "516": "Намибия",
    "520": "Науру",
    "524": "Непал",
    "528": "Нидерланды",
    "531": "Кюрасао",
    "533": "Аруба",
    "534": "Синт-Мартен (нидерландская часть)",
    "535": "Бонэйр, Синт-Эстатиус и Саба",
    "540": "Новая Каледония",
    "548": "Вануату",
    "554": "Новая Зеландия",
    "558": "Никарагуа",
    "562": "Нигер",
    "566": "Нигерия",
    "570": "Ниуэ",
    "574": "Норфолк, остров",
    "578": "Норвегия",
    "580": "Северные Марианские острова",
    "581": "Малые Тихоокеанские Отдаленные острова Соединенных Штатов",
    "583": "Микронезия (Федеративные Штаты)",
    "584": "Маршалловы острова",
    "585": "Палау",
    "586": "Пакистан",
    "591": "Панама",
    "598": "Папуа – Новая Гвинея",
    "600": "Парагвай",
    "604": "Перу",
    "608": "Филиппины",
    "612": "Питкэрн",
    "616": "Польша",
    "620": "Португалия",
    "624": "Гвинея-Бисау",
    "626": "Тимор-Лесте",
    "630": "Пуэрто-Рико",
    "634": "Катар",
    "638": "Реюньон",
    "642": "Румыния",
    "643": "Россия (Российская Федерация)",
    "646": "Руанда",
    "652": "Сент-Бартельми",
    "654": "Сен-Хелена, Вознесение и Тристан-да-Кунья",
    "659": "Сент-Китс и Невис",
    "660": "Ангилья",
    "662": "Сент-Люсия",
    "663": "Сен-Мартен (французская часть)",
    "666": "Сен-Пьер и Микелон",
    "670": "Сент-Винсент и Гренадины",
    "674": "Сан-Марино",
    "678": "Сан-Томе и Принсипи",
    "682": "Саудовская Аравия",
    "686": "Сенегал",
    "688": "Сербия",
    "690": "Сейшельские острова",
    "694": "Сьерра-Леоне",
    "702": "Сингапур",
    "703": "Словакия",
    "704": "Вьетнам",
    "705": "Словения",
    "706": "Сомали",
    "710": "Южно-Африканская Республика",
    "716": "Зимбабве",
    "724": "Испания",
    "728": "Южный Судан",
    "729": "Судан",
    "732": "Западная Сахара",
    "740": "Суринам",
    "744": "Шпицберген и Ян-Майен",
    "748": "Свазиленд",
    "752": "Швеция",
    "756": "Швейцария",
    "760": "Сирийская Арабская Республика",
    "762": "Таджикистан",
    "764": "Таиланд",
    "768": "Того",
    "772": "Токелау",
    "776": "Тонга",
    "780": "Тринидад и Тобаго",
    "784": "Объединенные Арабские Эмираты",
    "788": "Тунис",
    "792": "Турция",
    "795": "Туркменистан",
    "796": "Теркс и Кайкос",
    "798": "Тувалу",
    "800": "Уганда",
    "804": "Украина",
    "807": "Северная Македония",
    "818": "Египет",
    "826": "Соединенное Королевство Великобритании и Северной Ирландии",
    "831": "Гернси",
    "832": "Джерси",
    "833": "Остров Мэн",
    "834": "Танзания, Объединенная Республика",
    "840": "Соединенные Штаты",
    "850": "Виргинские острова (США)",
    "854": "Буркина-Фасо",
    "858": "Уругвай",
    "860": "Узбекистан",
    "862": "Венесуэла (Боливарианская Республика)",
    "876": "Уоллис и Футуна",
    "882": "Самоа",
    "887": "Йемен",
    "894": "Замбия",
    "895": "Абхазия",
    "896": "Южная Осетия",
    "897": "ДНР",
    "898": "ЛНР"
}

function getCountryName(countryCode) {
    // Проверяем, есть ли такой код в списке стран
    if (countries.hasOwnProperty(countryCode)) {
        return countries[countryCode];
    } else {
        return "Неизвестная страна"; // Если код не найден
    }
}

function checkAge(dateOfBirth) {
    // Создаем объект Date для текущей даты
    const currentDate = new Date();

    // Создаем объект Date для даты рождения пользователя
    const dob = new Date(dateOfBirth);

    // Рассчитываем разницу между текущей датой и датой рождения в миллисекундах
    const ageDifferenceMs = currentDate - dob;

    // Преобразуем разницу в годы
    const age = Math.floor(ageDifferenceMs / (1000 * 60 * 60 * 24 * 365));

    // Проверяем, что возраст больше или равен 18
    return age >= 18;
}

function addUsers() {
    // Получаем количество пользователей из поля ввода
    let userCount = document.getElementById("userCount").value;

    // Очищаем текущие внутренности формы
    document.getElementById("userForm").innerHTML = '';
    document.querySelector(".form__btn").classList.add("active");

    // Добавляем новые внутренности формы для каждого пользователя
    for (let i = 0; i < userCount; i++) {
        let userNumber = i;

        // Создаем блок для каждого пользователя
        let userBlock = document.createElement("div");
        userBlock.className = "form__group";

        // Добавляем поля для пользователя в блок
        userBlock.innerHTML = `
                <div class="form__direction">
                    <label class="form__label" for="name${userNumber}">Имя:</label>
                    <input class="form__input" type="text" id="name${userNumber}" name="name${userNumber}" required>
                </div>
                
                <div class="form__direction">
                    <label class="form__label" for="tin${userNumber}">TIN (Taxpayer Identification Number):</label>
                    <input class="form__input" type="text" id="tin${userNumber}" name="tin${userNumber}" placeholder="5234542543" minlength="2">
                </div>

                <div class="form__direction">
                    <label class="form__label" for="countryCode${userNumber}">Страна юрисдикции резидентства:</label>
                    <select class="form__input" id="countryCode${userNumber}" name="countryCode${userNumber}" required>
                        <option value="">Выберите страну</option>
                        ${Object.entries(countries).map(([code, name]) => `<option value="${code}">${name}</option>`).join('')}
                    </select>
                </div>

                <div class="form__direction">
                    <label class="form__label" for="entityType${userNumber}">ЮЛ/ФЛ:</label>
                    <select class="form__input" id="entityType${userNumber}" name="entityType${userNumber}" required>
                        <option value="legal">ЮЛ</option>
                        <option value="individual">ФЛ</option>
                    </select>
                </div>

                <div class="form__direction">
                    <label class="form__label" for="gender${userNumber}">Пол:</label>
                    <select class="form__input" id="gender${userNumber}" name="gender${userNumber}" required>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>

                <div class="form__direction">
                    <label class="form__label" for="creationDate${userNumber}">Дата создания ЮЛ/дата рождения ФЛ:</label>
                    <input class="form__input" type="date" id="creationDate${userNumber}" name="creationDate${userNumber}" required>
                </div>

                <div class="form__direction">
                    <label class="form__label" for="tinCorrectivity${userNumber}">Корректность TIN</label>
                    <p style="margin: 8px 0 0;" class="form__input" type="text" id="tinCorrectivity${userNumber}" name="tinCorrectivity${userNumber}"></p>
                </div> 

                <div style="width: 150px" class="form__direction">
                    <label class="form__label" for="result${userNumber}">Пояснение</label>
                    <p style="margin: 0; width: 150px; text-align: left" class="form__input" type="text" id="result${userNumber}" name="result${userNumber}"></p>
                </div> 
        `;

        // Добавляем блок пользователя к форме
        document.getElementById("userForm").appendChild(userBlock);

        // Добавляем обработчик события change для каждого выпадающего списка страны
        let countryCodeSelect = document.getElementById(`countryCode${userNumber}`);
        countryCodeSelect.addEventListener('change', function() {
            let selectedCountryCode = this.value;
            let countryCodeInput = document.getElementById(`countryCode${userNumber}`);
            countryCodeInput.value = selectedCountryCode;
        });
    }
}


function clickForm() {
    // Создаем XML-структуру
    let xmlString = buildXML();
    let apiKey = 'AF5736BF-34E9-4211-8CFB-33302DDBCABF';

    // Создаем Blob из XML-строки с типом MIME "text/xml"
    let blob = new Blob([xmlString], { type: 'text/xml' });

    // Создаем FormData и добавляем в него файл и ApiKey
    let formData = new FormData();
    formData.append('FileToUpload', blob);
    formData.append('ApiKey', apiKey);

    // Отправляем FormData через fetch
    fetch("https://tin.balans2.ru/api/v1/FileCheck", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка при отправке данных на сервер");
        }
        return response.json(); // Используем метод json() для парсинга JSON-ответа
    })
    .then(data => {
        console.log(data);
        const xmlContent = data.content; // Получаем содержимое XML из ответа
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

    
        // Находим все элементы <TIN> в XML
        const tinElements = xmlDoc.getElementsByTagName("TIN");

        // Проходимся по каждому элементу <TIN> и обрабатываем результат проверки
        Array.from(tinElements).forEach((tinElement) => {
            let tinElements = document.querySelectorAll('input[id^="tin"]');
            // Находим соответствующие элементы на странице
            for(let i = 0; i < tinElements.length; i++) {
                let tinCorrectivityElement = document.getElementById(`tinCorrectivity${i}`);
                let resultElement = document.getElementById(`result${i}`);

                if(resultElement.innerHTML === 'Возраст должен быть больше 18 лет'){
                    tinCorrectivityElement.innerHTML = '';
                    continue;
                }
                // Находим элемент <Проверен> для текущего TIN
                const checkedElement = tinElement.querySelector("Проверен");
    
                if(checkedElement){
                    // Получаем атрибуты результатов проверки
                    const result = checkedElement.getAttribute("Результат");
                    const Step1 = checkedElement.getAttribute("ШагПров1");
                    const Step2 = checkedElement.getAttribute("ШагПров2");
                    const Step3 = checkedElement.getAttribute("ШагПров3");
                    const Step4 = checkedElement.getAttribute("ШагПров4");
    
                    // Генерируем пояснения на основе результатов проверки
                    let resultString = "";
                    resultString += `Проверка длины:<br> ${Step1 === "1" ? "<b>Успешно</b>" : "<b>Ошибка</b>"}<br>`;
                    resultString += `Проверка структуры:<br> ${Step2 === "1" ? "<b>Успешно</b>" : "<b>Ошибка</b>"}<br>`;
                    resultString += `Проверка по контрольному соотношению:<br> ${Step3 === "1" ? "<b>Успешно</b>" : "<b>Ошибка</b>"}<br>`;
                    resultString += `Проверка соответствия TIN и входным данным:<br> ${Step4 === "1" ? "<b>Успешно</b>" : "<b>Ошибка</b>"}`;
    
                    console.log(resultString);
    
                    // Отображаем результаты на странице с использованием innerHTML
                    tinCorrectivityElement.innerHTML = result === "TRUE" ? "True" : "False";
                    tinCorrectivityElement.style.color = result === "TRUE" ? "green" : "red";
                    resultElement.innerHTML = resultString; // Показываем пояснения в поле "Пояснение"
    
                } else{
                    tinCorrectivityElement.innerHTML = "";
                    resultElement.innerHTML = "В данной стране нет TIN";
                }

            }
        });
    })
    .catch(error => {
        console.error(error);
        // Обработка ошибок
    });
}

function buildXML() {
    let xmlString = '<?xml version="1.0" encoding="utf-8"?>';
    xmlString += '<ПроверкаTIN xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';

    // Получаем данные пользователя из формы
    let tinElements = document.querySelectorAll('input[id^="tin"]');
    let countryCodeElements = document.querySelectorAll('select[id^="countryCode"]');
    let entityTypeElements = document.querySelectorAll('select[id^="entityType"]');
    let genderElements = document.querySelectorAll('select[id^="gender"]');
    let creationDateElements = document.querySelectorAll('input[id^="creationDate"]');

    // Добавляем данные пользователя в XML-структуру
    for (let i = 0; i < tinElements.length; i++) {
        const resultElement = document.getElementById(`result${i}`);
        let tinValue = tinElements[i].value;
        let countryCodeValue = countryCodeElements[i].value;
        let entityTypeValue = entityTypeElements[i].value;
        let genderValue = genderElements[i].value;
        let creationDateValue = creationDateElements[i].value;
    
        // Получаем наименование страны и коды страны на основе countryCode
        let countryNameValue = getCountryName(countryCodeValue); // Здесь нужно получить наименование страны на основе countryCode
    
        if (countryCodeValue === '' || entityTypeValue === '' || genderValue === '' || creationDateValue === '') {
            resultElement.innerHTML = 'Неполные данные';
            console.log('Неполные данные');
            continue; // Пропускаем текущую итерацию и переходим к следующей
        }
    
        if (!checkAge(creationDateValue) && entityTypeValue !== 'legal') {
            resultElement.innerHTML = 'Возраст должен быть больше 18 лет';
            console.log('Возраст должен быть больше 18 лет');
            continue; // Пропускаем текущую итерацию и переходим к следующей
        } else{
            resultElement.innerHTML = '';
        }
    
        // Добавляем блок TIN для текущего пользователя в XML-структуру
        xmlString += `<TIN Значение="${tinValue}"`;
        xmlString += ` Наименование="${countryNameValue}"`;
        xmlString += ` Код="${countryCodeValue}"`;
    
        // Закрываем блок TIN и открываем блок Владелец
        xmlString += '>';
        xmlString += '<Владелец';
    
        // Добавляем атрибуты к блоку Владелец
        xmlString += ` ЮЛФЛ="${entityTypeValue === 'legal' ? 1 : 2}"`;
        xmlString += ` Пол="${genderValue === 'male' ? 1 : 2}"`;
    
        // Форматируем дату в формат с точками
        creationDateValue = creationDateValue.split("-").reverse().join(".");
    
        // Добавляем атрибут ДатаРожденияСоздания к блоку Владелец
        xmlString += ` ДатаРожденияСоздания="${creationDateValue}"`;
    
        // Закрываем блок Владелец и блок TIN
        xmlString += '/>';
        xmlString += '</TIN>';
    }
    xmlString += '</ПроверкаTIN>';
    
    console.log(xmlString);
    
    return xmlString;
}