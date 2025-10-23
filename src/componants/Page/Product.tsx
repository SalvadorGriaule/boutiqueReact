import { products } from "../../assets/db/produits.json"
import { useRef,useCallback, useState } from "react"

export default function Product() {
    let input = useRef<null|HTMLInputElement>(null)
    const [search,setSearch] = useState<any[]>([]);
    const searchAct = useCallback((str:string) => {
        let t = products.filter(elem => elem.name.includes(str))
        setSearch(t)
        console.log(search,t);
    },[])

    return (
        <>
            <section><input onChange={() => {searchAct(input.current?.value)}} ref={input} placeholder="recherche" type="text" /></section>
            <section className="flex flex-wrap mt-5">
                {search.length == 0 && products.map((elem) => {
                    return (<>
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
                    </>)
                })}
                {search.length != 0 && products.map((elem) => {
                    return (<>
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
                    </>)
                })}
                
            </section>
        </>
    )
}