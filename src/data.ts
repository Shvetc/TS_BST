export class Data<V> {
    key: Number
    value: V

    constructor(key: Number, value: V) {
        this.key = key
        this.value = value
    }
}