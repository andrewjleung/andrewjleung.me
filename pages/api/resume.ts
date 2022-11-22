export default function handler(res, req) {
  req.redirect(
    302,
    "https://github.com/andrewjleung/resumes/raw/main/AndrewLeung_Resume.pdf"
  );
}
