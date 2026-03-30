// Supabase Məlumatları
const _supabaseUrl = "https://xbxraksptsqfpdvqtfyb.supabase.co";
const _supabaseKey = "sb_publishable_WCZZZFpg-vBYKKbgVkSNPw_ivUiGs6O";

// Müştərini yaradırıq
const _supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// Bu funksiyanı yalnız admin.html-də çağıracağıq
async function checkAuth() {
    const { data: { session } } = await _supabase.auth.getSession();
    return session;
}
