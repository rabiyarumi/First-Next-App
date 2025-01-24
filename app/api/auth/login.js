export default function handler(req, res) {
    const callbackUrl = process.env.NEXT_PUBLIC_KIND_CALLBACK_URL;
    const loginUrl = `https://your-kinde-domain/oauth2/authorize?client_id=${process.env.KINDE_CLIENT_ID}&response_type=code&redirect_uri=${callbackUrl}`;

    res.redirect(loginUrl);
}