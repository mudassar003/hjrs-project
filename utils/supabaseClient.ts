
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: string = "https://mkwzwcokpnibdbnchwkj.supabase.co"; // Replace with your Supabase URL
// const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rd3p3Y29rcG5pYmRibmNod2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NDYyNjAsImV4cCI6MjA1NDMyMjI2MH0.y3VqF2HrdM7KTTQtO9S0usfEoT3WI0ejzNnW0fN2KRE"; // Replace with your Supabase anon key

// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);



