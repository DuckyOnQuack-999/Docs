"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wrench, Shield, Package, HardDrive, AlertTriangle } from "lucide-react";

export default function WinKitPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">WinKit</h1>
        <p className="text-lg text-muted-foreground">
          Essential toolkit for Windows system maintenance and optimization.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-purple-500" />
                  System Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• System file repair</li>
                  <li>• Disk cleanup tools</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-indigo-500" />
                  Security Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Malware scanning</li>
                  <li>• Security policy management</li>
                  <li>• System integrity checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-pink-500" />
                  Software Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Package cleanup</li>
                  <li>• Update management</li>
                  <li>• Software deployment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-green-500" />
                  Storage Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Disk analysis</li>
                  <li>• Storage optimization</li>
                  <li>• Cleanup automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            WinKit includes powerful system modification tools. Always review changes before applying them.
          </AlertDescription>
        </Alert>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage Guide</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li>Clone the repository or download the latest release</li>
                <li>Run scripts with administrator privileges</li>
                <li>Select desired maintenance tasks</li>
                <li>Review and confirm system changes</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/docs">← Back to Docs</Link>
          </Button>
          <Button asChild>
            <a href="https://github.com/DuckyOnQuack-999/WinKit" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}