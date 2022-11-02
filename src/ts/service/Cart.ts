import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get total(): number {
        return [...this._items].reduce((sum, item) => sum + item.price, 0);
    }

    getDiscount(discount: number): number {
        return this.total * ((100 - discount) / 100)
    }

    delete(id: number): void {
        const deletedIndex = [...this._items].findIndex(item => item.id === id);
        if(deletedIndex !== -1) {
            this._items.splice(deletedIndex, 1)
        } else {
            throw new Error('No such id in cart');
        } 
    }
}