import { NextResponse } from "next/server";

import { getPayloadClient } from "@/lib/payload";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Nieprawidłowe dane formularza." },
      { status: 400 },
    );
  }

  const { imie, email, wiadomosc } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof imie !== "string" ||
    typeof email !== "string" ||
    typeof wiadomosc !== "string" ||
    !imie.trim() ||
    !email.trim() ||
    !wiadomosc.trim()
  ) {
    return NextResponse.json(
      { error: "Wypełnij wszystkie pola." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json(
      { error: "Podaj poprawny adres e-mail." },
      { status: 400 },
    );
  }

  const payload = await getPayloadClient();

  await payload.create({
    collection: "wiadomosci",
    data: {
      imie: imie.trim(),
      email: email.trim(),
      wiadomosc: wiadomosc.trim(),
    },
  });

  return NextResponse.json({ ok: true });
}
