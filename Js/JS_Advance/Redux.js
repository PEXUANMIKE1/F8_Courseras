// import { createStore } from 'https://cdn.skypack.dev/redux';

////////////////////////////// MY REDUX /////////////////////////////
function createStore(reducer){
  let state = reducer(undefined, {});
  const subscribers = [];

  return {
    getState(){
      return state;
    },
    dispatch(action){
      state = reducer(state, action);
      subscribers.forEach(subscriber => subscriber());
    },
    subscribe(subscriber){
      subscribers.push(subscriber);
    }
  }
}


////////////////////////////// MY APP ///////////////////////////////
const initState = 0

//reducer
function bankreducer(state = initState, action){
  switch (action.type){
    case 'DEPOSIT':
      return state + action.payload
    case 'WITHDRAW':
      return state - action.payload
    default:
      return state
  }
}

//store 
const store = window.store = createStore(bankreducer)
//tạo ra reducer trong store

//action
function actionDeposit(payload){
  return {
    type: 'DEPOSIT',
    payload
  }
}
function actionWithdraw(payload){
  return {
    type: 'WITHDRAW',
    payload
  }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

// event
deposit.onclick = function() {
  store.dispatch(actionDeposit(10))
}
withdraw.onclick = function() {
  store.dispatch(actionWithdraw(10)) 
}
// dispatch sẽ bắn action trong nó vào reducer

//render
function render() {
  const output = document.querySelector('#output');
  output.innerHTML = store.getState(); //store.getState() trả về state trong reducer
}
render() 

//dùng subscribe để trả ra thông tin mỗi khi có thay đổi
store.subscribe(()=>{
  render()
})