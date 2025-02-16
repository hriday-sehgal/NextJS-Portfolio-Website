// lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';

const supabaseAdminUrl = process.env.SUPABASE_URL;
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseAdminUrl || !supabaseAdminKey) {
  throw new Error("Supabase Admin URL and Key must be provided");
}

export const supabaseAdmin = createClient(supabaseAdminUrl, supabaseAdminKey);

