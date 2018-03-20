import $ from 'jquery';
import { createStore } from 'redux';
import inputCounter from './redux/reducers';
import { add, ded } from './redux/actions';
 
let store = createStore(inputCounter);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

$(document).ready(function(){

    let $num = $('#number');

    $('#add').click(function(){
        store.dispatch(add());
        let state = store.getState();
        $num.val(state.value);
    });

    $('#ded').click(function(){
        store.dispatch(ded());
        let state = store.getState();
        $num.val(state.value);
    });
});