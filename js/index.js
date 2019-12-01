// Iteration 1: Names and Input

var hacker1 = "Grecia";
console.log ("The driver's name is " + hacker1 );
var hacker2 = "Google Chrome";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +hacker1.length+  " characters.")
  } else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " +hacker2.length+  " characters.")
  } else if (hacker1.length == hacker2.length){
    console.log("Wow, you both have equally long names, " +hacker1.length+  " characters!")
  }

// Iteration 3: Loops

function mayusculas(x) {
  for(var i = 0; i < x.length; i++){
  return x.split("").join(" ").toUpperCase();
}
}
mayusculas()

function alreves(x) {
  for(var i = 0; i < x.length; i++){
  return x.split("").reverse().join(" ");
}
}
alreves()

function compare(x) {
  for(var i = 0; i < x.length; i++){
  return x.toLowerCase('').split('').sort();;
}
}
compare()

if (compare(hacker1)[0] < compare(hacker2)[0]){
  console.log("The drivers name goes first.");
} else if (compare(hacker1)[0] > compare(hacker2)[0]){
  console.log("Yo, the navigator goes first definitely.");
} else if (compare(hacker1)[0] == compare(hacker2)[0]){
  console.log("What?! You both have the same name?");
}

//Bonus 1
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus lacus quis condimentum auctor. Integer in bibendum metus. Aenean rutrum, orci mollis finibus ultrices, enim tellus condimentum neque, nec vulputate tortor tortor et nisi. Mauris diam tellus, fermentum varius egestas ut, lobortis facilisis leo. Phasellus eget nisi ac nisl suscipit scelerisque vel eu quam. Nullam porttitor nisl ac nulla imperdiet, ut viverra risus aliquet. Duis pretium arcu quis pharetra interdum. Aenean posuere aliquam dapibus. Aenean placerat odio in tellus imperdiet dapibus. Cras tincidunt hendrerit magna, a semper mi varius sed. Integer at ex nec lacus mattis vehicula nec id ligula. Cras mattis quam fringilla nulla fringilla lobortis. Nullam felis lorem, congue sit amet felis non, tristique tristique ex. Suspendisse et est luctus, porttitor metus sed, fringilla ante. Donec dignissim lacus purus, vel bibendum diam volutpat quis. Suspendisse imperdiet condimentum nisl, a consequat massa lacinia eget. Proin quis blandit ante, eget convallis magna. Proin sodales sapien sagittis vestibulum hendrerit. Nunc eget ante ut justo consequat ullamcorper. Vivamus imperdiet, urna eget ullamcorper laoreet, justo felis accumsan enim, sed bibendum lacus nibh porttitor mi. Proin posuere nunc vitae fringilla tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas aliquet laoreet commodo. Vestibulum varius, erat vitae finibus euismod, sapien libero volutpat augue, non sollicitudin urna odio a velit. Suspendisse posuere neque non ligula sodales, at consequat risus sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Duis mollis placerat lobortis.";

let newLoremIpsum = loremIpsum.split(" ");

function separarLoremIpsum(x, e) {
  let count = 0;
  for(let i = 0; i < x.length; i++){
    if (x[i] === e) count++;
  }
    return count;
}
separarLoremIpsum(newLoremIpsum, "et");