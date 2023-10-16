import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skU3cdAyHH4yhUcYDEh4wquoVKjNpXbXmlnloVjZ3BlZP4eNZgvlSG14gqh2hJzXRY7L3k0ZPB9Fc2aKWoI8yHzMnB4ozQG90OyxSXLMxFl7FJzeBziqdmIkn30rhcsFJwbeV8sf9D0etSB67W7EpFYa93SUe6RIVaQBeF0KZymPRow4DHvA",
})
