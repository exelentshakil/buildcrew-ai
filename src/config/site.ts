/**
 * BuildCrew AI - Multi-Agent Operations Cockpit for Real Estate & Construction
 * Designed for real estate development, construction management, and deal underwriting.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'buildcrew-ai',
  name: 'BuildCrew AI',
  badge: 'Autonomous Operations v1.0',
  tagline: 'Multi-Agent Operations & Construction Management Cockpit',
  description: 'Connected AI employees that communicate across permit tracking, contractor follow-ups, email action triage, deal underwriting, and Monday.com task sync.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Operations Cockpit' },
    { id: 'pipeline', label: 'Multi-Agent Event Bus' },
    { id: 'records', label: 'Agent Activity Ledger' },
  ],
  metrics: [
    {
      id: 'active_agents',
      title: 'Connected AI Employees',
      value: '6 Agents Active',
      change: '100% Inter-Agent Mesh',
      trend: 'up',
      subtext: 'Permits • Subs • Email • Underwriting',
      badge: 'Zero Dropped Follow-Ups',
    },
    {
      id: 'email_triage',
      title: 'Automated Action Extraction',
      value: '94.8% Handled',
      change: 'Zero manual sorting',
      trend: 'up',
      subtext: 'Auto-drafts + Monday.com sync',
      badge: 'Sub-60s Action Triage',
    },
    {
      id: 'permit_tracking',
      title: 'Permit & Inspection Cycle',
      value: '-38% Delays',
      change: 'Proactive Town Hall Sync',
      trend: 'neutral',
      subtext: 'Automated municipal status checks',
      badge: 'Early Inspection Warning',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live Interactive Test',
    title: 'Cross-Agent Workflow & Action Triage Engine',
    description: 'Paste any unstructured contractor email, permit notice, invoice, or deal inquiry. Watch the executive agent decompose tasks and dispatch specialized agents in real time.',
    inputLabel: 'Unstructured Project Email, Contractor Notice, or Deal Memo',
    inputPlaceholder: 'Paste sample contractor email, building inspector note, or property underwriting memo...',
    defaultInput: 'Received email from Electrical Subcontractor (VoltTech LLC): rough electrical is completed at 44 Elm St development. Requesting town inspection for Thursday and submitting draw request #2 for $18,400. System note: please verify insurance COI is current before approving payment.',
    buttonLabel: 'Dispatch Multi-Agent Workflow',
    sampleResponse: {
      status: 'MULTI_AGENT_WORKFLOW_DISPATCHED',
      triage_verdict: 'High-Priority Project Milestone & Draw Request',
      agent_coordination_mesh: {
        agent_1_email_triage: {
          status: 'COMPLETED',
          action: 'Extracted 3 action items, drafted confirmation reply to VoltTech LLC',
          extracted_project: '44 Elm St Residential Development'
        },
        agent_2_permit_inspector: {
          status: 'INSPECTION_SCHEDULED',
          action: 'Contacted Short Hills Building Dept portal, logged rough electrical inspection for Thursday 10:00 AM'
        },
        agent_3_vendor_guard: {
          status: 'COI_AUDIT_PASSED',
          action: 'Audited ACORD Certificate of Insurance in Google Drive: Active through Dec 2026 ($2M general liability)'
        },
        agent_4_bookkeeper: {
          status: 'DRAW_QUEUED',
          action: 'Invoice #DR-02 for $18,400 verified against original contract balance ($42,000 remaining). Pushed to Monday.com approval board'
        }
      },
      next_best_actions: [
        'Created Monday.com task: "Review electrical rough inspection result (Thursday afternoon)"',
        'Added calendar reminder for owner approval of $18,400 payment post-inspection',
        'Drafted email confirmation to subcontractor in Gmail drafts folder'
      ],
      execution_telemetry: {
        orchestrator: 'BuildCrew Event Bus (n8n / FastAPI / Node)',
        inference_engine: 'OpenAI gpt-4o-mini + Gemini 2.0 Flash',
        latency_ms: 112,
        deterministic_math_check: 'Draw math verified to 2 decimal places'
      }
    },
  },
  table: {
    badge: 'Real-Time Cross-Agent Activity Log',
    title: 'Recent Operations & Inter-Agent Execution Ledger',
    description: 'Inspect live actions executed by your AI employees across permits, contractor communications, deal underwriting, and project tasks.',
    columns: [
      { key: 'id', label: 'Action ID' },
      { key: 'entityName', label: 'Task / Project' },
      { key: 'category', label: 'Handling Agent' },
      { key: 'status', label: 'Status' },
      { key: 'latency', label: 'Execution' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'ACT-4102',
        entityName: '44 Elm St Electrical Draw',
        category: 'Contractor & Vendor Agent',
        status: 'verified',
        latency: '142ms',
        provider: 'OpenAI gpt-4o-mini',
        updatedAt: '2 mins ago',
        payload: {
          project: '44 Elm St Residential Development',
          contractor: 'VoltTech Electrical LLC',
          draw_amount: '$18,400.00',
          coi_verified: 'Active ($2M Liability verified)',
          inspection_status: 'Rough Electrical Scheduled for Thursday',
          monday_board: 'Subcontractor Payments #DRAW-02',
        },
      },
      {
        id: 'ACT-4101',
        entityName: 'Town of Millburn Foundation Permit',
        category: 'Permit & Municipality Agent',
        status: 'verified',
        latency: '88ms',
        provider: 'Claude Code Agent',
        updatedAt: '6 mins ago',
        payload: {
          municipality: 'Millburn / Short Hills Building Dept',
          permit_id: 'PRM-2026-0891',
          status: 'Approved by Engineering & Zoning',
          follow_up_action: 'Downloaded approved stamped plans into Google Drive /Permits folder',
          alert_sent: 'Dispatched SMS notification to General Superintendent',
        },
      },
      {
        id: 'ACT-4100',
        entityName: '12-Unit Multi-Family Underwrite',
        category: 'Acquisition & Underwriting Agent',
        status: 'active',
        latency: '310ms',
        provider: 'Gemini 2.0 Flash',
        updatedAt: '14 mins ago',
        payload: {
          property: '184 Highland Ave, Essex County',
          asking_price: '$3,200,000',
          projected_noi: '$218,400',
          cap_rate: '6.83%',
          cash_on_cash: '9.4% (Assumes 65% LTV at 6.25%)',
          verdict: 'Passed Initial Investment Screening Gate',
        },
      },
      {
        id: 'ACT-4099',
        entityName: 'Daily Subcontractor Follow-Up',
        category: 'Project Management Agent',
        status: 'verified',
        latency: '115ms',
        provider: 'n8n Workflow Engine',
        updatedAt: '28 mins ago',
        payload: {
          subs_pinged: 4,
          plumbing_status: 'Rough plumbing 100% on schedule',
          drywall_status: 'Waiting on rough inspection sign-off',
          monday_sync: '14 status cards updated across 2 project boards',
        },
      },
      {
        id: 'ACT-4098',
        entityName: 'Unsolicited Marketing Ingestion',
        category: 'Email Triage Agent',
        status: 'flagged',
        latency: '34ms',
        provider: 'LLM Firewall Inline',
        updatedAt: '41 mins ago',
        payload: {
          sender: 'sales@wholesaleleadgen.com',
          classification: 'Cold Vendor Pitch (Zero Action Required)',
          action_taken: 'Archived to Vendors/Promotions, skipped from owner inbox',
          time_saved: '2 minutes of owner distraction prevented',
        },
      },
    ],
  },
};
