"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2, Terminal, Package, Github } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-purple-500" />
                    Win11 Customizer Suite
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive toolkit for Windows 11 customization, system optimization, and PowerShell automation.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/docs/win11-customizer">Documentation</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://github.com/DuckyOnQuack-999/Win11-Customizer-Suite" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-indigo-500" />
                    WinKit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Essential toolkit for Windows system maintenance and optimization.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/docs/winkit">Documentation</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://github.com/DuckyOnQuack-999/WinKit" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-pink-500" />
                    PowerShell Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enhanced PowerShell profile with custom functions and productivity tools.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/docs/powershell-profile">Documentation</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://github.com/DuckyOnQuack-999/powershell-profile" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/getting-started">Getting Started Guide</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/faq">FAQ</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/docs/features">Features Overview</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="https://github.com/DuckyOnQuack-999" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}