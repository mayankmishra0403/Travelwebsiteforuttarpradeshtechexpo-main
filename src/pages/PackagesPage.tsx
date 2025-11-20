// src/pages/PackagesPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Search, Users, Bookmark, Clock, Star, Map, Save, Share2 } from "lucide-react";

import { CITIES as IMPORTED_CITIES } from "../data/UPData";
import { holidayPackages as IMPORTED_PACKAGES } from "../data/travel-packages";
import type { Temple } from "../data/UPData";

// types
type City = {
  id: string;
  name: string;
  region?: string;
  tagline?: string;
  heroImage?: string;
  coords?: [number, number];
  temples: Temple[];
  hiddenGems?: { id: string; name: string; image: string; short: string }[];
  stays?: { id: string; name: string; priceFrom?: number; image?: string }[];
  famousDishes?: { id: string; name: string; image?: string }[];
  tags?: string[];
};

type HolidayPackage = {
  id: string;
  name: string;
  cityId: string;
  temples?: string[];
  durationNights: number;
  budgetPerPerson: number;
  dateOffsetDays?: number;
  pax?: number;
  image?: string;
  description?: string;
  tags?: string[];
};

const CITIES: City[] = (IMPORTED_CITIES as unknown) as City[];
const holidayPackages: HolidayPackage[] = (IMPORTED_PACKAGES as unknown) as HolidayPackage[];

/* ---------------------- small util (haversine) ---------------------- */
function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}
function haversine(a: [number, number], b: [number, number]) {
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const aa = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  return R * c;
}

/* ---------------------- Helpers ---------------------- */
function findCityById(cityId: string) {
  return CITIES.find((c) => c.id === cityId);
}
function findTempleByIdAcrossCities(templeId: string) {
  for (const c of CITIES) {
    const t = c.temples.find((x) => x.id === templeId);
    if (t) return t;
  }
  return undefined;
}

/* ---------------------- Main component ---------------------- */
export default function PackagesPage(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // data
  const [cities] = useState<City[]>(CITIES);

  // prefill from ?package=...
  const packageQuery = searchParams.get("package") ?? "";

  // search fields
  const [fromCity, setFromCity] = useState<string>("Kanpur");
  const [toCity, setToCity] = useState<string>("Ayodhya");
  const [date, setDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  });
  const [pax, setPax] = useState<number>(2);

  // filters
  const [budgetPerPerson, setBudgetPerPerson] = useState<number>(8000);
  const [regionFilter, setRegionFilter] = useState<string>("All Regions");
  const [themeFilter, setThemeFilter] = useState<string>("All Themes");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // planner state (keeps same logic)
  const [selectedCityId, setSelectedCityId] = useState<string>(cities[0]?.id ?? "");
  const selectedCity = cities.find((c) => c.id === selectedCityId) ?? (cities[0] as City);
  const [selectedTemples, setSelectedTemples] = useState<Temple[]>([]);
  const [chosenSlots, setChosenSlots] = useState<Record<string, string>>({});
  const [savedTrips, setSavedTrips] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("darshan360_trips") || "[]");
    } catch {
      return [];
    }
  });

  const [tab, setTab] = useState<"packages" | "planner" | "gems">("packages");
  const [showFloating, setShowFloating] = useState<boolean>(true);

  // prefill package effect (keeps prior behavior)
  useEffect(() => {
    if (!packageQuery) return;
    const pkg = holidayPackages.find((p) => p.id === packageQuery);
    if (!pkg) return;
    if (pkg.cityId) {
      setSelectedCityId(pkg.cityId);
      const city = findCityById(pkg.cityId);
      if (city) setToCity(city.name);
    }
    if (pkg.pax) setPax(pkg.pax);
    if (pkg.dateOffsetDays) {
      const d = new Date();
      d.setDate(d.getDate() + pkg.dateOffsetDays);
      setDate(d.toISOString().slice(0, 10));
    }
    if (pkg.temples && pkg.temples.length) {
      const templesFound: Temple[] = [];
      pkg.temples.forEach((tid) => {
        const t = findTempleByIdAcrossCities(tid);
        if (t) templesFound.push(t);
      });
      if (templesFound.length) {
        setSelectedTemples(templesFound);
        setTab("planner");
      }
    } else {
      const city = findCityById(pkg.cityId);
      if (city && city.temples && city.temples.length) {
        setSelectedTemples(city.temples.slice(0, 2));
        setTab("planner");
      }
    }
    setTimeout(() => window.scrollTo({ top: 350, behavior: "smooth" }), 250);
  }, [packageQuery]);

  /* -------------------- filters & derived lists -------------------- */
  const filteredPackages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return holidayPackages.filter((p) => {
      if (regionFilter !== "All Regions") {
        const city = findCityById(p.cityId);
        if (!city || city.region !== regionFilter) return false;
      }
      if (themeFilter !== "All Themes" && p.tags && !p.tags.includes(themeFilter.toLowerCase())) {
        // tags in data are lower-case; adapt accordingly
        return false;
      }
      if (p.budgetPerPerson > budgetPerPerson) return false;
      if (q && !(`${p.name} ${p.description ?? ""}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [budgetPerPerson, regionFilter, themeFilter, searchQuery]);

  /* -------------------- planner route util (kept) -------------------- */
  function planRouteGreedyPoints(points: { id: string; name: string; coords?: [number, number] }[]) {
    if (!points.length) return [];
    const visited: number[] = [];
    const remaining = points.map((_, i) => i);
    let current = 0;
    visited.push(current);
    remaining.splice(remaining.indexOf(current), 1);
    while (remaining.length) {
      let nearestIdx = -1;
      let nearestDist = Infinity;
      const curCoords = points[current].coords ?? [0, 0];
      for (const r of remaining) {
        const coords = points[r].coords ?? [0, 0];
        const d = haversine(curCoords as [number, number], coords as [number, number]);
        if (d < nearestDist) {
          nearestDist = d;
          nearestIdx = r;
        }
      }
      if (nearestIdx === -1) break;
      current = nearestIdx;
      visited.push(current);
      remaining.splice(remaining.indexOf(current), 1);
    }
    return visited.map((i) => points[i]);
  }
  const plannedRoute = useMemo(() => {
    const points = selectedTemples.map((t) => ({ id: t.id, name: t.name, coords: t.coords }));
    return planRouteGreedyPoints(points);
  }, [selectedTemples]);

  const routeDistanceKm = useMemo(() => {
    if (plannedRoute.length < 2) return 0;
    let dist = 0;
    for (let i = 0; i < plannedRoute.length - 1; i++) {
      if (plannedRoute[i].coords && plannedRoute[i + 1].coords) {
        dist += haversine(plannedRoute[i].coords as [number, number], plannedRoute[i + 1].coords as [number, number]);
      }
    }
    return Math.round(dist);
  }, [plannedRoute]);

  /* -------------------- planner actions -------------------- */
  function toggleTemple(t: Temple) {
    setSelectedTemples((s) => {
      if (s.find((x) => x.id === t.id)) {
        const updated = s.filter((x) => x.id !== t.id);
        setChosenSlots((cs) => {
          const copy = { ...cs };
          delete copy[t.id];
          return copy;
        });
        return updated;
      }
      return [...s, t];
    });
  }
  function pickSlot(templeId: string, slot: string) {
    setChosenSlots((s) => ({ ...s, [templeId]: slot }));
  }
  function removeSelectedTemple(id: string) {
    setSelectedTemples((s) => s.filter((t) => t.id !== id));
    setChosenSlots((cs) => {
      const copy = { ...cs };
      delete copy[id];
      return copy;
    });
  }
  function saveTrip(name = `Trip ${new Date().toLocaleString()}`) {
    const payload = {
      id: `trip_${Date.now()}`,
      name,
      meta: { fromCity, toCity, date, pax, budgetPerPerson },
      route: plannedRoute,
      selectedTemples,
      chosenSlots,
      distanceKm: routeDistanceKm,
      savedAt: new Date().toISOString(),
    };
    const updated = [...savedTrips, payload];
    setSavedTrips(updated);
    localStorage.setItem("darshan360_trips", JSON.stringify(updated));
    alert("Trip saved locally (demo). You can export or share it.");
  }
  function exportItinerary() {
    const payload = {
      meta: { fromCity, toCity, date, pax, budgetPerPerson },
      route: plannedRoute,
      selectedTemples,
      chosenSlots,
      distanceKm: routeDistanceKm,
      createdAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `darshan_itinerary_${new Date().toISOString()}.json`;
    a.click();
  }

  /* -------------------- UI helpers -------------------- */
  function crowdBadge(level: Temple["crowdLevel"]) {
    if (level === "Low") return <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Low</span>;
    if (level === "Moderate") return <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Moderate</span>;
    return <span className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">High</span>;
  }

  /* -------------------- Build filter options from data -------------------- */
  const regionOptions = useMemo(() => {
    const s = new Set<string>();
    CITIES.forEach((c) => c.region && s.add(c.region));
    return ["All Regions", ...Array.from(s)];
  }, []);

  const themeOptions = useMemo(() => {
    const s = new Set<string>();
    CITIES.forEach((c) => c.tags && c.tags.forEach((t) => s.add(t)));
    return ["All Themes", ...Array.from(s).map((x) => x[0].toUpperCase() + x.slice(1))];
  }, []);

  /* -------------------- Render -------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-800">
      {/* HERO */}
      <header className="bg-[linear-gradient(90deg,#0f172a,rgba(0,0,0,0.3))] text-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-sm">
                <img src="/content/shared/logo-small.png" alt="Darshan360" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Darshan360 — Premium UP Packages</h1>
                <p className="text-sm opacity-80 mt-1">Glassmorphism UI • Handpicked packages • Hidden gems & planner</p>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-2 flex gap-2 items-center border border-white/20 shadow-lg">
                <Search className="text-white/90" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search packages or themes..."
                  className="bg-transparent placeholder-white/70 outline-none text-white flex-1"
                />
                <Button className="bg-[#FF9933] hover:bg-[#e07f23] text-white" onClick={() => setTab("packages")}>Search</Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* LEFT: filters (glass) */}
        <aside className="col-span-12 lg:col-span-3">
          <Card className="p-4 bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-lg font-semibold">Filters</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-700">Region</label>
                <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="w-full mt-2 p-2 rounded border bg-white/60">
                  {regionOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-700">Max Budget (₹)</label>
                <div className="mt-2">
                  <Slider value={[budgetPerPerson]} min={1000} max={50000} step={500} onValueChange={(v: number[]) => setBudgetPerPerson(v[0])} />
                  <div className="text-sm text-slate-700 mt-2">₹{budgetPerPerson}</div>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-700">Theme</label>
                <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)} className="w-full mt-2 p-2 rounded border bg-white/60">
                  {themeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => { setRegionFilter("All Regions"); setThemeFilter("All Themes"); setBudgetPerPerson(8000); setSearchQuery(""); }} className="flex-1 border">Reset</Button>
                <Button onClick={() => { /* apply is implicit since filters are reactive */ }} className="flex-1 bg-[#0047AB] text-white">Apply</Button>
              </div>

              <div className="pt-2 border-t border-white/20 mt-2">
                <div className="text-sm font-medium mb-2">Saved Trips</div>
                <div className="space-y-2 max-h-48 overflow-auto">
                  {savedTrips.length === 0 && <div className="text-xs text-slate-700">No saved trips</div>}
                  {savedTrips.map((t: any) => (
                    <div key={t.id} className="bg-white/30 p-2 rounded flex items-center justify-between">
                      <div className="text-xs">{t.name}</div>
                      <div className="flex gap-2">
                        <button className="text-xs text-slate-800" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(t)); alert("Trip copied to clipboard"); }}>Copy</button>
                        <button className="text-xs text-red-700" onClick={() => { const updated = savedTrips.filter((x) => x.id !== t.id); setSavedTrips(updated); localStorage.setItem("darshan360_trips", JSON.stringify(updated)); }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </aside>

        {/* CENTER: main content */}
        <section className="col-span-12 lg:col-span-6 space-y-6">
          {/* Top packages carousel / recommended */}
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-xl font-bold text-[#0047AB]">Recommended Packages</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredPackages.slice(0, 4).map((pkg) => {
                const city = findCityById(pkg.cityId);
                return (
                  <motion.div key={pkg.id} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/30 bg-white/30 backdrop-blur-md">
                    <div className="relative h-48">
                      <ImageWithFallback src={pkg.image ?? city?.heroImage ?? "/content/shared/placeholder.jpg"} alt={pkg.name} className="w-full h-full object-cover" />
                      <div className="absolute left-4 top-4 bg-white/30 backdrop-blur-sm rounded px-3 py-1 flex items-center gap-2">
                        <MapPin className="text-[#FF9933]" /> <div className="text-sm">{city?.name}</div>
                      </div>
                      <div className="absolute right-4 bottom-4 bg-gradient-to-br from-[#FF9933] to-[#0047AB] text-white px-3 py-2 rounded font-semibold">
                        ₹{pkg.budgetPerPerson}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-lg">{pkg.name}</div>
                          <div className="text-sm text-slate-700 mt-1">{pkg.description}</div>
                        </div>
                        <div className="text-right text-xs text-slate-600">
                          {pkg.durationNights}N • {pkg.pax ?? 2} pax
                          <div className="text-xs mt-2 text-slate-500">{pkg.tags?.join(" • ")}</div>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Button className="flex-1 bg-[#FF9933] text-white" onClick={() => navigate(`/planner?package=${encodeURIComponent(pkg.id)}`)}>Customize</Button>
                        <Button onClick={() => alert(`${pkg.name}\n\n${pkg.description ?? ""}\nFrom ₹${pkg.budgetPerPerson}`)}>Details</Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* All Packages list (modern card list) */}
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">All Packages</h3>
              <div className="text-sm text-slate-600">{filteredPackages.length} Packages Found</div>
            </div>

            <div className="mt-4 space-y-4">
              {filteredPackages.map((pkg) => {
                const city = findCityById(pkg.cityId);
                return (
                  <div key={pkg.id} className="flex flex-col md:flex-row items-stretch gap-4 bg-white/25 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow">
                    <div className="w-full md:w-56 h-40 overflow-hidden rounded-lg">
                      <ImageWithFallback src={pkg.image ?? city?.heroImage ?? "/content/shared/placeholder.jpg"} alt={pkg.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-lg">{pkg.name}</div>
                            <div className="text-xs text-slate-700 mt-1">{city?.name} • {pkg.durationNights}N</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-600">From</div>
                            <div className="font-bold text-xl text-[#138808]">₹{pkg.budgetPerPerson}</div>
                          </div>
                        </div>

                        <p className="text-sm text-slate-700 mt-3 line-clamp-2">{pkg.description}</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {pkg.tags?.map((tag) => <span key={tag} className="text-xs px-2 py-1 bg-white/20 rounded-full">{tag}</span>)}
                          {city?.tags?.slice(0, 2).map((t) => <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded-full">{t}</span>)}
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Button className="bg-[#FF9933] text-white" onClick={() => navigate(`/planner?package=${encodeURIComponent(pkg.id)}`)}>Customize</Button>
                        <Button onClick={() => alert(`${pkg.name}\n\n${pkg.description ?? ""}\nFrom ₹${pkg.budgetPerPerson}`)}>Details</Button>
                        <Button onClick={() => { setSelectedCityId(pkg.cityId); setTab("planner"); setTimeout(() => window.scrollTo({ top: 400, behavior: "smooth" }), 120); }}>Open Planner</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RIGHT: Underrated Gems + quick stats */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <Card className="p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Underrated Gems</h4>
              <div className="text-xs text-slate-700">Hidden & offbeat</div>
            </div>

            <div className="mt-3 space-y-3">
              {CITIES.flatMap((c) => c.hiddenGems?.map((g) => ({ ...g, cityName: c.name, cityId: c.id })) ?? []).slice(0, 6).map((g) => (
                <div key={g.id} className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded overflow-hidden">
                    <ImageWithFallback src={g.image ?? "/content/shared/placeholder.jpg"} alt={g.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{g.name}</div>
                    <div className="text-xs text-slate-700">{g.cityName}</div>
                    <div className="text-xs text-slate-600 mt-1 line-clamp-2">{g.short}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button className="w-full bg-[#0047AB] text-white" onClick={() => setTab("gems")}>Explore More Gems</Button>
            </div>
          </Card>

          <Card className="p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
            <h4 className="font-semibold">Quick Picks</h4>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <button onClick={() => { setBudgetPerPerson(6000); setRegionFilter("All Regions"); }} className="text-left p-2 rounded bg-white/10">Best Budget Picks</button>
              <button onClick={() => { setThemeFilter("Spiritual"); }} className="text-left p-2 rounded bg-white/10">Spiritual Trips</button>
              <button onClick={() => { setRegionFilter("Bundelkhand"); }} className="text-left p-2 rounded bg-white/10">Bundelkhand Circuit</button>
            </div>
          </Card>
        </aside>

        {/* Underrated gems expanded section (full width when selected) */}
        {tab === "gems" && (
          <div className="col-span-12 mt-8">
            <h3 className="text-2xl font-bold text-[#0047AB]">Underrated Gems of Uttar Pradesh</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {CITIES.flatMap((c) => c.hiddenGems?.map((g) => ({ ...g, cityName: c.name, cityId: c.id })) ?? []).map((g) => (
                <motion.div key={g.id} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden border bg-white/30 backdrop-blur-md p-0 shadow-lg">
                  <div className="h-40 overflow-hidden">
                    <ImageWithFallback src={g.image ?? "/content/shared/placeholder.jpg"} alt={g.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{g.name}</div>
                    <div className="text-xs text-slate-600">{g.cityName}</div>
                    <p className="text-sm text-slate-700 mt-2">{g.short}</p>
                    <div className="mt-3 flex gap-2">
                      <Button onClick={() => { setSelectedCityId(g.cityId); setTab("planner"); }}>Plan Visit</Button>
                      <Button onClick={() => alert(`${g.name} — ${g.cityName}`)} className="border">Details</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating customize button */}
      {showFloating && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => { setTab("planner"); window.scrollTo({ top: 400, behavior: "smooth" }); }}
          className="fixed right-6 bottom-6 z-50 bg-white rounded-full shadow-xl p-4 border border-[#e6e6e6] flex items-center gap-3"
          title="Customize my trip"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9933] to-[#0047AB] flex items-center justify-center text-white">
            <Bookmark />
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium">Customise my trip</div>
            <div className="text-xs text-slate-500">Temple routes, slots & packages</div>
          </div>
        </motion.button>
      )}

      <footer className="bg-white border-t mt-8 py-6 text-center text-sm text-slate-500">Darshan360 • Premium UI • Demo</footer>
    </div>
  );
}
