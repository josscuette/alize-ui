"use client"

import type { ReactNode } from "react"
import {
  Sparkline,
  Sparkbar,
  SparkBullet,
  SparkTrend,
} from "@/components/ui/sparkline"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Sample data generators
function generateRandomData(count: number, min: number, max: number): number[] {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}

function generateTrendData(count: number, start: number, volatility: number): number[] {
  const data: number[] = [start]
  for (let i = 1; i < count; i++) {
    const change = (Math.random() - 0.4) * volatility
    data.push(Math.max(0, data[i - 1] + change))
  }
  return data
}

// Sample server data for table example
const serverData = [
  {
    name: "web-server-01",
    status: "healthy",
    cpuHistory: generateTrendData(20, 30, 15),
    memoryHistory: generateRandomData(15, 20, 95),
    requestsHistory: generateTrendData(20, 1000, 200),
    uptime: 99.9,
  },
  {
    name: "api-server-01",
    status: "warning",
    cpuHistory: generateTrendData(20, 60, 20),
    memoryHistory: generateRandomData(15, 50, 90),
    requestsHistory: generateTrendData(20, 500, 150),
    uptime: 98.5,
  },
  {
    name: "db-server-01",
    status: "healthy",
    cpuHistory: generateTrendData(20, 20, 10),
    memoryHistory: generateRandomData(15, 30, 70),
    requestsHistory: generateTrendData(20, 2000, 300),
    uptime: 99.99,
  },
  {
    name: "cache-server-01",
    status: "critical",
    cpuHistory: generateTrendData(20, 85, 10),
    memoryHistory: generateRandomData(15, 70, 100),
    requestsHistory: generateTrendData(20, 3000, 500),
    uptime: 95.2,
  },
]

/**
 * Preview component for Sparklines examples
 */
export function SparklinesPreview({ title }: { title: string }): ReactNode {
  switch (title) {
    case "Sparkline":
      return (
        <div className="flex flex-wrap items-center gap-8">
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Line</p>
            <Sparkline 
              data={generateTrendData(20, 50, 20)} 
              type="line"
              width={150}
              height={40}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Area</p>
            <Sparkline 
              data={generateTrendData(20, 50, 20)} 
              type="area"
              width={150}
              height={40}
              color="var(--semantic-dataviz-rag-successmedium)"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">With Markers</p>
            <Sparkline 
              data={generateTrendData(10, 50, 15)} 
              showMarkers
              width={150}
              height={40}
              color="var(--semantic-dataviz-rag-warningmedium)"
            />
          </div>
        </div>
      )

    case "Sparkbar":
      return (
        <div className="flex flex-wrap items-center gap-8">
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Default</p>
            <Sparkbar 
              data={generateRandomData(12, 20, 80)} 
              width={150}
              height={40}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">RAG Thresholds</p>
            <Sparkbar 
              data={generateRandomData(12, 20, 100)} 
              thresholds={{ warning: 60, danger: 80 }}
              width={150}
              height={40}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Custom Color</p>
            <Sparkbar 
              data={generateRandomData(12, 20, 80)} 
              color="var(--semantic-dataviz-ct-3)"
              width={150}
              height={40}
            />
          </div>
        </div>
      )

    case "Spark Bullet":
      return (
        <div className="flex flex-wrap items-center gap-8">
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Good (75%)</p>
            <SparkBullet value={75} target={80} width={150} height={28} />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Warning (55%)</p>
            <SparkBullet value={55} target={70} width={150} height={28} />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Danger (20%)</p>
            <SparkBullet value={20} target={50} width={150} height={28} />
          </div>
        </div>
      )

    case "Spark Trend":
      return (
        <div className="flex flex-wrap items-center gap-8">
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Positive</p>
            <SparkTrend 
              value={1250} 
              change={12.5}
              formatValue={(v) => `$${v.toLocaleString()}`}
              history={[1000, 1050, 1100, 1150, 1200, 1250]}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Negative</p>
            <SparkTrend 
              value={850} 
              change={-8.2}
              formatValue={(v) => `$${v.toLocaleString()}`}
              history={[950, 920, 900, 880, 860, 850]}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[var(--semantic-text-subdued)]">Percentage</p>
            <SparkTrend 
              value={94.5} 
              previousValue={92.1}
              formatValue={(v) => `${v}%`}
              history={[90, 91, 92, 93, 94, 94.5]}
            />
          </div>
        </div>
      )

    case "In Table":
      return (
        <div className="rounded-md border border-[var(--border)]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Server</TableHead>
                <TableHead>CPU Usage</TableHead>
                <TableHead>Memory</TableHead>
                <TableHead>Requests/min</TableHead>
                <TableHead>Uptime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serverData.map((server) => (
                <TableRow key={server.name}>
                  <TableCell className="font-medium">{server.name}</TableCell>
                  <TableCell>
                    <Sparkline 
                      data={server.cpuHistory} 
                      type="area"
                      width={100}
                      height={28}
                      color={
                        server.cpuHistory[server.cpuHistory.length - 1] > 80
                          ? "var(--semantic-dataviz-rag-dangermedium)"
                          : server.cpuHistory[server.cpuHistory.length - 1] > 60
                          ? "var(--semantic-dataviz-rag-warningmedium)"
                          : "var(--semantic-dataviz-rag-successmedium)"
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Sparkbar 
                      data={server.memoryHistory}
                      thresholds={{ warning: 70, danger: 85 }}
                      width={100}
                      height={28}
                    />
                  </TableCell>
                  <TableCell>
                    <SparkTrend
                      value={server.requestsHistory[server.requestsHistory.length - 1]}
                      previousValue={server.requestsHistory[0]}
                      formatValue={(v) => Math.round(v).toLocaleString()}
                      history={server.requestsHistory}
                      sparklineWidth={50}
                    />
                  </TableCell>
                  <TableCell>
                    <SparkBullet 
                      value={server.uptime} 
                      target={99.9}
                      ranges={[95, 99, 100]}
                      width={80}
                      height={20}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )

    default:
      return (
        <div className="flex items-center gap-4">
          <Sparkline data={generateTrendData(15, 50, 20)} width={120} height={32} />
          <Sparkbar data={generateRandomData(10, 20, 80)} width={120} height={32} />
        </div>
      )
  }
}

