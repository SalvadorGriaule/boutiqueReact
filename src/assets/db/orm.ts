import { categories, products } from "./produits.json"

const listCatg = (): Map<string, { len: number, name: string }> => {
    let catg = new Map()
    for (let elem of categories) {
        catg.set(elem.id, { len: products.filter((elemPr) => elemPr.category == elem.id).length, name: elem.name })
    }
    return catg
}

const productByCatg = (catg: string) => {console.log(catg.categId);

    return products.filter(elemPr => elemPr.category == catg.categId)
}

export { listCatg, productByCatg }