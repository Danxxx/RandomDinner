/**
 * Created by danx on 14-03-14.
 */

module.exports.test = function(){
    console.log('test');
    var randomFood = food[RandomNummber()];
    return (randomFood);
}

var food = [
    {
        name: 'Bøf med løg'
    },
    {
        name: 'Kylling med Pomfritter'
    },
    {
        name: 'Flæskestag med katofler'
    },
    {
        name: 'Biksemad'
    },
    {
        name: 'Pasta med kødsovs'
    },
    {
        name: 'Kartofelmos'
    },
    {
        name: 'Boller i karry'
    },
    {
        name: 'Frikadeller med kartofler'
    },
    {
        name: 'Laks'
    },
    {
        name: 'Fiskefiller med pomfritter'
    }
];


var RandomNummber = function(){
    var num = Math.floor(Math.random() * food.length);
    console.log(num);
    return num;
};
