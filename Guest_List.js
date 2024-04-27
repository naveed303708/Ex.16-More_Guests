"use strict";
let Guest_List = ['jahanzain', 'ali', 'salman', 'mehran'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// 
let absent_Guest = 'imran khan';
let new_Guest = 'kamran tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest}is not coming to the party.`);
console.log('Good News! we find big Table so we are inviting 3 more guests.');
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Asad ali');
Guest_List.push('Nawaz sharif');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
