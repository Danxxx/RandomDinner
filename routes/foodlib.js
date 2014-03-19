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
        ing: ['burgerbolle','sennep','skyr','salatblade','svinenakkekotelet','persille','syltede rødløg'],
        recipe: ''
    },
    {
        name: 'Sandwich med hamburgerryg, tomat og grønne asparges',
        ing:['burgerbolle','salatblade','asparges','salt','rapsolie','tomat','mayonnaise','hamburgerryg'],
        recipe: '1 Lun bollen. 2 Skyl og slyng salatbladene tørre. 3 Vrik asparges, og der, hvor de knækker, lad dem knække, skær rodenden til. Rist dem på en pande i lidt olie, eller læg dem i en gryde, dryp med lidt olie, drys med lidt salt, hæld kogende vand over og kog op i et minut. 4 Skær tomat i skiver. 5 Smør bollen med mayonnaise og fyld den med salat, hamburgerryg, tomat og asparges.'
    },
    {
        name: 'Kartoffelmad med rodchips',
        ing: ['rødbeder','jordskokker','rapsolie','salt','peber','mayonnaise','skyr','persille','purløg','rugbrød','salatblade','kartofler'],
        recipe: '1 Tænd ovnen på 200 grader. 2 Skræl og skær rødderne i ultrafine skiver, gerne på juliennejern eller mandolin. 3 40 skiver rødbede og 16 skiver jordskokke. 4 Læg rodskiverne på en bageplade med bagepapir. Pensl let med olie, vend skiverne og pensl let på den anden side. Krydr let med salt og peber. 5 Stil rødderne i ovnen i ca. 10 min. Tjek dem, jordskokkerne gyldne og rødbederne bølgede i kanten. Tag skiverne ud og læg dem på fedtsugende papir til afkøling og sprødhed. 6 Rør cremen: mayonnaise, skyr, finthakkede krydderurter og smag til med salt og peber. 7 Læg 4 skiver rugbrød, ovenpå salatblade, kartoffelskiver, creme og rodchips.'
    },
    {
        name: 'Bikse-deller',
        ing: ['Grønsager','quina','ris','fisk','kylling','kød'],
        recipe: 'Mos de kogte grøntsager med en gaffel (fx: kartofler, spinat, brocolli, blomkål, gulerødder, rødbeder...). Tilføj frisk hakket løg eller forårsløg. Tilføj quinoa eller ris. Evt. hak kyllingen, fisken eller kødet. Tilføj æg, så du får farskonsistens. Tilsæt evt. lidt fuldtkornsmel. Tilsæt salt og peber efter smag. Form dellerne med en ske, og steg dellerne på en varm pande med olivenolie eller smør. De er dejlige til madpakke eller til et koldt/varmt frokost-/middagsbord. Kan serveres på rugbrød eller på tallerken med sideretter.'
    }
];

module.exports.getIngs = function(){
    var master = food[0].ing;

    master.push('Test');
    for(var i = 1; i < food.length; i++){
        console.log('First loop');
        for(var j = 0; j < food[i].ing.length; j++){
            console.log('Second loop')
            master.push(food[i].ing[j]);
            console.log(j);
        }
    }
    return (master);
}


var RandomNummber = function(){
    var num = Math.floor(Math.random() * food.length);
    console.log(num);
    return num;
};
