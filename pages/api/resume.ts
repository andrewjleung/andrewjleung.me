import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    302,
    "https://github.com/andrewjleung/resumes/raw/main/AndrewLeung_Resume.pdf"
  );
}
