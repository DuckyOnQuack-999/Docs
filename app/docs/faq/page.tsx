"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScriptDetails } from "@/components/script-details";
import {
  AlertTriangle,
  Shield,
  Terminal,
  Wrench,
  HelpCircle,
  Settings,
  MonitorCheck,
  FileCode,
  Database
} from "lucide-react";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="general">
            <HelpCircle className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="scripts">
            <Terminal className="h-4 w-4 mr-2" />
            Scripts
          </TabsTrigger>
          <TabsTrigger value="technical">
            <Wrench className="h-4 w-4 mr-2" />
            Technical
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Is Win11 Customizer Suite safe to use?</h3>
                  <p className="text-muted-foreground">
                    Yes, Win11 Customizer Suite is completely safe. We recommend creating a system restore point before making changes, which our application helps you do automatically.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Can I undo the changes?</h3>
                  <p className="text-muted-foreground">
                    Yes, all changes can be reverted either through the application or by using the created system restore point.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Will it work with Windows 11 updates?</h3>
                  <p className="text-muted-foreground">
                    Yes, we regularly update Win11 Customizer Suite to ensure compatibility with the latest Windows 11 updates.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <HelpCircle className="h-4 w-4" />
              <AlertTitle>Need More Help?</AlertTitle>
              <AlertDescription>
                Join our community Discord server or create an issue on GitHub for additional support.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <TabsContent value="scripts">
          <div className="space-y-6">
            <ScriptDetails
              name="Reset-ImmersiveControlPanel.ps1"
              description="Resets and repairs the Windows 11 Settings app (Immersive Control Panel) when it's not functioning correctly."
              usage=".\Reset-ImmersiveControlPanel.ps1"
              requirements={[
                "Windows 11",
                "Administrator privileges",
                "PowerShell 5.1 or later"
              ]}
              warnings={[
                "Close all instances of the Settings app before running",
                "May reset some Settings app preferences"
              ]}
              tags={["System", "Repair", "Settings"]}
            />

            <ScriptDetails
              name="WinRepairKitPro.ps1"
              description="Comprehensive system repair toolkit for Windows 11, including registry fixes, system file repairs, and Windows Update troubleshooting."
              usage=".\WinRepairKitPro.ps1 [-Mode Basic|Advanced] [-SkipBackup]"
              requirements={[
                "Windows 11",
                "Administrator privileges",
                "Internet connection for updates"
              ]}
              warnings={[
                "Create a system restore point before running",
                "Some repairs may require a system restart"
              ]}
              tags={["Repair", "System", "Advanced"]}
            />
          </div>
        </TabsContent>

        <TabsContent value="technical">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-500" />
                  System Modifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What system files are modified?</h3>
                  <p className="text-muted-foreground">
                    The suite primarily modifies registry entries, system policies, and user preferences. System files are never directly modified.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Are modifications reversible?</h3>
                  <p className="text-muted-foreground">
                    Yes, all changes are logged and can be reverted. System restore points provide additional backup.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-500" />
                  Data & Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Where are settings stored?</h3>
                  <p className="text-muted-foreground">
                    Settings are stored in the user's AppData folder and system registry. Configurations are backed up before modifications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="space-y-6">
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important Security Notice</AlertTitle>
              <AlertDescription>
                Always download Win11 Customizer Suite from our official GitHub repository to ensure security.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  Security Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How are system changes secured?</h3>
                  <p className="text-muted-foreground">
                    All system modifications require explicit user confirmation and administrator privileges. Changes are logged and can be audited.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is my data safe?</h3>
                  <p className="text-muted-foreground">
                    The suite doesn't collect or transmit any personal data. All operations are performed locally on your system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-12">
        <Button asChild variant="outline">
          <Link href="/docs/features">← Features</Link>
        </Button>
        <Button asChild>
          <Link href="/docs">Back to Docs</Link>
        </Button>
      </div>
    </div>
  );
}