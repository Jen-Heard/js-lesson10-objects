const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
    topic: "JS",
    learningGoals: ["complete JS basics course", "go through all material a second time", "complete JS projects", "complete JS React course"],
    category: "Front End Developer",
    topicImportance: "High",
    }; 
    console.log(learning);
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");