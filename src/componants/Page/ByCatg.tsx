import { productByCatg } from "../../assets/db/orm";
import { useParams } from "react-router";

export default function ByCatg(){
    let params = useParams()
    console.log(params);
    
    const catgChoice = productByCatg(String(params))

    return (<>
        <section>
            <p>catg</p>
            {catgChoice.map((elem,i) =>{ return (
                <div key={i}>
                    <p>{elem.name}</p>
                    <p>{elem.description}</p>
                    <p>{elem.price}</p>
                </div>
            )} )}
        </section>
    </>)
}