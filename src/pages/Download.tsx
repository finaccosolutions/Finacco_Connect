import React, { useEffect, useState } from "react";
import { Download, Monitor, Cpu, Database, AlertCircle, Loader2 } from "lucide-react";

const DownloadPage = () => {
  const [versionInfo, setVersionInfo] = useState({
    version: "1.5.5.0", // Default if all fetches fail
    url: "https://finaccosolutions.com/connect/download-counter.php?file=Finacco_Setup.exe",
    changelog: "**Latest updates**"
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersionInfo = async () => {
      const endpoints = [
        // Try local proxy first (development)
        {
          url: '/api/version',
          options: {
            headers: {
              'Accept': 'text/plain',
            }
          }
        },
        // Primary endpoint with forced browser headers
        {
          url: 'https://finaccosolutions.com/connect/updates/version.txt',
          options: {
            headers: {
              'Accept': 'text/plain',
              'User-Agent': 'Mozilla/5.0',
              'Referer': 'https://finaccosolutions.com'
            }
          }
        },
        // Fallback with CORS proxy
        {
          url: `https://api.allorigins.win/raw?url=${encodeURIComponent(
            'https://finaccosolutions.com/connect/updates/version.txt'
          )}`,
          options: {}
        }
      ];

      for (const { url, options } of endpoints) {
        try {
          console.log(`Trying: ${url}`); // Debug
          const res = await fetch(url, {
            ...options,
            cache: 'no-store',
            mode: 'cors'
          });

          if (!res.ok) continue;

          const text = await res.text();
          console.log("Raw response:", text); // Debug

          // Parse version.txt (supports multiple formats)
          const data = text.split('\n').reduce((acc, line) => {
            const [key, value] = line.split('=').map(s => s.trim());
            if (key && value) acc[key.toLowerCase()] = value;
            return acc;
          }, {} as Record<string, string>);

          if (data.version) {
            setVersionInfo({
              version: data.version,
              url: data.downloadurl || data.url || versionInfo.url,
              changelog: data.changelog || versionInfo.changelog
            });
            setError(null);
            return;
          }
        } catch (err) {
          console.warn(`Failed from ${url}:`, err);
        }
      }

      setError("Couldn't fetch updates. Showing latest known version.");
    };

    fetchVersionInfo().finally(() => setLoading(false));
  }, []);

  const handleDownload = () => {
    // Always use the direct URL - no proxy for downloads
    const downloadUrl = 'https://finaccosolutions.com/connect/download-counter.php?file=Finacco_Setup.exe';
    
    // Open in new window/tab to trigger download
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Download Finacco Connect
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            {versionInfo.version ? `Version ${versionInfo.version}` : "Loading version..."}
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            {error && (
              <div className="mb-6 flex items-center text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span>{error}</span>
              </div>
            )}

            {/* Download Section */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <Download className="h-16 w-16 text-blue-600" />
                {loading && (
                  <Loader2 className="absolute -top-2 -right-2 h-8 w-8 text-blue-400 animate-spin" />
                )}
              </div>

              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors transform hover:scale-105 duration-300"
                disabled={loading}
              >
                <Download className="mr-2 h-5 w-5" />
                {loading ? "Loading..." : `Download v${versionInfo.version}`}
              </button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Windows 10/11 (64-bit) • 60+ MB
              </p>
            </div>

            {/* System Requirements */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                System Requirements
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: Monitor,
                    title: "OS",
                    desc: "Windows 10/11 (64-bit)"
                  },
                  {
                    icon: Cpu,
                    title: "Hardware",
                    desc: "Intel i3+ • 4GB RAM"
                  },
                  {
                    icon: Database,
                    title: "Software",
                    desc: "Tally Prime"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <item.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;