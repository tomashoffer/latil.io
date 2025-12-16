import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Aquí podrías integrar con:
    // - Resend/SendGrid para enviar emails
    // - CRM (HubSpot, Salesforce, etc.)
    // - Google Sheets API
    // - Base de datos

    console.log("Form submission received:", validatedData);

    // Simulación de envío exitoso
    // En producción, aquí iría la lógica real de envío

    return NextResponse.json(
      { message: "Formulario enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 400 }
    );
  }
}

