"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/



function LinkedList() {
  this.head = null;
  this._length = 0;
}
function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(data){
    let node = new Node(data);

    let current = this.head;
    if(!current){
        this.head = node;
        this._length++;
        return node;
    }
    while(current.next){
        current = current.next;
    }
    current.next = node;
    return node;
};

LinkedList.prototype.remove = function(){
    let current = this.head;
if(current === null) return null;

else if(current && !current.next){
    let aux = current.value;
    this.head = null;
    this._length--;
    return aux;
}

while(current.next.next){
    current = current.next;
}
let aux =current.next.value;
current.next = null;
this._length--;
return aux;

};

LinkedList.prototype.search = function(value){
    if(this.head === null) return null;
    let current = this.head;
    while(current){
        if(current.value === value) return current.value;
        else if(typeof value == 'function'){
            if(value(current.value)){
                return current.value;
            }
        }
        current = current.next;
    }
    return null;
};
/*
class Node {
  // constructor
  constructor(element) {
      this.element = element;
      this.next = null
  }
}
// linkedlist class
class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  // adds an element at the end
  // of list
  add(element) {
      // creates a new node
      var node = new Node(element);

      // to store current node
      var current;

      // if list is Empty add the
      // element and make it head
      if (this.head == null)
          this.head = node;
      else {
          current = this.head;

          // iterate to the end of the
          // list
          while (current.next) {
              current = current.next;
          }

          // add node
          current.next = node;
      }
      this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
      if (index < 0 || index > this.size)
          return console.log("Please enter a valid index.");
      else {
          // creates a new node
          var node = new Node(element);
          var curr, prev;

          curr = this.head;

          // add the element to the
          // first index
          if (index == 0) {
              node.next = this.head;
              this.head = node;
          } else {
              curr = this.head;
              var it = 0;

              // iterate over the list to find
              // the position to insert
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }

              // adding an element
              node.next = curr;
              prev.next = node;
          }
          this.size++;
      }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
      if (index < 0 || index >= this.size)
          return console.log("Please Enter a valid index");
      else {
          var curr, prev, it = 0;
          curr = this.head;
          prev = curr;

          // deleting first element
          if (index === 0) {
              this.head = curr.next;
          } else {
              // iterate over the list to the
              // position to removce an element
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }

              // remove the element
              prev.next = curr.next;
          }
          this.size--;

          // return the remove element
          return curr.element;
      }
  }

  // removes a given element from the
  // list
  removeElement(element) {
      var current = this.head;
      var prev = null;

      // iterate over the list
      while (current != null) {
          // comparing element with current
          // element if found then remove the
          // and return true
          if (current.element === element) {
              if (prev == null) {
                  this.head = current.next;
              } else {
                  prev.next = current.next;
              }
              this.size--;
              return current.element;
          }
          prev = current;
          current = current.next;
      }
      return -1;
  }


  // finds the index of element
  indexOf(element) {
      var count = 0;
      var current = this.head;

      // iterae over the list
      while (current != null) {
          // compare each element of the list
          // with given element
          if (current.element === element)
              return count;
          count++;
          current = current.next;
      }

      // not found
      return -1;
  }

  // checks the list for empty
  isEmpty() {
      return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
      console.log(this.size);
  }


  // prints the list items
  printList() {
      var curr = this.head;
      var str = "";
      while (curr) {
          str += curr.element + " ";
          curr = curr.next;
      }
      console.log(str);
  }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();

*/
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
}
HashTable.prototype.hash = function(key){
    let sum = 0;
    for(let i=0; i<key.length; i++){
        sum+=key.charCodeAt(i);
    }
    return sum%this.numBuckets;
};
HashTable.prototype.set = function(key, value){
    if(typeof key !== 'string') throw new TypeError('keys must be string')
    let i = this.hash(key); //donde guardarlo!

    if(this.buckets[i] === undefined){
        this.buckets[i]={};
    }
    this.buckets[i][key]=value;
};
HashTable.prototype.get = function(key){
    let i = this.hash(key);
    return this.buckets[i][key];
};

HashTable.prototype.hasKey = function(key){
    let i = this.hash(key);
    return this.buckets[i].hasOwnProperty(key);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
