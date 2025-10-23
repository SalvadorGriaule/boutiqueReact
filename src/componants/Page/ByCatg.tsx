import { productByCatg } from "../../assets/db/orm";
import { useParams } from "react-router";

export default function ByCatg(){
    let params = useParams()
    
    const catgChoice = productByCatg(params)
    console.log(params,catgChoice);

    return (<>
        <section className="flex flex-wrap">
            
            {catgChoice.map((elem,i) =>{ return (
                <div className="flex flex-col items-start w-[47%] bg-linear-to-br from-slate-600 to-slate-800 text-white rounded-2xl m-2 p-2 space-y-2">
                            <h1>{elem.name}</h1>
                            <div className="flex justify-center w-full">
                                <img src={elem.image} alt="" />

                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="w-fit">{elem.brand}</p>
                                <p className="w-fit">{elem.description}</p>
                                <p className="w-fit">{elem.price}</p>
                            </div>
                        </div>
            )} )}
        </section>
    </>)
}