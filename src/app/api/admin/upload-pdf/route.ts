import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const supabaseAuth = await createClient();
    const {
      data: { user },
    } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const citySlug = formData.get("city") as string | null;

    if (!file || !citySlug) {
      return NextResponse.json(
        { error: "Missing file or city" },
        { status: 400 }
      );
    }

    const pdfBuffer = Buffer.from(await file.arrayBuffer());
    const supabase = createServiceRoleClient();
    const timestamp = Date.now();
    const basePath = `${citySlug}/${timestamp}`;
    const pdfPath = `${basePath}/profile.pdf`;

    const { error: pdfError } = await supabase.storage
      .from("profile-pdfs")
      .upload(pdfPath, pdfBuffer, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (pdfError) {
      return NextResponse.json(
        { error: `Failed to upload PDF: ${pdfError.message}` },
        { status: 500 }
      );
    }

    const {
      data: { publicUrl: pdfUrl },
    } = supabase.storage.from("profile-pdfs").getPublicUrl(pdfPath);

    return NextResponse.json({ pdfUrl, basePath });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
