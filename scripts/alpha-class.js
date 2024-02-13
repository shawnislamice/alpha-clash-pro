function play(){
    // document.getElementById('home-screen').classList.add('hidden')
    // document.getElementById('playground').classList.remove('hidden')
    hide_element_by_id('home-screen')
    show_element_by_id('playground')
    continue_game()
}
function continue_game(){
    const alphabet=get_random_alphabet()
    document.getElementById('display-value').innerText=alphabet.toUpperCase()
    set_highlighter_by_id(alphabet)
}