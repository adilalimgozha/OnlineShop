
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dbmarlzqwbtiunzeqgxq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibWFybHpxd2J0aXVuemVxZ3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMDE3MjUsImV4cCI6MjA2ODY3NzcyNX0.pkkAC_838LMaqTJ06UNfQoOdsyqQlbKGa4pJqXOJRpY"
export const supabase = createClient(supabaseUrl, supabaseKey)