import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Marquee } from '../marquee/marquee';
import { BRAND, NAV, PILLARS, SOCIALS } from '../../core/data/site-content';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FormsModule, Marquee],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly brand = BRAND;
  protected readonly nav = NAV;
  protected readonly socials = SOCIALS;
  protected readonly pillars = PILLARS;
  protected readonly whatsappDigits = BRAND.whatsapp.replace(/\D/g, '');
  protected readonly year = new Date().getFullYear();

  protected readonly email = signal('');
  protected readonly subscribed = signal(false);

  /** Branché plus tard sur l'API Node. */
  protected subscribe(): void {
    if (!this.email().trim()) return;
    this.subscribed.set(true);
    this.email.set('');
  }
}
