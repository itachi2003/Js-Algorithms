// You create a new Map named map with initial entries: 'a' is associated with value 1 and 'b' is associated with value 2.
const map = new Map([['a', 1], ['b', 2]])

// You add a new entry to the map: 'c' is associated with value 3.
map.set('c',3)

// You remove the entry with key 'a' from the map.
map.delete('a')

// You check if the map contains an entry with key 'a'. Since you deleted the 'a' entry earlier, this will output false.
console.log(map.has('a'))

// You display the number of entries in the map using the size property. In this case, there are two entries left ('b' and 'c'), so the output will be 2.
console.log(map.size)

// You clear all entries from the map, making it empty.
map.clear()
for(const [key, value] of map) {
  console.log(`${key} : ${value}`)
}
