async function getValute() {
    const url = "https://www.cbr-xml-daily.ru/daily_json.j";
    let result = await fetch(url)
        .then(response => response.json())
        .then(result => result.Valute)
        .catch(error => "Извините(( на сервере котировок возникла ошибка");
    return result;
}
export default async function convert(str) {
    let arrProperti = str.toUpperCase().split(/\s+/g);
    let [amount, from, to] = arrProperti;
    let response = await getValute();
    if (typeof response == 'string') {
        return response;
    }
    if (from == 'RUB') {
        console.log(1);
        return (+amount / (response[to].Value / response[to].Nominal)).toFixed(2);
    }
    else if (to == 'RUB') {
        console.log(2);
        return (+amount * (response[from].Value / response[from].Nominal)).toFixed(2);
    }
    else if (response[from] && response[to]) {
        return (+amount * (response[from].Value / response[from].Nominal)
            / (response[to].Value / response[to].Nominal)).toFixed(2);
    }
    else if (!response[from] || !response[to]) {
        return 'Ты ввел неверный код, либо ошибка синтаксиса, бро';
    }
}
