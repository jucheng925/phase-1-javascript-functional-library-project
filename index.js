function myEach(collection, callback) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection);
        iterate(convertedArray, callback);
        return collection
    }
    else iterate(collection, callback);
    return collection;
}

function iterate(array, callback) {
    for(const number of array) {
        callback(number)
    }
}


function myMap(collection, callback) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection);
        return convert(convertedArray, callback)
    }
    else return convert(collection, callback)
}

function convert(array, callback) {
    const newArray = []
    for(const number of array) {
        newArray.push(callback(number))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection);
        return reduce(convertedArray, callback, acc)
    }
    else return reduce(collection, callback, acc)
}

//callback(acc, element, collection)
function reduce(array, callback, acc) {
    if (acc === undefined) {
        acc = array[0]
        array = array.slice(1)
    }
    for (const number of array) {
        acc = callback(acc, number, array)
        //console.log(`Current acc: ${acc}  current number: ${number}`)
    }
    return acc
}

function myFind(collection, predicate) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection);
        return find(convertedArray, predicate)
    }
    else return find(collection, predicate)
}
function find(array, predicate) {
    for (const number of array){
        if (predicate(number)){
            return number
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection);
        return filter(convertedArray, predicate)
    }
    else return filter(collection, predicate)
}
function filter(array, predicate) {
    const collectingArray = []
    for (const number of array) {
        if (predicate(number)) {
            collectingArray.push(number)
        }
    }
    return collectingArray
}

function mySize(collection) {
    if (!(Array.isArray(collection))) {
        const convertedArray = Object.values(collection)
        return convertedArray.length
    }
    else return collection.length
}

function myFirst(array, num) {
    if (num === undefined){
        const copyOfArray = [...array]
        return copyOfArray.shift()
    }
    else return array.slice(0, num)
}

function myLast(array, num) {
    if (num === undefined){
        const copyOfArray = [...array]
        return copyOfArray.pop()
    }
    else return array.slice(-num)
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}