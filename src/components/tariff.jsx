function Tariff (amount) {
    return (
        <div className="tariff">
            <p className="tariff__price">Безлимитный: {amount.amount.price}</p>
            <div className="tariff__text">
                <p className="tariff__rub">руб</p>
                <p className="tariff__price">{amount.amount.price}</p>
                <p className="tariff__month">/мес</p>
                </div>
            <div className="tariff__discribe">
            <p className="tariff__mbit">до {amount.amount.mbit} Мбит/сек</p>
                <p className="tariff__traffic">Объем включенного трафика не ограничен</p>
                </div>
        </div>
            );
}

export default Tariff