import { amount } from "../info/amount";
import Tariff from "./tariff";

function Cards (){
    return (
    <section id="container">
    {
                    amount.map((amount, index) => {
                        return (
                            < Tariff amount = {amount} key = {index} />
                        )                
                    })
                }
    </section>
    );
    }
    
    export default Cards;
    