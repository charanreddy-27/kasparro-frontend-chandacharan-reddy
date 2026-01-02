"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge } from "@/components/ui";
import {
  pipelineStages,
  architectureComponents,
  dataFlowDescription,
} from "@/data/architecture";
import {
  Upload,
  Database,
  Cpu,
  FileOutput,
  Box,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Loader,
  Clock,
  Eye,
  Shield,
  FileText,
  Settings,
  Search,
  Users,
  MessageCircle,
  Server,
  Globe,
  Code,
  BarChart3,
} from "lucide-react";
import type { ArchitectureComponent } from "@/types";

const stageIcons = {
  input: Upload,
  context: Database,
  analysis: Cpu,
  synthesis: FileOutput,
  delivery: Box,
};

const moduleIcons = {
  "ai-visibility-module": Eye,
  "trust-module": Shield,
  "content-module": FileText,
  "technical-module": Settings,
  "keyword-module": Search,
  "competitor-module": Users,
  "mentions-module": MessageCircle,
};

const statusConfig = {
  active: { icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-100" },
  processing: { icon: Loader, color: "text-amber-600", bg: "bg-amber-100" },
  completed: { icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-100" },
};

export default function ArchitecturePage() {
  const inputComponents = architectureComponents.filter((c) => c.type === "input");
  const processorComponents = architectureComponents.filter(
    (c) => c.type === "processor"
  );
  const moduleComponents = architectureComponents.filter(
    (c) => c.type === "module"
  );
  const outputComponents = architectureComponents.filter(
    (c) => c.type === "output"
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">System Architecture</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          Understanding how Kasparro processes and analyzes your brand data
        </p>
      </div>

      {/* Pipeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Pipeline Overview</CardTitle>
          <CardDescription>
            The high-level flow of data through the Kasparro system
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Changed to responsive grid - stacks on mobile, 5 cols on desktop */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {pipelineStages.map((stage, index) => {
              const isLast = index === pipelineStages.length - 1;
              const statusCfg =
                statusConfig[stage.status as keyof typeof statusConfig] ||
                statusConfig.completed;
              const StatusIcon = statusCfg.icon;

              return (
                <div key={stage.id} className="relative">
                  {/* Connector Arrow - hidden on mobile, only show on lg */}
                  {!isLast && (
                    <div className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 rotate-90 sm:hidden">
                      <ArrowRight className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                    </div>
                  )}
                  {!isLast && (
                    <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                    </div>
                  )}

                  <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800 sm:p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">
                        Stage {index + 1}
                      </span>
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${statusCfg.bg}`}
                      >
                        <StatusIcon className={`h-3 w-3 ${statusCfg.color}`} />
                      </div>
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                      {stage.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Data Flow Description - improved mobile grid */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {Object.entries(dataFlowDescription).map(([key, phase]) => (
          <Card key={key}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white sm:text-base">{phase.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{phase.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Architecture */}
      <Card>
        <CardHeader>
          <CardTitle>Component Architecture</CardTitle>
          <CardDescription>
            Detailed view of system components and their connections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 sm:space-y-8">
            {/* Input Layer */}
            <div>
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 sm:h-8 sm:w-8">
                  <Upload className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 sm:h-4 sm:w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Input Layer</h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                {inputComponents.map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-blue-100 bg-blue-50 p-2.5 dark:border-blue-900/50 dark:bg-blue-900/20 sm:p-3"
                  >
                    <p className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-5 w-5 text-slate-300 dark:text-slate-600 sm:h-6 sm:w-6" />
            </div>

            {/* Processing Layer */}
            <div>
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 sm:h-8 sm:w-8">
                  <Server className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 sm:h-4 sm:w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Processing Layer</h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                {processorComponents.slice(0, 4).map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-indigo-100 bg-indigo-50 p-2.5 dark:border-indigo-900/50 dark:bg-indigo-900/20 sm:p-3"
                  >
                    <p className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-5 w-5 text-slate-300 dark:text-slate-600 sm:h-6 sm:w-6" />
            </div>

            {/* Module Layer */}
            <div>
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/50 sm:h-8 sm:w-8">
                  <Cpu className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400 sm:h-4 sm:w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Audit Module Layer
                </h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                {moduleComponents.map((component) => {
                  const Icon =
                    moduleIcons[component.id as keyof typeof moduleIcons] || Cpu;
                  return (
                    <div
                      key={component.id}
                      className="rounded-lg border border-violet-100 bg-violet-50 p-2.5 dark:border-violet-900/50 dark:bg-violet-900/20 sm:p-3"
                    >
                      <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                        <Icon className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400 sm:h-4 sm:w-4" />
                        <p className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                          {component.name}
                        </p>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {component.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-5 w-5 text-slate-300 dark:text-slate-600 sm:h-6 sm:w-6" />
            </div>

            {/* Output Layer */}
            <div>
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 sm:h-8 sm:w-8">
                  <FileOutput className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 sm:h-4 sm:w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Output Layer</h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3">
                {outputComponents.map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-emerald-100 bg-emerald-50 p-2.5 dark:border-emerald-900/50 dark:bg-emerald-900/20 sm:p-3"
                  >
                    <p className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details - improved mobile layout */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 sm:mb-4 sm:h-12 sm:w-12">
              <Globe className="h-5 w-5 text-slate-600 dark:text-slate-400 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Data Sources</h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 sm:space-y-2 sm:text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Website crawl data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                AI platform monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Backlink databases
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Search query data
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 sm:mb-4 sm:h-12 sm:w-12">
              <Cpu className="h-5 w-5 text-slate-600 dark:text-slate-400 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Processing</h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 sm:space-y-2 sm:text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Real-time analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                7 specialized modules
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                AI-powered scoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Pattern recognition
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 sm:mb-4 sm:h-12 sm:w-12">
              <Code className="h-5 w-5 text-slate-600 dark:text-slate-400 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white sm:text-base">Outputs</h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 sm:space-y-2 sm:text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Interactive dashboards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                PDF reports
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                RESTful API
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 shrink-0 text-emerald-500" />
                Real-time alerts
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
