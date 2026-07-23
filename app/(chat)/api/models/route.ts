import { chatModels, getCapabilities } from "@/lib/ai/models";

export const dynamic = "force-dynamic";

export async function GET() {
  const capabilities = getCapabilities();

  return Response.json(
    { capabilities, models: chatModels },
    {
      headers: {
        // Revalidate every 5 minutes so capability changes reflect quickly
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    }
  );
}
