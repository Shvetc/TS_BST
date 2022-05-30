import readlineSync from "readline-sync"
import { BinarySearchTree } from "./tree.js"
import { Data } from "./data.js"
import { Menu } from "./menu.js"

let tree = new BinarySearchTree<Number, Number>()

Menu.printMenu()

let exit = false
while (!exit) {
    console.log("\n")
    let item = readlineSync.question('Choose menu item: ')
    switch (item) {
        case ("1"): {
            let inputKey = readlineSync.question('Write key (permitted type is number): ')

            if (isNaN(Number(inputKey))) {
                console.log("The key is not valid")
                continue
            }

            let key:number = Number(inputKey)
            let value:number = Number(readlineSync.question('Write value (permitted type is number): '))
            tree.add(new Data<Number>(key, value))
            break
        }
        case ("2"): {
            let inputKey = readlineSync.question('Write key (permitted type is number): ')

            if (isNaN(Number(inputKey))) {
                console.log("The key is not valid")
                break
            }

            let key:number = Number(inputKey)
            let value: Number | null = tree.find(key)

            if (value == null) {
                console.log("The tree has not node with the current key")
                break
            } else {
                console.log("Value is: " + value)
                break
            }

        }
        case ("3"): {
            let inputKey = readlineSync.question('Write key(permitted type is number): ')

            if (isNaN(Number(inputKey))) {
                console.log("The key is not valid")
                continue
            }

            let key:number = Number(inputKey)
            let value: Number | null = tree.find(key)
            let res

            if (value == null) {
                console.log("The tree has not node with the current key")
                break
            } else res = tree.remove(key)
            
            break
        }
        
        case ("4"): {
            tree.printTree()
            break
        }
       
        case ("5"): {
            exit = true
            break
        }
        default: {
            console.log("The key is not valid")
            break
        }
    }
}


 