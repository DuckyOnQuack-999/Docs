"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScriptCategory } from "@/components/script-category";
import {
  Terminal,
  Code,
  Settings2,
  Package,
  Wrench,
  FileCode,
  MonitorCheck,
  Shield,
  Layout,
  Database,
  GitBranch,
  Keyboard
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Features</h1>

      <Tabs defaultValue="powershell" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="powershell" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            PowerShell Scripts
          </TabsTrigger>
          <TabsTrigger value="development" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Development Tools
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" />
            System Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="powershell" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScriptCategory
              title="Package Management"
              icon={Package}
              iconColor="text-purple-500"
              description="Advanced package management and installation tools"
              tags={["Automation", "Setup"]}
              scripts={[
                "MSIX Bundle Installer v0.5",
                "Add AppDev Package Resources",
                "Python Context Menu Integration",
                "Certificate Management Tools"
              ]}
            />
            <ScriptCategory
              title="System Maintenance"
              icon={Wrench}
              iconColor="text-indigo-500"
              description="System repair and maintenance utilities"
              tags={["Repair", "Diagnostics"]}
              scripts={[
                "Windows Repair Tools",
                "Service Context Menu",
                "DLL Repair Utilities",
                "Diagnostic Reset Tools"
              ]}
            />
            <ScriptCategory
              title="Security & Policies"
              icon={Shield}
              iconColor="text-red-500"
              description="Security configurations and policy management"
              tags={["Security", "Policies"]}
              scripts={[
                "Local Policies Reset Tool",
                "Execution Policy Settings",
                "User Groups Management",
                "Security Configurations"
              ]}
            />
            <ScriptCategory
              title="Registry Management"
              icon={Database}
              iconColor="text-green-500"
              description="Windows Registry optimization and customization"
              tags={["Registry", "Tweaks"]}
              scripts={[
                "Registry Editor Tools",
                "Search Policy Reset",
                "Context Menu Customization",
                "System Settings Optimization"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="development" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScriptCategory
              title="VS Code Setup"
              icon={FileCode}
              iconColor="text-yellow-500"
              description="Visual Studio Code customization and setup"
              tags={["IDE", "Editor"]}
              scripts={[
                "Cursor Customizations",
                "Development Environment",
                "Custom Keybindings",
                "Extension Management"
              ]}
            />
            <ScriptCategory
              title="Terminal Enhancement"
              icon={MonitorCheck}
              iconColor="text-green-500"
              description="Terminal customization and profile management"
              tags={["Terminal", "Shell"]}
              scripts={[
                "PowerShell Profile Setup",
                "Terminal Themes",
                "Font Installation",
                "Preview Features"
              ]}
            />
            <ScriptCategory
              title="Git Integration"
              icon={GitBranch}
              iconColor="text-blue-500"
              description="Git and version control setup"
              tags={["VCS", "Git"]}
              scripts={[
                "Git Configuration",
                "SSH Key Setup",
                "Credential Manager",
                "Git Aliases"
              ]}
            />
            <ScriptCategory
              title="Development Tools"
              icon={Keyboard}
              iconColor="text-orange-500"
              description="Additional development tools and utilities"
              tags={["Tools", "Utilities"]}
              scripts={[
                "Python Environment Setup",
                "Node.js Configuration",
                "Development Certificates",
                "Debug Tools"
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScriptCategory
              title="System Protection"
              icon={Shield}
              iconColor="text-red-500"
              description="System security and protection features"
              tags={["Security", "Protection"]}
              scripts={[
                "Local Policy Management",
                "User Group Controls",
                "Execution Policies",
                "Security Settings"
              ]}
            />
            <ScriptCategory
              title="UI Customization"
              icon={Layout}
              iconColor="text-orange-500"
              description="Windows interface customization tools"
              tags={["UI", "Customization"]}
              scripts={[
                "Custom Fonts",
                "Registry Tweaks",
                "GUI Templates",
                "Scaling Adjustment"
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-12">
        <Button asChild variant="outline">
          <Link href="/docs/getting-started">← Getting Started</Link>
        </Button>
        <Button asChild>
          <Link href="/docs/faq">FAQ →</Link>
        </Button>
      </div>
    </div>
  );
}