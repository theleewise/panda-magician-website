import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: process.env.SANITY_PROJECT_ID, 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: process.env.NODE_ENV === "production", 
})