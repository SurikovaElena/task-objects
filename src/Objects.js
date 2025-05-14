/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
  if (data) {
    if (data.gender && data.gender == 'female') {
      if (data.age) {
        delete data.age;
      }
    } else if ( data.gender && data.gender == 'male') {
      if (!data.income) {
        data.income = 100000; }
    }
    return data;
  }  
  else {
    return "Объект не найден";
  }

}


/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
  let keys1 = Object.keys(obj1),
      keys2 = Object.keys(obj2),
      keys3 = Object.keys(obj3); 
  let keys = [...keys1, ...keys2, ...keys3].sort();
  let uniqueKeys = keys.filter((key, index) => (keys.indexOf(key) == index));
  return uniqueKeys;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
let arrayCloneObject = [];
for (let i = 0; i < count; i++){
  arrayCloneObject[i] = { id: i, ...obj};
}
return arrayCloneObject; 
}




