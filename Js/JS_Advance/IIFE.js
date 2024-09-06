// const app = (function(){
//   const cars = [];
//   return{
//     add(car){
//       cars.push(car);
//     },
//     getCars(){
//       return cars;
//     },
//     delete(index){
//       cars.splice(index,1);
//     },
//     edit(index,car){
//       cars[index] = car
//     }
//   }
// })()

// function createLogger(nameSpace){
//   function logger(message){
//     console.log(`[${nameSpace}] : ${message}`)
//   }
//   return logger
// }
// const createLogger1 = createLogger('Error') 

// createLogger1('Lỗi 1')
// createLogger1('Lỗi 2')
// createLogger1('Lỗi 3')

function createStorage(key){
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  }
  const storage = {
    get(key){
      return store[key]
    },
    set(key,value){
      store[key] = value;
      save();
    },
    delete(key){
      delete store[key];
      save();
    }
  }
  return storage
}
const profileSetting = createStorage('profile_setting');
console.log(profileSetting.delete('Age'));
console.log(profileSetting.get('Name'));
console.log(profileSetting.get('Age'));