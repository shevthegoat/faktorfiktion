import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Search, Link, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { apiRequest } from "@/lib/queryClient";
import { validateUrl } from "@/lib/url-validator";
import { AnalysisResults } from "./analysis-results";

export function VideoAnalyzer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const analyzeMutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await apiRequest("POST", "/api/analyze-video", { videoUrl: url });
      return response.json();
    },
    onSuccess: () => {
      setProgress(100);
    },
    onError: () => {
      setProgress(0);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUrl = videoUrl.trim();
    
    if (!trimmedUrl) {
      return;
    }

    if (!validateUrl(trimmedUrl)) {
      return;
    }

    setProgress(10);
    
    // Simulate progress during analysis
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    try {
      await analyzeMutation.mutateAsync(trimmedUrl);
    } finally {
      clearInterval(progressInterval);
    }
  };

  const isAnalyzing = analyzeMutation.isPending;
  const error = analyzeMutation.error;
  const result = analyzeMutation.data;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="videoUrl">Video URL</Label>
              <div className="relative">
                <Input
                  id="videoUrl"
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="pr-10"
                  disabled={isAnalyzing}
                />
                <Link className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                Supported platforms: YouTube, Instagram, Twitter, TikTok, Facebook
              </p>
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {error instanceof Error ? error.message : "An error occurred during analysis"}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isAnalyzing || !videoUrl.trim()}
                className="px-8"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze Video
                  </>
                )}
              </Button>
            </div>
            
            {isAnalyzing && (
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-gray-600">Analyzing video authenticity...</p>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-gray-500 text-center">
                  This may take up to 30 seconds
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
      
      {result && <AnalysisResults result={result} />}
    </div>
  );
}
