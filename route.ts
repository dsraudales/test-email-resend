import { Resend } from 'resend';

// Asegúrate de tener RESEND_API_KEY en tus variables de entorno de Vercel
const resend = new Resend(process.env.re_XNF9dMyd_MFhsr1mC6kEctrPZ5abWh55T);

export async function GET() {
  try {
    const { data, error } = await resend.batch.send([
      {
        from: 'Prueba <reclutamiento@updates.cree.gob.hn>',
        to: 'dvillalta@cree.gob.hn', // Cambia por uno tuyo
        subject: 'Prueba de Contratación 1',
        html: '<strong>Hola!</strong> Este es el primer correo de prueba.',
      },
      {
        from: 'Prueba <reclutamiento@cree.gob.hn>',
        to: 'draudales@cree.gob.hn', // Cambia por otro
        subject: 'Prueba de Contratación 2',
        html: '<p>Validando la entregabilidad del segundo participante.</p>',
      },
      {
        from: 'Prueba <reclutamiento@updates.cree.gob.hn>',
        to: 'jcaballero@cree.gob.hn', // Cambia por un tercero
        subject: 'Prueba de Contratación 3',
        html: '<h1>Casi listos</h1><p>Esta es la tercera prueba técnica.</p>',
      },
    ]);

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ message: "Correos enviados con éxito", data });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}
