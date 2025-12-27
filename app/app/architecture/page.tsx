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
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">System Architecture</h1>
        <p className="mt-1 text-slate-600">
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
          <div className="grid gap-4 md:grid-cols-5">
            {pipelineStages.map((stage, index) => {
              const isLast = index === pipelineStages.length - 1;
              const statusCfg =
                statusConfig[stage.status as keyof typeof statusConfig] ||
                statusConfig.completed;
              const StatusIcon = statusCfg.icon;

              return (
                <div key={stage.id} className="relative">
                  {/* Connector Arrow */}
                  {!isLast && (
                    <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-5 w-5 text-slate-300" />
                    </div>
                  )}

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
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
                    <h3 className="mb-1 font-semibold text-slate-900">
                      {stage.name}
                    </h3>
                    <p className="text-xs text-slate-500">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Data Flow Description */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(dataFlowDescription).map(([key, phase]) => (
          <Card key={key}>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold text-slate-900">{phase.title}</h3>
              <p className="text-sm text-slate-600">{phase.description}</p>
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
          <div className="space-y-8">
            {/* Input Layer */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Upload className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Input Layer</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {inputComponents.map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-blue-100 bg-blue-50 p-3"
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-slate-300" />
            </div>

            {/* Processing Layer */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                  <Server className="h-4 w-4 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Processing Layer</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {processorComponents.slice(0, 4).map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-indigo-100 bg-indigo-50 p-3"
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-slate-300" />
            </div>

            {/* Module Layer */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100">
                  <Cpu className="h-4 w-4 text-violet-600" />
                </div>
                <h3 className="font-semibold text-slate-900">
                  Audit Module Layer
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {moduleComponents.map((component) => {
                  const Icon =
                    moduleIcons[component.id as keyof typeof moduleIcons] || Cpu;
                  return (
                    <div
                      key={component.id}
                      className="rounded-lg border border-violet-100 bg-violet-50 p-3"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-violet-600" />
                        <p className="text-sm font-medium text-slate-900">
                          {component.name}
                        </p>
                      </div>
                      <p className="text-xs text-slate-600">
                        {component.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-slate-300" />
            </div>

            {/* Output Layer */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <FileOutput className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Output Layer</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {outputComponents.map((component) => (
                  <div
                    key={component.id}
                    className="rounded-lg border border-emerald-100 bg-emerald-50 p-3"
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {component.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Globe className="h-6 w-6 text-slate-600" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">Data Sources</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Website crawl data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                AI platform monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Backlink databases
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Search query data
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Cpu className="h-6 w-6 text-slate-600" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">Processing</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Real-time analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                7 specialized modules
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                AI-powered scoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Pattern recognition
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Code className="h-6 w-6 text-slate-600" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">Outputs</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Interactive dashboards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                PDF reports
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                RESTful API
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                Real-time alerts
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
