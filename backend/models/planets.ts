// @ts-nocheck

import { join, parse, BufReader, pick, log } from "../deps.ts"

type Planet = Record<string, string>

let planets : Array<Planet>

async function loadPlanetData() {
  const path = join("data", "kepler_exoplanets_nasa.csv")

  const file = await Deno.open(path)
  const bufReader = new BufReader(file)
  
  const result = await parse(bufReader, {
    header: true,
    comment: "#",
  });

  // Close file resource id (rid) to avoid leaking resources.
  Deno.close(file.rid);

  const planets = (result as Array<Planet>).filter((planet) => {
    return planet["koi_disposition"] === "CONFIRMED" 
  });

  return planets.map((planet) => {
    return pick(planet, [
      "kepid",
      "kepoi_name",
      "kepler_name",
      "koi_srad",
      "koi_smass",
      "koi_count",
    ]);
  })
}

planets = await loadPlanetData()
log.info(`${planets.length} planets found`)

export function getAll() {
  return planets;
}

