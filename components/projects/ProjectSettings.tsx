import React from "react";
import { Project } from "@prisma/client";
import Tabs from "@/components/settings/Tabs";

type ActiveType = "general" | "branches" | "danger";

interface SettingsProps {
  projects: Project[];
  currentProject: Project;
  active: ActiveType;
  children?: React.ReactNode;
}

const ProjectSettings = ({
  projects,
  currentProject,
  active,
  children,
}: SettingsProps) => {
  const tabData = React.useMemo(
    () => [
      {
        id: "general",
        name: "General settings",
        href: `/projects/${currentProject.id}/settings`,
      },
      {
        id: "branches",
        name: "Protected branches",
        href: `/projects/${currentProject.id}/settings/protected-branch`,
      },
      {
        id: "danger",
        name: "Danger zone",
        href: `/projects/${currentProject.id}/settings/danger`,
      },
    ],
    [currentProject.id],
  );

  return (
    <>
      <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2 lg:w-1/3">
        <Tabs active={active} options={tabData} />
      </div>

      <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2 lg:w-2/3">
        {children}
      </div>
    </>
  );
};

export default ProjectSettings;
