
// CodeFlow Übung lev1_13: Arrays join()
console.log('CodeFlow Übung lev1_13: Arrays join()')


const meinText1 = ["Hello", "World"]
const meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
const meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = meinText1.join()
let join2 = meinText1.join("")
let join3 = meinText1.join(" ")
let join4 = meinText1.join("+")

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

let join1A = meinText3.join()
let join2A = meinText3.join("")
let join3A = meinText3.join(" ")
let join4A = meinText3.join("+")

console.log(join1A)
console.log(join2A)
console.log(join3A)
console.log(join4A)


console.log('====================================')



// CodeFlow Übung lev2_2: loop with input
console.log('CodeFlow Übung lev2_2: loop with input')


let eingabe = document.getElementById('zahl')
let outputDiv = document.getElementById('ergebnis')


const confirm = () => {
    outputDiv.innerHTML = ''
    let middleLetter = ''
    let letter = ['L', 'p']
    let la = Number(eingabe.value)

    console.log(la)
    for(let i = 1; i <= la; i++){
        middleLetter += 'o'
    }
    letter.splice(1,0, middleLetter)
    wordJoin = letter.join('')
    
    outputDiv.innerHTML = `<p> ${wordJoin} </p>`
    console.log(wordJoin)
}



console.log('====================================')



// CodeFlow Übung lev3_1: for loop string Array
console.log('CodeFlow Übung lev3_1: for loop string Array')


let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil" `



let korb = []


for(let i = 0; i < text.length / 100; i++){

    korb.push(text.slice(100 * i, 100 * (i+1)).concat(` - ${i + 1} of ${Math.ceil(text.length / 100)}`)) 
}
console.log(korb)