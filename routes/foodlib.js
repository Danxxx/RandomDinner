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
    }
];


var RandomNummber = function(){
    var num = Math.floor(Math.random() * 3);
    console.log(num);
    return num;
};
