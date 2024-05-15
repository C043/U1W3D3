const taskMaker = document.getElementById("task-maker");

// logica per la to-do list e per il task-maker
taskMaker.addEventListener("submit", function (event) {
  event.preventDefault();
  const customTask = document.getElementById("custom-task");
  const list = document.getElementById("list");
  // create elements
  const div = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", function () {
    check.parentNode.classList.add("fade-out");
    setTimeout(function () {
      check.parentNode.remove();
    }, 1000);
  });
  const task = document.createElement("p");
  task.classList.add("task");
  task.addEventListener("click", function (event) {
    task.classList.toggle("crossed");
  });
  // rende la prima lettera della task maiuscola di default
  const upperCase =
    customTask.value.slice(0, 1).toUpperCase() + customTask.value.slice(1);
  task.innerText = upperCase;
  // mette sulla stessa linea il checkbox e la task
  check.classList.add("inline");
  task.classList.add("inline");
  // append elements
  div.append(check, task);
  list.append(div);
  //reset form
  taskMaker.reset();
});

const randomMotivation = function () {
  const motivationalQuotes = [
    "It takes courage to grow up and become who you really are.",
    "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go.",
    "Attitude is a little thing that makes a big difference.",
    "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Don't sit down and wait for the opportunities to come. Get up and make them.",
    "Champions keep playing until they get it right.",
    "I am lucky that whatever fear I have inside me, my desire to win is always stronger.",
    "You are never too old to set another goal or to dream a new dream.",
    "It is during our darkest moments that we must focus to see the light.",
    "Believe you can and you're halfway there.",
    "Life shrinks or expands in proportion to one’s courage.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    "Try to be a rainbow in someone's cloud.",
    "If you don't like the road you're walking, start paving another one.",
    "Real change, enduring change, happens one step at a time.",
    "All dreams are within reach. All you have to do is keep moving towards them.",
    "It is never too late to be what you might have been.",
    "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.",
    "Give light and people will find the way.",
    "It always seems impossible until it's done.",
    "Don’t count the days, make the days count.",
    "If you risk nothing, then you risk everything.",
    "Definitions belong to the definers, not the defined.",
    "When you have a dream, you've got to grab it and never let go.",
    "Never allow a person to tell you no who doesn’t have the power to say yes.",
    "When it comes to luck, you make your own.",
    "If you're having fun, that's when the best memories are built.",
    "Failure is the condiment that gives success its flavor.",
    "Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it.",
    "Your story is what you have, what you will always have. It is something to own.",
    "To live is the rarest thing in the world. Most people just exist.",
    "You define beauty yourself, society doesn’t define your beauty.",
    "Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you.",
    "You just gotta keep going and fighting for everything, and one day you’ll get to where you want.",
    "If you prioritize yourself, you are going to save yourself.",
    "No matter how far away from yourself you may have strayed, there is always a path back. You already know who you are and how to fulfill your destiny.",
    "A problem is a chance for you to do your best.",
    "You can’t turn back the clock. But you can wind it up again.",
    "When you can’t find someone to follow, you have to find a way to lead by example.",
    "There is no better compass than compassion.",
    "Stand before the people you fear and speak your mind – even if your voice shakes.",
    "It’s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It’s to be whole.",
    "Vitality shows not only in the ability to persist but in the ability to start over.",
    "The most common way people give up their power is by thinking they don’t have any.",
    "Love yourself first and everything else falls into line.",
    "In three words I can sum up everything I've learned about life: It goes on.",
  ];
  const randomQuote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const subTitle = document.createElement("p");
  subTitle.innerText = "''" + randomQuote + "''";
  return subTitle;
};

const header = document.getElementsByTagName("header")[0];

header.appendChild(randomMotivation());
