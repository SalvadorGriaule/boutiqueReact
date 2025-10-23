import { listCatg } from "../../assets/db/orm";
import { Link } from "react-router";

export default function Catg() {
    const catg = listCatg()
    return (<>
        <section className="flex space-x-0.5 w-screen mt-2">
            {[...catg.entries()].map((elem,i) => {
                return (
                    <Link className="w-[23%]" to={`/categorie/${elem[0]}`}>
                    <div key={i} className="flex justify-between w-full bg-linear-to-br from-slate-600 to-slate-800 text-white rounded-2xl m-2 p-3">
                        <p>{elem[1].name}</p>
                        <p className="bg-white text-black p-2 rounded-full">{elem[1].len}</p>
                    </div>
                    </Link>
                )
            })}
        </section>
    </>)
}