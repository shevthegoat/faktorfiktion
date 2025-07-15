import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AuthenticityMeter } from "./authenticity-meter";
import { Eye, Volume2, FileText, Shield } from "lucide-react";
import { getPlatformName } from "@/lib/url-validator";

interface AnalysisResultsProps {
  result: {
    videoUrl: string;
    platform: string;
    authenticityLevel: string;
    authenticityScore: number;
    visualAnalysis: string;
    audioAnalysis: string;
    metadataAnalysis: string;
    aiAnalysis: string;
    confidenceScore: number;
  };
}

export function AnalysisResults({ result }: AnalysisResultsProps) {
  const platformName = getPlatformName(result.platform);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Analysis Results</span>
          <Badge variant="outline">{platformName}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Result Display */}
        <div className="text-center py-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-gray-200">
          <div className="text-5xl font-bold mb-2 text-black">
            {result.authenticityLevel.toUpperCase()}
          </div>
          <div className="text-lg text-black font-medium">
            Authenticity Score: {result.authenticityScore}%
          </div>
        </div>

        {/* Authenticity Level Indicator */}
        <AuthenticityMeter 
          level={result.authenticityLevel}
          score={result.authenticityScore}
        />
        
        {/* Video URL */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 break-all">{result.videoUrl}</p>
        </div>
        
        {/* Detailed Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Eye className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Visual Analysis</h4>
                </div>
                <p className="text-sm text-gray-600">{result.visualAnalysis}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Volume2 className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Audio Analysis</h4>
                </div>
                <p className="text-sm text-gray-600">{result.audioAnalysis}</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Metadata Analysis</h4>
                </div>
                <p className="text-sm text-gray-600">{result.metadataAnalysis}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">AI Detection</h4>
                </div>
                <p className="text-sm text-gray-600">{result.aiAnalysis}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
