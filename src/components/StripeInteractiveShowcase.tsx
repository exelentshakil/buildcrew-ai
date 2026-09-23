'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  HardHat,
  Users,
  FileCheck,
  Mail,
  Calculator,
  Zap,
  CheckCircle2,
  RefreshCw,
  Clock,
  ArrowRight,
  Check,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Card 1: Executive Assistant Briefing
  const [briefingDay, setBriefingDay] = useState<'today' | 'pending' | 'bottlenecks'>('today');

  // Card 2: Construction PM Monday.com sync
  const [mondaySynced, setMondaySynced] = useState(false);

  // Card 3: Contractor Quote / COI audit
  const [coiAudited, setCoiAudited] = useState(true);

  // Card 4: Permit Town Hall status
  const [permitStatus, setPermitStatus] = useState<'approved' | 'inspecting' | 'queued'>('approved');

  // Card 5: Email Action Extraction
  const [emailTriaged, setEmailTriaged] = useState(false);

  // Card 6: Deal Underwriting
  const [dealTier, setDealTier] = useState<'multifamily' | 'commercial' | 'land'>('multifamily');

  const handleSyncMonday = () => {
    setMondaySynced(true);
    setTimeout(() => setMondaySynced(false), 2500);
  };

  const handleTriageEmail = () => {
    setEmailTriaged(true);
    setTimeout(() => setEmailTriaged(false), 2500);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Multi-Agent Operations Mesh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Six autonomous AI employees.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Communicating across permits, contractors, email triage, and construction milestones.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Executive Operations Assistant */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 1 • Executive Assistant
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Briefcase className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Daily briefing &amp; bottlenecks
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Synthesizes updates from other agents, flags items you are waiting on, and compiles daily executive summaries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {[
                  { id: 'today', label: 'Briefing' },
                  { id: 'pending', label: 'Waiting On' },
                  { id: 'bottlenecks', label: 'Bottlenecks' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setBriefingDay(tab.id as any)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      briefingDay === tab.id
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10.5px] space-y-1">
                <div className="flex justify-between font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-1">
                  <span>Executive Status</span>
                  <span className="text-[#057A55]">0 Stalled Items</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 text-[10px]">
                  {briefingDay === 'today' && '• 44 Elm St: Rough inspection scheduled for Thursday.'}
                  {briefingDay === 'pending' && '• Waiting on: Architectural stamped HVAC revisions (due Friday).'}
                  {briefingDay === 'bottlenecks' && '• Alert: Concrete quote expires in 48 hours ($34,200).'}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Construction PM Agent */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 2 • Construction PM
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <HardHat className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Monday.com &amp; milestone sync
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Tracks jobsite progress, updates project management boards, and manages tradesman schedule dependencies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10px] space-y-1">
                <div className="flex justify-between font-bold text-[var(--color-text-primary)]">
                  <span>Monday.com Board</span>
                  <span className="text-emerald-600 font-semibold">{mondaySynced ? 'Synced (0ms)' : 'Up to Date'}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  📋 44 Elm St Residential Development Board
                </div>
                <div className="text-[9px] text-slate-500">
                  Task: "Rough electrical milestone verified" → Status: Done
                </div>
              </div>

              <button
                type="button"
                onClick={handleSyncMonday}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-[4px] bg-[#533AFD] hover:bg-[#432DE0] text-white transition-all cursor-pointer"
              >
                {mondaySynced ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Board Updated in Monday.com!</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3 h-3" />
                    <span>Trigger Project Board Sync</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Contractor & Vendor Follow-Up */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 3 • Vendor &amp; Sub Guard
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Users className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Quote follow-up &amp; COI audits
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Follows up on outstanding proposals, audits Certificate of Insurance in Google Drive, and verifies draw invoices.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Subcontractor:</span>
                  <span className="font-bold text-[var(--color-text-primary)]">VoltTech Electrical LLC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Insurance COI:</span>
                  <span className="font-bold text-[#057A55]">Active ($2M Verified in Drive)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Draw #2 Request:</span>
                  <span className="font-bold text-[#533AFD]">$18,400 (Pending Inspection)</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between px-1">
                <span>Auto-follow up on 3 open RFPs</span>
                <span className="text-emerald-600 font-bold">Active</span>
              </div>
            </div>
          </div>

          {/* Card 4: Permit & Municipality Tracker */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 4 • Permit &amp; Town Hall
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <FileCheck className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Permit &amp; inspection tracker
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Monitors municipal building department portals, schedules inspector walkthroughs, and logs stamped plans.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {[
                  { id: 'approved', label: 'Permit' },
                  { id: 'inspecting', label: 'Inspection' },
                  { id: 'queued', label: 'Zoning' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setPermitStatus(tab.id as any)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      permitStatus === tab.id
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Building Dept:</span>
                  <span className="font-bold text-[var(--color-text-primary)]">Short Hills / Millburn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Current Phase:</span>
                  <span className="font-bold text-[#057A55]">
                    {permitStatus === 'approved' ? 'PRM-2026-0891 Approved' : permitStatus === 'inspecting' ? 'Rough Elec: Thursday 10am' : 'Zoning Variance Cleared'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Email Triage & Action Extractor */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 5 • Email Management
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Mail className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Action triage &amp; auto-drafts
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Reads incoming Gmail, distinguishes noise from urgent actions, creates Monday.com tasks, and drafts replies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-2.5 font-mono text-[10px] space-y-1.5 border border-slate-800">
                <div className="text-slate-400">Incoming Contractor Email:</div>
                <div className="text-purple-300">"Rough electrical done at 44 Elm St. Inspection Thursday?"</div>
                <div className="text-emerald-400 pt-1">Automated Action:</div>
                <div className="text-slate-300">"Scheduled town inspection + drafted approval in Gmail."</div>
              </div>

              <button
                type="button"
                onClick={handleTriageEmail}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] transition-all cursor-pointer"
              >
                <Mail className="w-3 h-3 text-[#533AFD]" />
                <span>{emailTriaged ? 'Triage Complete (Task Created)' : 'Simulate Inbound Email Triage'}</span>
              </button>
            </div>
          </div>

          {/* Card 6: Acquisition & Underwriting Agent */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 6 • Deal Underwriting
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Calculator className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Real estate deal analysis
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Evaluates development deals, calculates pro-forma NOI, computes cap rates, and stress-tests construction debt.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {[
                  { id: 'multifamily', label: '12-Unit' },
                  { id: 'commercial', label: 'Retail' },
                  { id: 'land', label: 'Raw Land' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setDealTier(tier.id as any)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      dealTier === tier.id
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Asking Price:</span>
                  <span className="font-bold text-[var(--color-text-primary)]">
                    {dealTier === 'multifamily' ? '$3,200,000' : dealTier === 'commercial' ? '$4,800,000' : '$1,650,000'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Cap Rate / ROI:</span>
                  <span className="font-bold text-[#057A55]">
                    {dealTier === 'multifamily' ? '6.83% Cap Rate' : dealTier === 'commercial' ? '7.40% Cap Rate' : '28.5% Project IRR'}
                  </span>
                </div>
                <div className="flex justify-between text-[9px] text-slate-500">
                  <span>Investment Verdict:</span>
                  <span className="text-emerald-600 font-bold">Meets Screening Criteria</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
