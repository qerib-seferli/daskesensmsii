// Supabase Bağlantı Ayarları - Qərib üçün özəl
const SUPABASE_URL = "https://xbxraksptsqfpdvqtfyb.supabase.co";
const SUPABASE_KEY = "sb_publishable_WCZZZFpg-vBYKKbgVkSNPw_ivUiGs6O";

// Supabase müştərisini başladırıq
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Təhlükəsizlik: Giriş edilməyibsə login-ə yönləndir
async function checkAuth() {
    const { data: { session }, error } = await _supabase.auth.getSession();
    if (!session && !window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
    }
    return session;
}
