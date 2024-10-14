class Repository {
    constructor() {
        this.data = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
        ];
    }

    getAllItems() {
        return this.data;
    }

    getItemById(id) {
        return this.data.find(item => item.id);
    }

    additem(item) {
        this.data.push(item);
        return item;
    }

    deleteItemById(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.data.splice(index, 1)[0]; // Removes and returns the deleted item
        }
        return null; // Returns null if no item is found with the given id
    }
    

}

module.exports = Repository;