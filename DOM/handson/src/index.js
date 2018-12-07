function sayGreet(){
    alert('Greet')
}
//W3C model
const btn = document.querySelector('#btn');

const callback=function(){
    alert("Hi")
};
btn.addEventListener('click',callback);
btn.addEventListener('click',function(){
    alert('Hey');
});

const component ={
    sayHello:function(name){
        alert('Iam from Compnent'+name);
    }
}
const btnNew=document.querySelector("#hellobtn");
//Fill the code : Make component sayHello as listener.
component.bind(sayHello,'Vinamra')
btnNew.addEventListener('click',component.sayHello);