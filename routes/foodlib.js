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
        name: 'Sandwich med svinenakke og syltede rødløg',
        ing: ['Burgerbolle','Sennep','Skyr','Salatblade','Svinenakkekotelet','Persille','Syltede rødløg'],
        recipe: ''
    },
    {
        name: 'Sandwich med hamburgerryg, tomat og grønne asparges',
        ing:['Burgerbolle','Salatblade','Asparges','Salt','Rapsolie','Tomat','Mayonnaise','Hamburgerryg'],
        recipe: '1 Lun bollen. 2 Skyl og slyng salatbladene tørre. 3 Vrik asparges, og der, hvor de knækker, lad dem knække, skær rodenden til. Rist dem på en pande i lidt olie, eller læg dem i en gryde, dryp med lidt olie, drys med lidt salt, hæld kogende vand over og kog op i et minut. 4 Skær tomat i skiver. 5 Smør bollen med mayonnaise og fyld den med salat, hamburgerryg, tomat og asparges.'
    },
    {
        name: 'Kartoffelmad med rodchips',
        ing: ['Rødbeder','Jordskokker','Rapsolie','Salt','Peber','Mayonnaise','Skyr','Persille','Purløg','Rugbrød','Salatblade','Kartofler'],
        recipe: '1 Tænd ovnen på 200 grader. 2 Skræl og skær rødderne i ultrafine skiver, gerne på juliennejern eller mandolin. 3 40 skiver rødbede og 16 skiver jordskokke. 4 Læg rodskiverne på en bageplade med bagepapir. Pensl let med olie, vend skiverne og pensl let på den anden side. Krydr let med salt og peber. 5 Stil rødderne i ovnen i ca. 10 min. Tjek dem, jordskokkerne gyldne og rødbederne bølgede i kanten. Tag skiverne ud og læg dem på fedtsugende papir til afkøling og sprødhed. 6 Rør cremen: mayonnaise, skyr, finthakkede krydderurter og smag til med salt og peber. 7 Læg 4 skiver rugbrød, ovenpå salatblade, kartoffelskiver, creme og rodchips.'
    },
    {
        name: 'Bikse-deller',
        ing: ['Grønsager','Quina','Ris','Fisk','Kylling','Kød'],
        recipe: 'Mos de kogte grøntsager med en gaffel (fx: kartofler, spinat, brocolli, blomkål, gulerødder, rødbeder...). Tilføj frisk hakket løg eller forårsløg. Tilføj quinoa eller ris. Evt. hak kyllingen, fisken eller kødet. Tilføj æg, så du får farskonsistens. Tilsæt evt. lidt fuldtkornsmel. Tilsæt salt og peber efter smag. Form dellerne med en ske, og steg dellerne på en varm pande med olivenolie eller smør. De er dejlige til madpakke eller til et koldt/varmt frokost-/middagsbord. Kan serveres på rugbrød eller på tallerken med sideretter.'
    }
];

module.exports.getIngs = function(){
    var tmp = food[0].ing.slice(0);

    for(var i = 1; i < food.length; i++){
        console.log('First loop');
        for(var j = 0; j < food[i].ing.length; j++){
            console.log('Second loop')
            tmp.push(food[i].ing[j]);
            console.log(j);
        }
    }
    var arr = tmp.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
    });
    return (arr);
}


var RandomNummber = function(){
    var num = Math.floor(Math.random() * food.length);
    console.log(num);
    return num;
};

module.exports.getSpareFood = function(input){
    console.log(input.body.sparefood);
    var newArray = []
    var tmpSpareFoodwithCount = {
        food: {},
        count: 0
    }
    var sparelist = input.body.sparefood;
    for(var i = 0; i < food.length; i++){
        tmpSpareFoodwithCount = {
            food: {},
            count: 0
        }
        for(var j = 0; j < sparelist.length; j++){
            var index = food[i].ing.indexOf(sparelist[j]);
            if(index > -1){
                if(tmpSpareFoodwithCount.count == 0){
                    tmpSpareFoodwithCount.food = food[i];
                }
                tmpSpareFoodwithCount.count ++;
            }
        }
        if(tmpSpareFoodwithCount.count != 0){
            newArray.push(tmpSpareFoodwithCount);
        }
    }
    console.log(newArray);
    return (newArray);
}
