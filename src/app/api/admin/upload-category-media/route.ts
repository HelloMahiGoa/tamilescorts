import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

const BUCKET = "profile-images";
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm"];

export async function POST(request: Request) {
  try {
    const supabaseAuth = await createClient();
    const { data: { user } } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    const isImage = ACCEPTED_IMAGE_TYPES.includes(file.type);
    const isVideo = ACCEPTED_VIDEO_TYPES.includes(file.type);
    if (!isImage && !isVideo) {
      return NextResponse.json(
        { error: "Invalid file type. Use image (jpeg, png, webp, avif) or video (mp4, webm)" },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop() || (isImage ? "jpg" : "mp4");
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const path = `category-profiles/${timestamp}-${safeName}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const supabase = createServiceRoleClient();

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(path, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (error) {
      return NextResponse.json(
        { error: `Upload failed: ${error.message}` },
        { status: 500 }
      );
    }

    const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(path);

    return NextResponse.json({ url: publicUrl, path });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
