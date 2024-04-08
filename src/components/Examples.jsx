import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selctedTopic, setSelectedTopic] = useState();

  function handleClickEvent(elementClicked) {
    setSelectedTopic(elementClicked);
  }

  let tabContent = <p>Please select the topic</p>;

  if (selctedTopic) {
    tabContent = (
      <div className="tab">
        <h3>{EXAMPLES[selctedTopic].title}</h3>
        <p>{EXAMPLES[selctedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selctedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selctedTopic === "components"}
              onClick={() => handleClickEvent("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selctedTopic === "jsx"}
              onClick={() => handleClickEvent("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selctedTopic === "props"}
              onClick={() => handleClickEvent("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selctedTopic === "state"}
              onClick={() => handleClickEvent("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
