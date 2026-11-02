import type { ReactNode } from "react";

function Window({
  path,
  title,
  children,
  caption,
  accent,
  captionVisible = true,
}: {
  path: string;
  title: string;
  children: ReactNode;
  caption: string;
  accent: "brand" | "ink";
  captionVisible?: boolean;
}) {
  return (
    <figure className="min-w-0">
      <div className="sf-card overflow-hidden">
        <div
          className={accent === "brand" ? "h-1 bg-[#22c55e]" : "h-1 bg-[#22c55e]"}
          aria-hidden="true"
        />
        <div className="flex items-center gap-3 border-b border-[#e7e5e0] px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="block h-2 w-2 rounded-full bg-[#d5e3da]" />
            <i className="block h-2 w-2 rounded-full bg-[#d5e3da]" />
            <i className="block h-2 w-2 rounded-full bg-[#d5e3da]" />
          </span>
          <span className="truncate text-[11px] tracking-[0.08em] text-[#62605b] uppercase">
            {path}
          </span>
        </div>
        <div className="p-4 sm:p-5" aria-hidden="true">
          <p className="text-[13px] font-medium tracking-tight">{title}</p>
          {children}
        </div>
      </div>
      <figcaption
        className={
          captionVisible
            ? "mt-3 text-[12px] leading-5 text-[#62605b]"
            : "sr-only"
        }
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export function PosTerminalMock({
  caption,
  captionVisible = true,
}: {
  caption?: string;
  captionVisible?: boolean;
}) {
  return (
    <Window
      path="SaaSify / POS / Terminal"
      title="Terminal"
      accent="brand"
      captionVisible={captionVisible}
      caption={
        caption ??
        "Illustrative preview of the SaaSify POS terminal. Sample items, not a live café."
      }
    >
      <div className="mt-4 flex gap-2 text-[12px]">
        <span className="rounded-full bg-[#22c55e] px-3 py-1 text-white">Dine-in</span>
        <span className="rounded-full border border-[#e7e5e0] px-3 py-1 text-[#62605b]">
          Takeaway
        </span>
      </div>
      <div className="mt-4 flex gap-4 border-b border-[#e7e5e0] text-[12px] text-[#62605b]">
        <span className="border-b border-[#22c55e] pb-2 text-foreground">Coffee</span>
        <span className="pb-2">Tea</span>
        <span className="pb-2">Food</span>
      </div>
      <ul className="mt-3 divide-y divide-line text-[13px]">
        <li className="flex justify-between py-2.5">
          <span>Filter coffee</span>
          <span className="text-[#62605b]">₹180</span>
        </li>
        <li className="flex justify-between py-2.5">
          <span>Masala chai</span>
          <span className="text-[#62605b]">₹120</span>
        </li>
      </ul>
      <div className="mt-4 rounded-2xl border border-[#e7e5e0] bg-[#f3faf5] p-3">
        <p className="flex items-center justify-between text-[11px] tracking-[0.14em] text-[#62605b] uppercase">
          <span>Table 4</span>
          <span className="normal-case tracking-tight text-[#22c55e]">Preparing</span>
        </p>
        <div className="mt-2 flex justify-between text-[13px]">
          <span>Filter coffee × 2</span>
          <span>₹360</span>
        </div>
        <div className="mt-1 flex justify-between text-[12px] text-[#62605b]">
          <span>GST</span>
          <span>On the bill</span>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full border border-[#e7e5e0] px-3 py-1 text-[12px]">
            Cash
          </span>
          <span className="rounded-full bg-[#22c55e] px-3 py-1 text-[12px] text-white">
            UPI/Card
          </span>
        </div>
      </div>
    </Window>
  );
}

export function HrmsDirectoryMock({
  caption,
  captionVisible = true,
}: {
  caption?: string;
  captionVisible?: boolean;
}) {
  const rows = [
    ["E-014", "A. Mehta", "Café lead", "Active"],
    ["E-021", "R. Iyer", "Cashier", "Active"],
    ["E-008", "S. Khan", "Kitchen", "Draft"],
  ];

  return (
    <Window
      path="SaaSify / HRMS / Employees"
      title="Employees"
      accent="ink"
      captionVisible={captionVisible}
      caption={
        caption ??
        "Illustrative preview of the SaaSify HRMS directory. Sample people, not a real team."
      }
    >
      <div className="mt-4 flex items-center justify-between gap-3 rounded-full border border-[#e7e5e0] px-3 py-2 text-[12px] text-[#62605b]">
        <span>Search employees</span>
        <span>Active</span>
      </div>
      <div className="mt-3 flex gap-2 text-[11px]">
        <span className="rounded-full bg-[#22c55e] px-2.5 py-1 text-white">Active</span>
        <span className="rounded-full border border-[#e7e5e0] px-2.5 py-1 text-[#62605b]">
          Draft
        </span>
        <span className="rounded-full border border-[#e7e5e0] px-2.5 py-1 text-[#62605b]">
          Exited
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[#e7e5e0]">
        <div className="grid grid-cols-[4.2rem_1fr_1fr_4.5rem] gap-2 border-b border-[#e7e5e0] bg-[#f3faf5] px-3 py-2 text-[10px] tracking-[0.12em] text-[#62605b] uppercase">
          <span>ID</span>
          <span>Name</span>
          <span>Role</span>
          <span>Status</span>
        </div>
        {rows.map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-[4.2rem_1fr_1fr_4.5rem] gap-2 border-b border-[#e7e5e0] px-3 py-2.5 text-[12px] last:border-b-0"
          >
            <span className="text-[#62605b]">{row[0]}</span>
            <span>{row[1]}</span>
            <span className="text-[#62605b]">{row[2]}</span>
            <span>{row[3]}</span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function SetupPreview() {
  return (
    <Window
      path="SaaSify / POS / Café"
      title="Café setup"
      accent="brand"
      caption="Illustrative setup. Sample café, not a live account."
    >
      <dl className="mt-4 space-y-3 text-[13px]">
        <div className="flex justify-between gap-4">
          <dt className="text-[#62605b]">Café</dt>
          <dd>North Window</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[#62605b]">Tables</dt>
          <dd>8</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[#62605b]">Tax</dt>
          <dd>GST on the bill</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[#62605b]">Guest menu</dt>
          <dd>QR</dd>
        </div>
      </dl>
    </Window>
  );
}

function KitchenBoard() {
  const columns = [
    { label: "New", items: ["Masala chai · Takeaway"] },
    { label: "Preparing", items: ["Filter coffee × 2 · Table 4"], hot: true },
    { label: "Ready", items: ["Sandwich · Table 2"] },
  ];
  return (
    <Window
      path="SaaSify / POS / Kitchen"
      title="Kitchen"
      accent="brand"
      caption="Illustrative kitchen board. Sample tickets, not a live service."
    >
      <div className="mt-4 grid grid-cols-3 gap-2">
        {columns.map((column) => (
          <div
            key={column.label}
            className={`rounded-2xl border p-2 ${column.hot ? "border-[#22c55e] bg-[#f3faf5]" : "border-[#e7e5e0]"}`}
          >
            <p className="text-[10px] tracking-[0.12em] text-[#62605b] uppercase">
              {column.label}
            </p>
            {column.items.map((item) => (
              <p key={item} className="mt-2 text-[12px] leading-5">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Window>
  );
}

function BillPreview() {
  return (
    <Window
      path="SaaSify / POS / Bill"
      title="Bill"
      accent="brand"
      caption="Illustrative bill. Tax and tender are recorded. This is not a payment gateway."
    >
      <ul className="mt-4 space-y-2 text-[13px]">
        <li className="flex justify-between">
          <span>Filter coffee × 2</span>
          <span>₹360</span>
        </li>
        <li className="flex justify-between text-[#62605b]">
          <span>GST</span>
          <span>Shown on the bill</span>
        </li>
        <li className="flex justify-between border-t border-[#e7e5e0] pt-2">
          <span>Table 4</span>
          <span>Dine-in</span>
        </li>
      </ul>
      <div className="mt-4 flex gap-2 text-[12px]">
        <span className="rounded-full bg-[#22c55e] px-3 py-1 text-white">Cash</span>
        <span className="rounded-full border border-[#e7e5e0] px-3 py-1 text-[#62605b]">
          UPI/Card
        </span>
      </div>
      <p className="mt-3 text-[12px] text-[#62605b]">PDF receipt</p>
    </Window>
  );
}

function RecordPreview() {
  return (
    <Window
      path="SaaSify / HRMS / Employee"
      title="A. Mehta"
      accent="ink"
      caption="Illustrative employee profile. Fictional sample, not a real person."
    >
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
        <div>
          <dt className="text-[10px] tracking-[0.12em] text-[#62605b] uppercase">ID</dt>
          <dd>E-014</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.12em] text-[#62605b] uppercase">Status</dt>
          <dd>Active</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.12em] text-[#62605b] uppercase">Role</dt>
          <dd>Café lead</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.12em] text-[#62605b] uppercase">Location</dt>
          <dd>Ahmedabad</dd>
        </div>
      </dl>
    </Window>
  );
}

function EmployeeViewPreview() {
  return (
    <Window
      path="SaaSify / HRMS / My record"
      title="What A. Mehta can open"
      accent="ink"
      caption="Illustrative employee view. Fictional sample, not a real person."
    >
      <ul className="mt-4 space-y-2 text-[13px]">
        <li className="flex justify-between border-b border-[#e7e5e0] py-2">
          <span>Details</span>
          <span className="text-[#62605b]">Own record</span>
        </li>
        <li className="flex justify-between border-b border-[#e7e5e0] py-2">
          <span>Compensation</span>
          <span className="text-[#62605b]">Breakdown</span>
        </li>
        <li className="flex justify-between py-2">
          <span>Salary slips</span>
          <span className="text-[#62605b]">On the profile</span>
        </li>
      </ul>
    </Window>
  );
}

function StatusPreview() {
  return (
    <Window
      path="SaaSify / HRMS / Status"
      title="Status and documents"
      accent="ink"
      caption="Illustrative status. Draft, active, and exited are the states the record supports."
    >
      <div className="mt-4 flex gap-2 text-[12px]">
        <span className="rounded-full border border-[#e7e5e0] px-3 py-1 text-[#62605b]">Draft</span>
        <span className="rounded-full bg-[#22c55e] px-3 py-1 text-white">Active</span>
        <span className="rounded-full border border-[#e7e5e0] px-3 py-1 text-[#62605b]">Exited</span>
      </div>
      <p className="mt-4 text-[13px]">Offer letter · On the record</p>
      <p className="mt-1 text-[13px] text-[#62605b]">Purchase order · Same profile</p>
    </Window>
  );
}

const posPanels = [SetupPreview, PosTerminalMock, KitchenBoard, BillPreview];
const hrmsPanels = [HrmsDirectoryMock, RecordPreview, StatusPreview, EmployeeViewPreview];

export function ProductPreview({
  kind,
  state,
}: {
  kind: "pos" | "hrms";
  state: number;
}) {
  const panels = kind === "pos" ? posPanels : hrmsPanels;
  const Panel = panels[Math.min(state, panels.length - 1)];
  return (
    <div key={`${kind}-${state}`} className="sf-preview-swap">
      <Panel />
    </div>
  );
}

export function SaasifyEcosystemMock() {
  return (
    <div className="sf-stage">
      <div className="sf-stage-front">
        <PosTerminalMock
          caption="Illustrative POS terminal. Sample items, not a live café."
          captionVisible={false}
        />
      </div>
      <div className="sf-stage-back mt-6 lg:mt-0">
        <HrmsDirectoryMock
          caption="Illustrative employee directory. Sample people, not a real team."
          captionVisible={false}
        />
      </div>
    </div>
  );
}
