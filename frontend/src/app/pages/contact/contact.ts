import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { BRAND, CTA, SOCIALS } from '../../core/data/site-content';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly brand = BRAND;
  protected readonly socials = SOCIALS;
  protected readonly cta = CTA;
  protected readonly whatsappDigits = BRAND.whatsapp.replace(/\D/g, '');
  protected readonly budgets = ['Hotel & lodge', 'Destination', 'Brand', 'Other'];

  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    project: [this.budgets[0]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly sent = signal(false);

  /** TODO : brancher sur POST /api/contact (back Node) une fois l'API en place. */
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    this.form.reset({ project: this.budgets[0] });
  }

  protected invalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }
}
