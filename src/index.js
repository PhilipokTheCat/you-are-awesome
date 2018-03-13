// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {return name;};

const createNotEnumerableProperty = (propName) => {
    Object.defineProperty(Object.prototype, propName, {
        get: () => i1,
        set: (i) => {i1 = i},
    })
    return propName;
};

const createProtoMagicObject = () => {
    let obj = function(){};
    obj.__proto__ = obj.prototype;
    return obj;
};

let inc = 0;
const incrementor = () => {inc++; return incrementor};
incrementor.valueOf = () => inc;

let inc1 = 0;
const asyncIncrementor = () => {inc1++; return inc1;};

const createIncrementer = () => {
    let increment = 1;
    function* next(){
        while(true) yield increment++;
    }
    return next();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(param)}, 1000);
    });
    promise.then(
        result => result,
        error => 'something went wrong'
    );
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let sum = 0;
    for (let i of Object.values(obj)){
        sum++;
        if (Object.values(i).length > 0) sum += getDeepPropertiesCount(i);
    }
    return sum;
};
const createSerializedObject = () => {return Object.getPrototypeOf({})};

const isProtoLower = (first, second) => {
    if (Object.getOwnPropertyNames(first.__proto__).length === 0)
        if (first.__proto__ === second) return true;
        else return isProtoLower(first.__proto__, second);
    else return false;
};
const sortByProto = (arr) => {
    let temp;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-1; j++){
            console.log(arr[j], arr[j+1])
            if (!isProtoLower(arr[j], arr[j+1])){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;