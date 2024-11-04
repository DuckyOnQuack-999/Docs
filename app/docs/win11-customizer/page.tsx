"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal, Shield, Settings2, Package, AlertTriangle } from "lucide-react";

export default function Win11CustomizerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Win11 Customizer Suite</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive toolkit for Windows 11 customization, system optimization, and PowerShell automation.
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
                  PowerShell Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Advanced system maintenance scripts</li>
                  <li>• Automated configuration tools</li>
                  <li>• Batch processing utilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-indigo-500" />
                  System Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Registry optimization</li>
                  <li>• Performance tweaks</li>
                  <li>• System cleanup tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-pink-500" />
                  Package Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Chocolatey integration</li>
                  <li>• Software deployment</li>
                  <li>• Update management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Security policy management</li>
                  <li>• Privacy enhancements</li>
                  <li>• System hardening tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Always create a system restore point before making system changes. The suite includes automatic backup features.
          </AlertDescription>
        </Alert>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li>Download the latest release from GitHub</li>
                <li>Run the installer with administrator privileges</li>
                <li>Follow the initial setup wizard</li>
                <li>Review and apply desired customizations</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/docs">← Back to Docs</Link>
          </Button>
          <Button asChild>
            <a href="https://github.com/DuckyOnQuack-999/Win11-Customizer-Suite" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}