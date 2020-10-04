import reactimage from "../../assets/images/react-blog.png";
import reduximage from "../../assets/images/redux-blog.jpg";
import mernimage from "../../assets/images/mern-blog.png";

const myArticles = [
  {
    name: "learn-react",
    title: "The Best Way to Learn React",
    content: [
      "According to me , the key to being good at React (or any other JavaScript based framework) is being good with Javascript.",
      "By 'good', I don't mean you have to know each and every javascript concept , although it would help if you did.",
      "Therefore , before taking a deep dive into the world of React , take a week (yes , an entire week) to master all the core Javascript concepts",
      "Scopes , Arrays , Objects , Looping , Callbacks ...",
      "Look up 'ES6 features' and learn all of them and them",
      "And you should obviously be equally comfortable with HTML and CSS",
      "If you know the basics of HTML/CSS/Javascript , it wont work, you'll get stuck with small errors which is going to annoy the hell out of you",
      "Take a week or two , be amazing at HTML/CSS/JS, it will make Learning React a breeze",
      "If you've learnt all the basics well and if you are now comfortable with ES6 . React is going to be super easy.",
      "Being comfortable with Javascript makes learning React enjoyable.",
      "And one more thing. A big part of React is going to involve calling apis to get/send data . It would be highly recommended to learn how to make service calls and it would be really helpful to know about HTTP request/responses , status codes etc",
      "After this when you start learning React start with Class components. React 'Hooks' are great. And right now everyone is moving to use Hooks instead of React Classes.",
      "But if you spend some time learning React Class based components first , You will have a better understanding of how React renders components and how the 'Component Life Cycle works'.",
      "After you've learnt Class and Functional components , then proceed with more advanced topics like Hooks , Redux , Styled-Components , API calls etc.",
      "Thank you for reading.   -Aftab",
    ],
    img: reactimage,
    colorscheme: "blue-scheme",
  },
  {
    name: "learn-mern",
    title: "Getting Started With MERN",
    content: [
      "MERN Stack -one of the most popular tech stack out there.",
      "MERN (as you know ) stands for MONGODB - the database for storing records , EXPRESS - the framework used by NODE to accept requests from the front end and send back response , NODE - the backed , Its allows you to run Javascript on a server . Node along with frameworks like express can help in making apis , server side rendered web apps etc, REACT - The front end , the view-layer that a user interacts with. Send requests to Node+Express-server. Node+Express server listens to requests made by React-front-end , Node+Express-server connects to MONGODB to get the requested data , then sends it back to REACT, REACT displays the received data for the user to view.",
      "If you are comfortable with Javascript Node+Express is going to be fairly easy.",
      "And if you know what JSON is and how to iterate and play around with JSON objects , then MongoDB is fairly simple as as well",
      "This is my first MERN stack application , and it wasn't that difficult to make",
      "NODE+EXPRESS is quiet fun. The only difficulty I faced was when I was deploying this site on an aws ec2 instance. MongoDB installation on ec2 instance was a bit troublesome but I was able to figure it out eventually.",
      "I will soon create a detailed article specific to this site's development and deployment.",
      "Thank you for reading.   -Aftab",
    ],
    img: mernimage,
    colorscheme: "green-scheme",
  },
  {
    name: "learn-redux",
    title: "Redux Flow",
    content: [
      "Redux is a state management library for react. What does 'State Management' mean? ",
      "All web application have a tonne of data they store on the front end, like on an ecommerce website the website stores stuff like : whats in the users cart, whats the name of the user , users previous order history , users shopping preferences , user's reviews etc.",
      "You might say that some of this data is stored in the database , and you are right. But once React fetches the all this data from data base, it stores it in the front end as well ,for it to be displayed on the UI. All the data that the user can see and interact with on the UI forms the state of the application.",
      "As applications grow bigger and have a lot of functionalities , managing a huge tonne of data becomes really complex",
      "Since React mostly takes care of the UI , we need help from a 3rd party library to manage the state",
      "Redux state management flow is as follows: Instead of storing the state inside each component , you make the state global and call it store. Create a 'Reducer' for each kind of component , let the reducer return the initial state of that component and let the reducer modify the future state. Once all the Reducers are ready , combine them to create a 'store'.",
      "Root Reducer = combining individual Reducers (This forms your global state/store)",
      "Define Action Types and Actions , which when triggered tell the reducer to update the store.",
      "Connect your component to the redux store , and use the state values to populate the UI, each time the global state changes , it causes the UI to update as well , use Actions to trigger state change from the UI.",
      "This article briefly explains the high level flow for redux.",
      "Thank you for reading.   -Aftab",
    ],
    img: reduximage,
    colorscheme: "purple-scheme",
  },
];

export default myArticles;
