"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";

export function ProjectSwitcher({
  projects,
  isLoading = false,
  onProjectChange,
}: {
  projects: {
    id?: string;
    name: string;
  }[];
  isLoading?: boolean;
  onProjectChange?: (project: { id?: string; name: string }) => void;
}) {
  const { isMobile } = useSidebar();
  const [activeProject, setActiveProject] = React.useState<{
    id?: string;
    name: string;
  }>({ name: "Loading..." });
  const [showDialog, setShowDialog] = React.useState(false);
  const [newProjectName, setNewProjectName] = React.useState("");
  const [isCreating, setIsCreating] = React.useState(false);
  const [error, setError] = React.useState("");

  // Show dialog automatically if there are no projects and not loading
  React.useEffect(() => {
    if (!isLoading && projects.length === 0) {
      setShowDialog(true);
    }
  }, [isLoading, projects.length]);

  React.useEffect(() => {
    // Find and set the active project when projects load
    if (projects.length > 0 && !isLoading) {
      const savedProjectId = localStorage.getItem("selectedProjectId");

      if (savedProjectId) {
        // Try to find the saved project in the projects array
        const savedProject = projects.find((p) => p.id === savedProjectId);

        // If found, set it as active, otherwise use the first project
        if (savedProject) {
          setActiveProject(savedProject);
        } else {
          setActiveProject(projects[0]);
        }
      } else {
        // If no saved project, use the first project
        setActiveProject(projects[0]);
      }
    }
  }, [projects, isLoading]);

  const handleProjectChange = (project: { id?: string; name: string }) => {
    setActiveProject(project);
    if (onProjectChange) {
      onProjectChange(project);
    }
  };

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) {
      setError("Project name cannot be empty");
      return;
    }

    setIsCreating(true);
    setError("");

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to create a project");
        return;
      }

      const { data, error } = await supabase
        .from("projects")
        .insert([{ name: newProjectName.trim(), user_id: user.id }])
        .select();

      if (error) {
        console.error("Error creating project:", error);
        setError(error.message);
        return;
      }

      if (data && data.length > 0) {
        // Add the new project to the existing projects
        const newProject = data[0];
        // const updatedProjects = [...projects, newProject];

        // Update the active project
        setActiveProject(newProject);

        // Let the parent component know about the change
        if (onProjectChange) {
          onProjectChange(newProject);
        }

        // Close the dialog
        setShowDialog(false);
        setNewProjectName("");

        // Force a page refresh to update the projects list
        window.location.reload();
      }
    } catch (err) {
      console.error("Error in handleCreateProject:", err);
      setError("Failed to create project. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  if (!activeProject && projects.length > 0) {
    return null;
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                {/* Project Icon */}
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <span className="text-sidebar-primary-foreground">
                    {isLoading ? "..." : activeProject?.name?.charAt(0) || "+"}
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {isLoading
                      ? "Loading projects..."
                      : activeProject?.name || "Create Project"}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Projects
              </DropdownMenuLabel>
              {isLoading ? (
                <DropdownMenuItem className="gap-2 p-2 opacity-70">
                  Loading projects...
                </DropdownMenuItem>
              ) : projects.length > 0 ? (
                projects.map((project) => (
                  <DropdownMenuItem
                    key={project.id || project.name}
                    onClick={() => handleProjectChange(project)}
                    className="gap-2 p-2"
                  >
                    {project.name}
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuItem className="gap-2 p-2 opacity-70">
                  No projects yet
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 p-2"
                onClick={() => setShowDialog(true)}
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  Add project
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Create Project Dialog */}
      <Dialog
        open={showDialog}
        onOpenChange={(open) => {
          // Only allow closing the dialog if there are projects
          if (!open && projects.length === 0) {
            return;
          }
          setShowDialog(open);
          setError("");
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription className="text-text">
              {projects.length === 0
                ? "Let's start by creating your first project"
                : "Add a new project to your workspace"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">Project name</Label>
              <Input
                id="project-name"
                placeholder="Enter project name"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateProject();
                  }
                }}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </div>
          <DialogFooter>
            {projects.length > 0 && (
              <Button
                variant="outline"
                onClick={() => setShowDialog(false)}
                disabled={isCreating || projects.length === 0}
              >
                Cancel
              </Button>
            )}
            <Button onClick={handleCreateProject} disabled={isCreating}>
              {isCreating ? "Creating..." : "Create Project"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
