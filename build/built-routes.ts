import { middleware } from "@/middleware";

export default {
"/api": {GET: (req: any) => middleware(req, require("#/src/api/index.ts").GET), 
POST: (req: any) => middleware(req, require("#/src/api/index.ts").POST), 
PUT: (req: any) => middleware(req, require("#/src/api/index.ts").PUT), 
DELETE: (req: any) => middleware(req, require("#/src/api/index.ts").DELETE), 
}
}