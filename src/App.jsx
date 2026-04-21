import "./styles/styles.css";
import PromptSelector from "./prompSelector";
import Chatbot from "./chatbot";

function App() {
  return (
    <>
      <h1 id="title" className="center">
        Mind and Model
      </h1>
      <h4>Working with AI</h4>
      <div id="intro" className="d-flex flex-column gap-2">
        <div>
          This website is designed to help you practice using AI to solve
          problems. There is a rising concern, especially in software
          development, that people are becoming too reliant on AI and are losing
          critical thinking skills. However, this does not mean that it should
          be avoided completely. Instead, we should learn how to use it
          effectively to improve our problem solving abilities. Just like any
          other tool, practicing with it is the best way to become proficient.
        </div>
        <div>
          Below you will find a chatbot that you can practice with using either
          the suggested prompts or by typing your own prompt. Ask it questions,
          suggest ideas, and challenge whatever it says. The goal is treat it
          more like a brainstorming partner (that may be wrong) instead of a
          search engine like Google.
        </div>
      </div>
      <div id="bottomContainer" className="d-flex gap-5">
        <PromptSelector />
        <Chatbot />
      </div>
    </>
  );
}

export default App;
