import React, { useEffect, useMemo, useState } from "react";

// Uttar Pradesh Travel — Hackathon-ready single-file React component
// Usage: drop this component into a Vite+React+TypeScript app (src/App.tsx) and ensure Tailwind is configured.
// Dependencies you'll need to install:
// npm install react-leaflet leaflet framer-motion
// Also add Leaflet CSS in index.css: import 'leaflet/dist/leaflet.css'

// ------------------------- Dataset (ready-to-use JSON) -------------------------
const UP_DATA = {
  UttarPradesh: [
    {
      city: "Lucknow",
      places: [
        "Bara Imambara",
        "Chota Imambara",
        "Rumi Darwaza",
        "Hazratganj",
        "Ambedkar Park",
        "Gomti Riverfront"
      ],
      restaurants: ["Tunday Kababi", "Royal Café", "Idris Biryani", "Urban Terrace", "Moti Mahal"],
      coords: [26.8467, 80.9462]
    },
    {
      city: "Kanpur",
      places: ["JK Temple", "Allen Forest Zoo", "Nana Rao Park", "Moti Jheel", "Z Square Mall"],
      restaurants: ["Ritaj Darbar", "Status Club", "Little Chef", "Haveli Restaurant"],
      coords: [26.4499, 80.3319]
    },
    {
      city: "Varanasi",
      places: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Assi Ghat", "Sarnath", "Ramnagar Fort"],
      restaurants: ["Kashi Chat Bhandar", "Baati Chokha", "Pizzeria Vaatika", "Deena Chat Bhandar"],
      coords: [25.3176, 82.9739]
    },
    {
      city: "Prayagraj",
      places: ["Triveni Sangam", "Anand Bhawan", "Allahabad Fort", "Khusro Bagh"],
      restaurants: ["El Chico", "Tandoor Restaurant", "Friends Kitchen"],
      coords: [25.4358, 81.8463]
    },
    {
      city: "Agra",
      places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri", "Itimad-ud-Daulah"],
      restaurants: ["Peshawri", "Pinch of Spice", "Dasaprakash", "Joney’s Place"],
      coords: [27.1767, 78.0081]
    },
    {
      city: "Noida",
      places: ["Worlds of Wonder", "DLF Mall of India", "Okhla Bird Sanctuary", "Buddh International Circuit"],
      restaurants: ["The Saffron Boutique", "Pirates of Grill", "Barbeque Nation", "Desi Vibes"],
      coords: [28.5355, 77.3910]
    },
    {
      city: "Ghaziabad",
      places: ["City Forest", "Drizzling Land", "ISKCON Temple", "Shipra Mall"],
      restaurants: ["Barbeque Nation", "Pind Balluchi", "Nazeer Foods", "The Yellow Chilli"],
      coords: [28.6692, 77.4538]
    },
    {
      city: "Meerut",
      places: ["Hastinapur", "Augarnath Temple", "Suraj Kund Park", "Gandhi Bagh"],
      restaurants: ["Bindal’s", "Subway", "Chawla’s", "MFC"],
      coords: [28.9845, 77.7064]
    }
  ]
};

// ------------------------- Types -------------------------
type City = {
  city: string;
  places: string[];
  restaurants: string[];
  coords?: [number, number];
};

// ------------------------- Helpers: Simple itinerary planner (greedy TSP) -------------------------
// We'll use a simple nearest-neighbor heuristic for route optimization. Good enough for demo/prototype.
function haversine([lat1, lon1]: [number, number], [lat2, lon2]: [number, number]) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function planRouteGreedy(points: { city: string; coords?: [number, number] }[], startIndex = 0) {
  const visited: number[] = [];
  const remaining = points.map((p, i) => i);
  let current = startIndex;
  visited.push(current);
  remaining.splice(remaining.indexOf(current), 1);
  while (remaining.length) {
    const curCoords = points[current].coords ?? [0, 0];
    let nearestIdx = -1;
    let nearestDist = Infinity;
    for (const r of remaining) {
      const d = haversine(curCoords as [number, number], (points[r].coords ?? [0, 0]) as [number, number]);
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

// ------------------------- UI Components -------------------------
function Header() {
  return (
    <header className="p-6 bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">UP Travel — Plan Your Visit</h1>
        <div className="text-sm opacity-90">Hackathon demo • Customizable itineraries</div>
      </div>
    </header>
  );
}

function CityCard({ city }: { city: City }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-all">
      <h3 className="font-semibold text-lg">{city.city}</h3>
      <p className="text-sm mt-2">Top spots:</p>
      <ul className="list-disc list-inside text-sm">
        {city.places.slice(0, 4).map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="text-sm mt-2">Popular eats: {city.restaurants.slice(0, 3).join(", ")}</p>
    </div>
  );
}

// Search + Filter + City Selector
function Controls({ data, onSelectCities }: { data: City[]; onSelectCities: (cities: City[]) => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const chosen = data.filter((c) => selected[c.city]);
    onSelectCities(chosen.length ? chosen : data.slice(0, 3));
  }, [selected]);

  const filtered = data.filter((c) => c.city.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-4">
      <div className="mb-3 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cities or places..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={() => {
            // quick reset
            setQuery("");
            setSelected({});
          }}
          className="px-3 py-2 bg-slate-100 border rounded"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 max-h-56 overflow-auto">
        {filtered.map((c) => (
          <label key={c.city} className="flex items-start gap-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={!!selected[c.city]}
              onChange={(e) => setSelected((s) => ({ ...s, [c.city]: e.target.checked }))}
            />
            <div>
              <div className="font-medium">{c.city}</div>
              <div className="text-xs opacity-80">{c.places[0]}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

// Minimal MapView placeholder (so the UI looks finished even if Leaflet isn't configured)
function MapPlaceholder() {
  return (
    <div className="h-64 bg-slate-50 border flex items-center justify-center text-sm text-slate-500">
      Map preview (install react-leaflet + leaflet for full interactive map)
    </div>
  );
}

// Itinerary view that uses the greedy planner
function Itinerary({ cities }: { cities: City[] }) {
  const points = cities.map((c) => ({ city: c.city, coords: c.coords }));
  const route = useMemo(() => planRouteGreedy(points, 0), [cities]);

  return (
    <div className="p-4">
      <h3 className="font-semibold">Planned Itinerary</h3>
      <ol className="list-decimal ml-6 mt-2">
        {route.map((p) => (
          <li key={p.city} className="mb-1">
            <div className="font-medium">{p.city}</div>
            {p.coords && (
              <div className="text-xs opacity-80">Lat: {p.coords[0]}, Lon: {p.coords[1]}</div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Main App Component
export function BookingPage() {
  const cities: City[] = UP_DATA.UttarPradesh as City[];
  const [selectedCities, setSelectedCities] = useState<City[]>(cities.slice(0, 3));
  const [theme, setTheme] = useState<"standard" | "compact" | "map">("standard");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="col-span-1 bg-white rounded-lg shadow-sm">
          <Controls data={cities} onSelectCities={(s) => setSelectedCities(s)} />

          <div className="p-4 border-t">
            <div className="mb-2 font-semibold">Customization</div>
            <div className="flex gap-2">
              <button
                onClick={() => setTheme("standard")}
                className={`px-3 py-2 rounded ${theme === "standard" ? "bg-indigo-600 text-white" : "border"}`}
              >
                Standard
              </button>
              <button
                onClick={() => setTheme("compact")}
                className={`px-3 py-2 rounded ${theme === "compact" ? "bg-indigo-600 text-white" : "border"}`}
              >
                Compact
              </button>
              <button
                onClick={() => setTheme("map")}
                className={`px-3 py-2 rounded ${theme === "map" ? "bg-indigo-600 text-white" : "border"}`}
              >
                Map View
              </button>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="text-sm">Quick export</div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => {
                  const payload = JSON.stringify({ cities: selectedCities }, null, 2);
                  const blob = new Blob([payload], { type: "application/json" });
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(blob);
                  a.download = "up-itinerary.json";
                  a.click();
                }}
                className="px-3 py-2 border rounded"
              >
                Export JSON
              </button>
              <button
                onClick={() => alert("Share link generation demo — integrate backend to persist itineraries")}
                className="px-3 py-2 border rounded"
              >
                Generate Link
              </button>
            </div>
          </div>
        </aside>

        <section className="col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">Plan Your Visit — Uttar Pradesh</h2>
            <p className="text-sm mt-2 text-slate-600">
              Everything you need to know for an unforgettable journey through Uttar Pradesh.
            </p>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-3 border rounded">
                <div className="font-medium">Best Time to Visit</div>
                <ul className="text-sm list-disc list-inside mt-2">
                  <li>October to March: Pleasant weather for sightseeing</li>
                  <li>July to September: Monsoon season, lush greenery</li>
                  <li>April to June: Summer, ideal for hill stations</li>
                </ul>
              </div>

              <div className="p-3 border rounded">
                <div className="font-medium">Getting Around</div>
                <ul className="text-sm list-disc list-inside mt-2">
                  <li>Extensive railway network connecting major cities</li>
                  <li>Well-connected bus services (state & private)</li>
                  <li>Metro services in Lucknow, Kanpur, and Noida</li>
                  <li>Car rentals and taxi services available</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-3 border rounded">
                <div className="font-medium">Popular Travel Routes</div>
                <div className="text-sm mt-2">
                  <strong>Golden Triangle Extension</strong>
                  <div>Delhi → Agra → Fatehpur Sikri → Varanasi (5-7 days)</div>
                  <strong>Spiritual Circuit</strong>
                  <div>Varanasi → Ayodhya → Prayagraj → Chitrakoot (4-6 days)</div>
                </div>
              </div>

              <div className="p-3 border rounded">
                <div className="font-medium">Seasonal Guide</div>
                <div className="text-sm mt-2">
                  <div>Winter (Oct - Mar): 10-25°C — Perfect for all activities</div>
                  <div>Monsoon (Jul - Sep): 25-35°C — Lush landscapes, fewer crowds</div>
                  <div>Summer (Apr - Jun): 30-45°C — Visit hill stations</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-2">Selected Cities</h3>
              <div className={`grid ${theme === "compact" ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                {selectedCities.map((c) => (
                  <CityCard key={c.city} city={c} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <Itinerary cities={selectedCities} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            {theme === "map" ? <MapPlaceholder /> : <div>{/* could show gallery */}</div>}
          </div>
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-slate-600">Built for hackathon • Customize data & UI as needed</footer>
    </div>
  );
}
