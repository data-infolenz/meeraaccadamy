import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabaseServer } from '@/lib/supabase-server';

export const runtime = 'nodejs';

const schema = z.object({
  studentName: z.string().min(2).max(80),
  phone: z.string().min(10).max(15).regex(/^[+]?[\d\s-]+$/),
  email: z.string().min(1).email(),
  currentClass: z.string().min(1).max(40),
  course: z.enum(['NEET UG', 'JEE Main', 'JEE Advanced', 'Foundation']),
  message: z.string().max(500).optional().nullable(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { data, error } = await getSupabaseServer()
    .from('enquiries')
    .insert({
      student_name: parsed.data.studentName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      current_class: parsed.data.currentClass,
      course: parsed.data.course,
      message: parsed.data.message ?? null,
    })
    .select('id')
    .single();

  if (error) {
    return NextResponse.json(
      { error: 'Could not save enquiry' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id }, { status: 201 });
}
