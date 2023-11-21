function getBadge(percent:number) {
let badge = 'Start'
 if(percent <= 5){
     badge = 'Begineer'
 }
 else if (percent > 5 && percent <= 10){
     badge = 'Good Start'
 }
 else if ( percent > 10 && percent <= 15){
     badge = 'Moving Up'
 }
 else if(percent > 15 && percent <= 20){
     badge = 'Good'
 }
 else if(percent > 20 && percent <= 25){
     badge = 'Solid'
 }
 else if(percent > 25 && percent <= 30){
     badge = 'Nice'
 }
 else if (percent > 30 && percent <= 35){
     badge = 'Great'
 }
 else if(percent > 35 && percent <= 40){
     badge = 'Amazing'
 }
 else if(percent > 40 && percent <= 45){
     badge = 'Genius'
    }
    return badge
}

function capitalizeWord(word: string) {
  return word.charAt(0) + word.slice(1).toLowerCase();
}

function getRoute(path: string) {
    console.log(path.split('/'))
    if (path.split('/').length > 4) {
        return path.split('/').unshift()
    }
    else {
        return 'overview'
    }
}

export { getBadge, capitalizeWord, getRoute }