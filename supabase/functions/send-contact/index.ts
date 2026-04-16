import { corsHeaders } from "@supabase/supabase-js/cors";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const validate = (data: ContactPayload) => {
  const errors: string[] = [];
  if (!data.firstName || data.firstName.trim().length === 0 || data.firstName.length > 100) errors.push("Invalid first name");
  if (!data.lastName || data.lastName.trim().length === 0 || data.lastName.length > 100) errors.push("Invalid last name");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) errors.push("Invalid email");
  if (!data.message || data.message.trim().length === 0 || data.message.length > 2000) errors.push("Invalid message");
  return errors;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "Webhook not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as ContactPayload;
    const errors = validate(body);
    if (errors.length > 0) {
      return new Response(JSON.stringify({ error: errors.join(", ") }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const discordPayload = {
      embeds: [
        {
          title: "📬 New Contact Form Submission",
          color: 0x3b82f6,
          fields: [
            { name: "Name", value: `${body.firstName} ${body.lastName}`, inline: true },
            { name: "Email", value: body.email!, inline: true },
            { name: "Message", value: body.message!.slice(0, 1900) },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      const errText = await discordRes.text();
      console.error("Discord webhook failed:", discordRes.status, errText);
      return new Response(JSON.stringify({ error: "Failed to send message" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
