import "./styles/styles.css";
import PromptSelector from "./prompSelector";
import Chatbot from "./chatbot";

function App() {

  return (
    <>
      <h1 id="title" className="center">Sample Title</h1>
      <div id="intro" className="d-flex flex-row gap-5">
        <div>
          Id et Lorem magna Lorem aliquip pariatur quis. Ex proident commodo
          excepteur velit et nulla dolor labore ea magna. Veniam fugiat dolore
          irure exercitation est. Ullamco nisi dolor ea velit amet proident
          consectetur deserunt nisi aliqua sit sit mollit ullamco. Amet et
          officia non pariatur do voluptate occaecat. Tempor amet tempor Lorem
          proident sint consectetur aliqua esse. Amet ea officia nulla consequat
          pariatur eiusmod eu anim fugiat ad voluptate deserunt est. Deserunt
          laboris Lorem enim minim dolore ad. Reprehenderit est aliquip nostrud
          quis laborum ad sint aute tempor duis cillum. Consectetur amet sunt
          elit non est nulla proident ex veniam. Dolore adipisicing voluptate
          duis deserunt laborum commodo veniam. Amet do veniam ex do voluptate
          non enim non tempor esse eiusmod.
        </div>
      </div>
      <PromptSelector />
      <Chatbot />
    </>
  );
}

export default App;
