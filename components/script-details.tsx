"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, Info, Copy, Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ScriptDetailsProps {
  name: string;
  description: string;
  usage: string;
  requirements?: string[];
  warnings?: string[];
  tags?: string[];
}

export function ScriptDetails({
  name,
  description,
  usage,
  requirements,
  warnings,
  tags
}: ScriptDetailsProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="mb-6 gradient-border">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="font-mono gradient-text">{name}</CardTitle>
          {tags && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-secondary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Usage</h4>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
          </div>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
            <code>{usage}</code>
          </pre>
        </div>

        {requirements && (
          <div className="space-y-2">
            <Alert className="bg-primary/5 border-primary/20">
              <Info className="h-4 w-4 text-primary" />
              <AlertDescription>
                <span className="font-semibold">Requirements:</span>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {requirements.map((req) => (
                    <li key={req} className="text-muted-foreground">{req}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {warnings && warnings.length > 0 && (
          <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1">
                {warnings.map((warning) => (
                  <li key={warning} className="text-muted-foreground">{warning}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}