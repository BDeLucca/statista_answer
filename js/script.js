
for (let index = 1; index < 101; index++) {
  add_fizz_buzz(index);
}

function add_fizz_buzz (num) {
  const newLi = document.createElement("li");
  newLi.classList.add("fizzBuzzList_ul_li");
  let content_li;
  
  // Check which content to add
  if (num % 3 == 0 && num % 5 == 0) {
      content_li = document.createTextNode("FizzBuzz");
  } else if (num % 3 == 0) {
      content_li = document.createTextNode("Fizz");
  } else if (num % 5 == 0) {
      content_li = document.createTextNode("Buzz");
  } else {
      content_li = document.createTextNode(num);
  }

  newLi.appendChild(content_li);

  // add the li to the DOM
  const fizzBuzzList_ul = document.getElementsByClassName("fizzBuzzList_ul")[0];
  fizzBuzzList_ul.appendChild(newLi);

}
