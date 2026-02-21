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
    const citySlug = formData.get("city") as string | null;
    const files = formData.getAll("files") as File[];

    if (!citySlug || !files?.length) {
      return NextResponse.json(
        { error: "Missing city or files" },
        { status: 400 }
      );
    }

    const supabase = createServiceRoleClient();
    const results: { pdfUrl: string; basePath: string }[] = [];
    const timestamp = Date.now();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file?.name?.toLowerCase().endsWith(".pdf")) continue;

      const pdfBuffer = Buffer.from(await file.arrayBuffer());
      const basePath = `${citySlug}/${timestamp}-${i}`;
      const pdfPath = `${basePath}/profile.pdf`;

      const { error: pdfError } = await supabase.storage
        .from("profile-pdfs")
        .upload(pdfPath, pdfBuffer, {
          contentType: "application/pdf",
          upsert: true,
        });

      if (pdfError) {
        return NextResponse.json(
          { error: `Failed to upload ${file.name}: ${pdfError.message}` },
          { status: 500 }
        );
      }

      const { data: { publicUrl: pdfUrl } } = supabase.storage
        .from("profile-pdfs")
        .getPublicUrl(pdfPath);

      results.push({ pdfUrl, basePath });
    }

    return NextResponse.json({ results });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
