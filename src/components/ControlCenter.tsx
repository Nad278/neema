"use client";

import { useState } from "react";
import AnimatedNumber from "./AnimatedNumber";
import { Window } from "./Mockups";

type Tab = "shop" | "hotel" | "salon";

const tabs: { id: Tab; label: string }[] = [
  { id: "shop", label: "Shop" },
  { id: "hotel", label: "Hotel" },
  { id: "salon", label: "Salon" },
];

function Kpi({ label, value, prefix, suffix }: { label: string; value: number; prefix?: string; suffix?: string }) {
  return (
    <div className="rounded-xl border border-foreground/10 p-3">
      <p className="text-xs text-foreground/50">{label}</p>
      <p className="mt-1 text-2xl font-extrabold tabular-nums">
        <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
      </p>
    </div>
  );
}

function Insight({ text, action }: { text: string; action: string }) {
  const [approved, setApproved] = useState(false);
  return (
    <div className="mt-4 rounded-xl border border-emerald-600/30 bg-emerald-600/[0.07] p-3">
      <p className="text-xs font-semibold text-emerald-600">AI coach</p>
      <p className="mt-1 text-sm">{text}</p>
      <button
        onClick={() => setApproved(true)}
        disabled={approved}
        className="mt-2 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
      >
        {approved ? "Approved ✓ (sample)" : action}
      </button>
    </div>
  );
}

/* ---------- Shop ---------- */

const products = [
  { id: "tee", name: "T-shirt", price: 20, stock: 8 },
  { id: "cap", name: "Cap", price: 15, stock: 5 },
  { id: "bottle", name: "Water bottle", price: 12, stock: 14 },
  { id: "bag", name: "Backpack", price: 48, stock: 3 },
];

function ShopDemo() {
  const [stock, setStock] = useState<Record<string, number>>(
    Object.fromEntries(products.map((p) => [p.id, p.stock])),
  );
  const [cart, setCart] = useState<Record<string, number>>({});
  const [sales, setSales] = useState(240);
  const [orders, setOrders] = useState(9);

  const cartTotal = products.reduce((sum, p) => sum + (cart[p.id] ?? 0) * p.price, 0);
  const low = products.filter((p) => stock[p.id] <= 3);

  function add(id: string) {
    if ((cart[id] ?? 0) >= stock[id]) return;
    setCart({ ...cart, [id]: (cart[id] ?? 0) + 1 });
  }

  function charge() {
    if (cartTotal === 0) return;
    setStock(Object.fromEntries(products.map((p) => [p.id, stock[p.id] - (cart[p.id] ?? 0)])));
    setSales(sales + cartTotal);
    setOrders(orders + 1);
    setCart({});
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Today's sales" value={sales} prefix="$" />
        <Kpi label="Orders" value={orders} />
        <Kpi label="Low stock items" value={low.length} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold text-foreground/50">Tap an item to sell it</p>
          <div className="grid grid-cols-2 gap-2">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => add(p.id)}
                disabled={stock[p.id] === 0}
                className="rounded-xl border border-foreground/15 p-3 text-left transition hover:border-emerald-600 active:scale-95 disabled:opacity-40"
              >
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-sm">${p.price}</p>
                <p className={`text-xs ${stock[p.id] <= 3 ? "font-semibold text-amber-600" : "text-foreground/50"}`}>
                  {stock[p.id]} in stock
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-foreground/10 p-3">
          <p className="text-xs font-semibold text-foreground/50">Current sale</p>
          <ul className="mt-2 min-h-16 flex-1 divide-y divide-foreground/10 text-sm">
            {products
              .filter((p) => cart[p.id])
              .map((p) => (
                <li key={p.id} className="flex justify-between py-1.5">
                  <span>
                    {p.name} <span className="text-foreground/50">×{cart[p.id]}</span>
                  </span>
                  <span className="font-semibold">${cart[p.id] * p.price}</span>
                </li>
              ))}
            {cartTotal === 0 && <li className="py-1.5 text-foreground/40">Nothing yet</li>}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-foreground/10 pt-2">
            <span className="text-sm text-foreground/60">Total</span>
            <span className="text-xl font-extrabold">${cartTotal}</span>
          </div>
          <button
            onClick={charge}
            disabled={cartTotal === 0}
            className="mt-3 rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-40"
          >
            Charge ${cartTotal}
          </button>
        </div>
      </div>

      <Insight
        key={low.map((p) => p.id).join()}
        text={
          low.length > 0
            ? `${low.map((p) => `${p.name} (${stock[p.id]} left)`).join(", ")} running low. Reorder 10 each from your supplier?`
            : "Stock levels look healthy. Your best seller this week is the T-shirt."
        }
        action={low.length > 0 ? "Approve reorder" : "Got it"}
      />
    </div>
  );
}

/* ---------- Hotel ---------- */

type Room = "free" | "occupied" | "cleaning";
const rate = 80;
const nextRoom: Record<Room, Room> = { free: "occupied", occupied: "cleaning", cleaning: "free" };

function HotelDemo() {
  const [rooms, setRooms] = useState<Room[]>([
    "occupied", "occupied", "free", "cleaning", "occupied", "free",
    "occupied", "free", "free", "occupied", "cleaning", "free",
  ]);
  const occupied = rooms.filter((r) => r === "occupied").length;
  const cleaning = rooms.filter((r) => r === "cleaning").length;
  const occupancy = Math.round((occupied / rooms.length) * 100);

  const style: Record<Room, string> = {
    free: "border-foreground/20",
    occupied: "border-emerald-600 bg-emerald-600 text-white",
    cleaning: "border-amber-500 bg-amber-500/20 text-amber-600",
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Occupancy" value={occupancy} suffix="%" />
        <Kpi label="Tonight's revenue" value={occupied * rate} prefix="$" />
        <Kpi label="Rooms to clean" value={cleaning} />
      </div>

      <p className="mb-2 mt-4 text-xs font-semibold text-foreground/50">
        Tap a room to change its status
      </p>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
        {rooms.map((r, i) => (
          <button
            key={i}
            onClick={() => setRooms(rooms.map((x, j) => (j === i ? nextRoom[x] : x)))}
            className={`rounded-xl border p-3 text-center text-sm font-semibold transition active:scale-95 ${style[r]}`}
          >
            {101 + i}
            <span className="block text-[10px] font-medium capitalize opacity-80">{r}</span>
          </button>
        ))}
      </div>

      <Insight
        key={occupancy < 50 ? "low" : "ok"}
        text={
          occupancy < 50
            ? `Only ${occupancy}% booked tonight. Send a 15% last-minute offer to guests who stayed before?`
            : `${occupancy}% booked tonight. Raise tomorrow's rate by 10% while demand is high?`
        }
        action={occupancy < 50 ? "Send offer" : "Raise rate"}
      />
    </div>
  );
}

/* ---------- Salon ---------- */

const slots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const price = 30;

function SalonDemo() {
  const [booked, setBooked] = useState<string[]>(["09:00", "11:00", "14:00"]);
  const free = slots.length - booked.length;

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Booked today" value={booked.length} />
        <Kpi label="Expected revenue" value={booked.length * price} prefix="$" />
        <Kpi label="Free slots" value={free} />
      </div>

      <p className="mb-2 mt-4 text-xs font-semibold text-foreground/50">
        Tap a free slot to book it, or a booked slot to cancel
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {slots.map((s) => {
          const isBooked = booked.includes(s);
          return (
            <button
              key={s}
              onClick={() => setBooked(isBooked ? booked.filter((x) => x !== s) : [...booked, s])}
              className={`rounded-xl border p-3 text-sm font-semibold transition active:scale-95 ${
                isBooked ? "border-emerald-600 bg-emerald-600 text-white" : "border-foreground/20"
              }`}
            >
              {s}
              <span className="block text-[10px] font-medium opacity-80">
                {isBooked ? "Booked · Haircut $30" : "Free"}
              </span>
            </button>
          );
        })}
      </div>

      <Insight
        key={free > 4 ? "quiet" : "busy"}
        text={
          free > 4
            ? `${free} free slots today. Text past clients a 10% same-day offer?`
            : "Today is nearly full. Open Saturday's extra slots for online booking?"
        }
        action={free > 4 ? "Send offer" : "Open slots"}
      />
    </div>
  );
}

export default function ControlCenter() {
  const [tab, setTab] = useState<Tab>("shop");

  return (
    <div>
      <div role="tablist" className="mb-4 inline-flex rounded-full border border-foreground/15 p-1 text-sm font-semibold">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-5 py-1.5 transition ${
              tab === t.id ? "bg-emerald-600 text-white" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Window title={`Origo control center · ${tabs.find((t) => t.id === tab)?.label}`}>
        <div hidden={tab !== "shop"}>
          <ShopDemo />
        </div>
        <div hidden={tab !== "hotel"}>
          <HotelDemo />
        </div>
        <div hidden={tab !== "salon"}>
          <SalonDemo />
        </div>
      </Window>
      <p className="mt-3 text-xs text-foreground/40">
        Interactive demo with sample data. The real product is being built step by step.
      </p>
    </div>
  );
}
