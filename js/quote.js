var myText = ["Design is thinking made visual.", "Work? It’s just serious play.", "I want everything we do to be beautiful. I don’t give a damn whether the client understands that that’s worth anything, or that the client thinks it’s worth anything, or whether it is worth anything. It’s worth it to me. It’s the way I want to live my life. I want to make beautiful things, even if nobody cares.", "Interesting things happen when the creative impulse is cultivated with curiosity, freedom and intensity.", "Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure."];
var q_counter = 0;
var q_elem = document.getElementsByClassName("quotes");
var inst = setInterval(change, 1500);


function change() {
  q_elem[0].innerHTML = myText[q_counter];
  q_counter++;
  if (q_counter >= myText.length) 
    q_counter = 0;
}
