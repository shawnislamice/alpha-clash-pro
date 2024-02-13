function hide_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function show_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

//PLayground

function get_random_alphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabet.split("");
  return alphabets[Math.floor(Math.random() * alphabets.length)]; 
}
function set_highlighter_by_id(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}
