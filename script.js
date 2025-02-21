console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let btn = document.querySelector("#Location")

let p = document.querySelector("#locationText")

btn.addEventListener('click', function(event){
  p.textContent = "1300 Boynton Ave moving soon!"
})





// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence

let s = document.querySelector("#selfawareness")
let c = document.querySelector("#consistency")
let o = document.querySelector("#ownership")
let r = document.querySelector("#resilience")
let e = document.querySelector("#excellence")



s.addEventListener('click',function(event){
 s.textContent = "Self Awareness" 
})

c.addEventListener('click',function(event){
 c.textContent = "consistency" 
})

o.addEventListener('click',function(event){
 o.textContent = "ownership" 
})

r.addEventListener('click',function(event){
 r.textContent = "resilience" 
})

e.addEventListener('click',function(event){
 e.textContent = "excellence" 
})
// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp


let img = document.getElementById("img1")

let img2 = document.getElementById("img2")


img.addEventListener('mouseover',function(event){
  img.src = "joggers-front.webp"
})


img.addEventListener('mouseout',function(event){
  img.src = "joggers-back.webp"
})

img2.addEventListener('mouseover',function(event){
  img2.src = "sweater-front.webp"
})

img2.addEventListener('mouseout',function(event){
  img2.src = "sweater-back.webp"
})


// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)





