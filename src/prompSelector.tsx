import { JSX, useState } from "react";
import Button from "react-bootstrap/Button";

interface PromptSelectorProps {}

function PromptSelector(props: PromptSelectorProps) {
  const [category, setCategory] = useState("General");

  function renderPrompts(): JSX.Element {
    switch (category) {
      case "Programming":
        return programmingPrompts;
      case "General":
        return generalPrompts;
      case "Math":
        return mathPrompts;
      case "Science":
        return sciencePrompts;
      default:
        return <p>Error: No prompts selected</p>;
    }
  }

  return (
    <div
      id="promptArea"
      className="contentContainer d-flex flex-column gap-3 flex-grow-1 justify-content-start"
    >
      <div>
        <i>Copy and paste these prompts, or come up with your own!</i>
      </div>
      <div id="buttonContainer" className="d-flex gap-1">
        <Button
          className="btn btn-info"
          active={category === "General"}
          onClick={() => setCategory("General")}
        >
          General
        </Button>
        <Button
          className="btn btn-info"
          active={category === "Programming"}
          onClick={() => setCategory("Programming")}
        >
          Programming
        </Button>
        <Button
          className="btn btn-info"
          active={category === "Science"}
          onClick={() => setCategory("Science")}
        >
          Science
        </Button>
        <Button
          className="btn btn-info"
          active={category === "Math"}
          onClick={() => setCategory("Math")}
        >
          Math
        </Button>
      </div>
      {renderPrompts()}
    </div>
  );
}

const generalPrompts: JSX.Element = (
  <div className="prompts">
    <div>
      How can adding a new road to a congested traffic network actually increase
      the average travel time for everyone?
    </div>
    <div>
      If the universe is infinite and full of stars, why is the night sky black
      instead of blindingly bright at every single point?
    </div>
    <div>
      Is gold rare because there is little of it, or because it is hard to
      reach? We can actually create gold from other elements in a lab—so why
      don't we?
    </div>
    <div>
      If you try to create a perfectly accurate 2D map of the 3D Earth, you must
      distort either the size or the shape of countries. Is every map you have
      ever seen "lying" to you by necessity?
    </div>
  </div>
);

const programmingPrompts: JSX.Element = (
  <div className="prompts">
    <div>Why do arrays start at index 0 instead of 1?</div>
    <div>
      When is a linked list the most efficient option for a data structure?
    </div>
    <div>
      What is the difference between composition and inheritance in Object
      Oriented Programming?
    </div>
    <div>
      Why is big O notation more important than how many seconds a program takes
      to run?
    </div>
  </div>
);

const mathPrompts: JSX.Element = (
  <div className="prompts">
    <div>
      Why does a large 16-inch pizza have more food than two 10-inch pizzas?
    </div>
    <div>
      If you tie a string tight around the Earth's equator, then add just 1
      meter to the string's length, could a mouse fit under it?
    </div>
    <div>
      In a room of just 23 people, what are the odds that two of them share a
      birthday?
    </div>
    <div>
      You’re on a game show. There are three doors: one has a car, two have
      goats. You pick a door. The host (who knows what’s behind them) opens a
      different door to reveal a goat. Should you switch?
    </div>
  </div>
);

const sciencePrompts: JSX.Element = (
  <div className="prompts">
    <div>
      If space is a vacuum, why doesn't it 'suck' the Earth's atmosphere away
      like a giant vacuum cleaner?
    </div>
    <div>
      If light is the fastest thing in the universe and has no mass, how can a
      Black Hole—which only uses gravity—trap it?
    </div>
    <div>
      If you placed a laser inside a perfectly reflective sphere, would the
      light bounce forever, or would the sphere eventually explode? Where does
      the energy "go" if it cannot escape?
    </div>
    <div>
      A single ant is simple and nearly brainless, yet an ant colony can solve
      complex logistics, bridge-building, and temperature control problems.
      Where is the "intelligence" located if no single ant knows the plan?
    </div>
  </div>
);

export default PromptSelector;
