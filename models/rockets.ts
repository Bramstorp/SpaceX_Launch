// @ts-nocheck

import * as log from "https://deno.land/std/log/mod.ts"
import * as _ from "https://deno.land/x/lodash@4.17.15-es/lodash.js"

const rockets = new Map<number, Launch>();

async function downloadLaunchData() {
  log.info("Downloading rocket data...");
  const response = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET",
  });

  if (!response.ok) {
    log.warning("Problem downloading launch data.");
    throw new Error("rocket data download failed.");
  }

  const launchData = await response.json();
  for (const launch of launchData) {
    const payloads = launch["rocket"]["second_stage"]["payloads"]

    const flightData = {
      rocket: launch["rocket"]["rocket_name"],
    };

    rockets.set(flightData.flightNumber, flightData)
  }
}

await downloadLaunchData();
log.info(`Downloaded data for ${rockets.size} SpaceX rockets.`)

export function getAll() {
  return Array.from(rockets.values())
}

