import React, {memo} from "react";
import { CORE_CONCEPTS } from '../data';
import Concept from "./Concept";
import Examples from "./Examples";

const Main = memo(function Main({onHandleSelect, selectedTopic, tabContent}) {
   return <main>
            <Concept data={CORE_CONCEPTS} />
            <Examples onHandleSelect={onHandleSelect} selectedTopic={selectedTopic} tabContent={tabContent} />
         </main>
})

export default Main