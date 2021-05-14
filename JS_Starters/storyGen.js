document.addEventListener("DOMContentLoaded",function(){
    const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');
    
    function randomValueFromArray(array){
      const random = Math.floor(Math.random()*array.length);
      return array[random];
    }
    let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
    let insertY = ['the soup kitchen','Disneyland','the White House'];
    let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'] ;
    
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
    
    randomize.addEventListener('click', result);
    
    function result() {
    
      if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
        customName.value = "";
    
      }
        newStory = storyText;
        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':inserty:',yItem);
        newStory = newStory.replace(':insertz:',zItem);
      if(document.getElementById("uk").checked) {
        let weight = Math.round(300*0.0714286);
        let temperature =  Math.round(34.4444);
        newStory = newStory.replace('fahrenheit','centigrade');
        newStory = newStory.replace('pounds','stone');
        console.log("when uk is ticked")
        newStory = newStory.replace('94',temperature);
        newStory = newStory.replace('300',weight);
      }
      story.textContent = newStory;
      story.style.visibility = 'visible';
    
    }
})









