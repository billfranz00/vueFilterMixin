export const fruitMixin =  {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruit() {
            return this.fruits.filter((fruit) => {
                return fruit.match(this.filterText);
            });
        }
    },
    created() {
        console.log("fruitMixin Added Brah!!!");
    }
}