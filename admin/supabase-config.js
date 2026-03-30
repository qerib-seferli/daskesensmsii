// Sənin verdiyin rəsmi Supabase məlumatları
const _supabaseUrl = "https://xbxraksptsqfpdvqtfyb.supabase.co";
const _supabaseKey = "sb_publishable_WCZZZFpg-vBYKKbgVkSNPw_ivUiGs6O";

const _supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// Giriş yoxlaması funksiyası
async function checkAuth() {
    const { data: { session } } = await _supabase.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
    return session;
}
