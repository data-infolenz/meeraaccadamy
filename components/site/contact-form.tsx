'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { courses } from '@/lib/site';
import { cn } from '@/lib/utils';

const schema = z.object({
  studentName: z
    .string()
    .min(2, 'Please enter the student name')
    .max(80, 'That name is too long'),
  phone: z
    .string()
    .min(10, 'Enter a valid 10-digit phone number')
    .max(15, 'Enter a valid phone number')
    .regex(/^[+]?[\d\s-]+$/, 'Enter a valid phone number'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  currentClass: z.string().min(1, 'Please select a class'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().max(500, 'Keep the message under 500 characters').optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const classOptions = ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper'];

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: '',
      phone: '',
      email: '',
      currentClass: '',
      course: '',
      message: '',
    },
  });

  const currentClassValue = watch('currentClass');
  const courseValue = watch('course');

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass flex flex-col items-center justify-center rounded-lg p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Thank you! Enquiry received.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground text-pretty">
          Our admissions team will reach out to you shortly. For anything urgent,
          call or WhatsApp us using the details on the right.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    className="glass rounded-lg p-6 sm:p-8"
      aria-label="Admission enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student Name" error={errors.studentName?.message} required>
          <Input
            placeholder="Student full name"
            autoComplete="name"
            aria-invalid={!!errors.studentName}
            {...register('studentName')}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message} required>
          <Input
            type="tel"
            placeholder="10-digit mobile number"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <Input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </Field>

        <Field label="Current Class" error={errors.currentClass?.message} required>
          <Select
            value={currentClassValue}
            onValueChange={(v) => setValue('currentClass', v, { shouldValidate: true })}
          >
            <SelectTrigger aria-invalid={!!errors.currentClass}>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {classOptions.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          label="Course Selection"
          error={errors.course?.message}
          required
          className="sm:col-span-2"
        >
          <Select
            value={courseValue}
            onValueChange={(v) => setValue('course', v, { shouldValidate: true })}
          >
            <SelectTrigger aria-invalid={!!errors.course}>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          label="Message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            placeholder="Tell us about your goals, target exam year, or any questions you have."
            rows={4}
            {...register('message')}
          />
        </Field>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-error/10 px-4 py-3 text-sm font-medium text-error"
        >
          Something went wrong while sending your enquiry. Please try again or
          call us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Submit Enquiry
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label className="text-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}
