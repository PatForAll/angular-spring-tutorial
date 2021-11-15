let sportsOne: string[] = ['Golf', 'Cricket', 'Tennis', 'Swimming'];

/*
for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/

for (let sport of sportsOne) {
    if (sport === 'Cricket') console.log(`${sport} --> MY FAVOURITE!`)
    else console.log(sport);
}