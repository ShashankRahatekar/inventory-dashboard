import { Item } from "../ui/definitions/items.definition";

export const getInventory = async (): Promise<Item[]> => {
    return fetch('http://localhost:4000/api/items').then(res => res.json())
    .then(data => {
        return data;
    })
    .catch(err => console.log(err))
};