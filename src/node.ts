import { Data } from "./data.js";

export class Node<V> {
    data: Data<V>
    left: Node<V> | null
    right: Node<V> | null

    constructor(data: Data<V>, left: Node<V> | null, right: Node<V> | null) {
        this.data = data
        this.left = left
        this.right = right
    }
}