"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Code, GitBranch, Keyboard } from "lucide-react";

export default function PowerShellProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">PowerShell Profile</h1>
        <p className="text-lg text-muted-foreground">
          Enhanced PowerShell profile with custom functions and productivity tools.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-purple-500" />
                  Custom Commands
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Productivity aliases</li>
                  <li>• Navigation shortcuts</li>
                  <li>• System management tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-500" />
                  Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Git integration</li>
                  <li>• Project management</li>
                  <li>• Build automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-pink-500" />
                  Version Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Git shortcuts</li>
                  <li>• Branch management</li>
                  <li>• Status helpers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Keyboard className="h-5 w-5 text-green-500" />
                  Customization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Custom prompts</li>
                  <li>• Color schemes</li>
                  <li>• Keybindings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li>Clone the repository to your PowerShell profile directory</li>
                <li>Run the installation script</li>
                <li>Restart your PowerShell session</li>
                <li>Customize the profile to your needs</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/docs">← Back to Docs</Link>
          </Button>
          <Button asChild>
            <a href="https://github.com/DuckyOnQuack-999/powershell-profile" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}