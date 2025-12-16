import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Inicializar Resend solo si hay API key
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY no configurada. Email no enviado.");
      console.log("Form submission received:", validatedData);
      return NextResponse.json(
        { message: "Formulario recibido (email no configurado)" },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviar email a contact@latil.io
    const { data, error } = await resend.emails.send({
      from: "Latil.io Contact Form <onboarding@resend.dev>", // Cambiar por tu dominio verificado en Resend
      to: ["contact@latil.io"],
      subject: `Nuevo contacto: ${validatedData.name} - ${validatedData.company}`,
      html: `
        <h2>Nuevo contacto desde el formulario</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Empresa:</strong> ${validatedData.company}</p>
        <p><strong>Rol/Cargo:</strong> ${validatedData.role}</p>
        <p><strong>Desafío principal:</strong> ${validatedData.challenge}</p>
        ${validatedData.message ? `<p><strong>Mensaje:</strong></p><p>${validatedData.message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
      text: `
Nuevo contacto desde el formulario

Nombre: ${validatedData.name}
Email: ${validatedData.email}
Empresa: ${validatedData.company}
Rol/Cargo: ${validatedData.role}
Desafío principal: ${validatedData.challenge}
${validatedData.message ? `\nMensaje:\n${validatedData.message}` : ''}
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

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

