"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Download, 
  Shield, 
  CheckCircle2, 
  AlertTriangle,
  MonitorCheck,
  Cpu,
  HardDrive,
  UserCheck
} from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Getting Started</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-lg">
                  Download the latest release of Win11 Customizer Suite:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    <a 
                      href="https://github.com/DuckyOnQuack-999/Win11-Customizer-Suite/releases/latest" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Latest Release
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a 
                      href="https://github.com/DuckyOnQuack-999/Win11-Customizer-Suite#installation" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Installation Guide
                    </a>
                  </Button>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Always run the installer with administrator privileges for proper functionality.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MonitorCheck className="h-5 w-5 text-green-500" />
                  Operating System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Windows 11 (all editions)</p>
                <p className="text-sm text-muted-foreground mt-2">Build 22000 or later</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-500" />
                  Hardware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>4GB RAM minimum</p>
                <p className="text-sm text-muted-foreground mt-2">8GB RAM recommended</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-purple-500" />
                  Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>100MB free space</p>
                <p className="text-sm text-muted-foreground mt-2">SSD recommended</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-indigo-500" />
                  Permissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Administrator access</p>
                <p className="text-sm text-muted-foreground mt-2">Required for system changes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">First Steps</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Create a System Restore Point</h3>
                    <p className="text-muted-foreground">
                      Always create a restore point before making system changes. Our app will guide you through this process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Run Initial System Analysis</h3>
                    <p className="text-muted-foreground">
                      Let the app analyze your system to recommend optimal settings and tweaks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Review and Apply Changes</h3>
                    <p className="text-muted-foreground">
                      Browse through available customization options and apply changes gradually.
                    </p>
                  </div>
                </div>

                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Recommendation</AlertTitle>
                  <AlertDescription>
                    Apply changes in small batches and test system stability after each major modification.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between mt-8">
          <Button asChild variant="outline">
            <Link href="/docs">← Back to Docs</Link>
          </Button>
          <Button asChild>
            <Link href="/docs/features">Features →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}