import React from "react";

import { EDUCATIONS } from "../../data/educations";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationsItem } from "./educations-item";

export function Educations() {
  return (
    <Panel id="educations">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATIONS.map((education) => (
          <EducationsItem key={education.id} education={education} />
        ))}
      </div>
    </Panel>
  );
}
