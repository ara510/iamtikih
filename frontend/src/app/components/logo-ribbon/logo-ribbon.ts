import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Partner } from '../../core/models/content.models';

/**
 * Ruban de logos défilant en continu.
 * La piste est dupliquée pour que la boucle soit sans coupure.
 */
@Component({
  selector: 'app-logo-ribbon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ribbon" [style.--speed]="speed() + 's'" [class.ribbon--reverse]="reverse()">
      @for (pass of [0, 1]; track pass) {
        <div class="ribbon__track" [attr.aria-hidden]="pass === 1 ? 'true' : null">
          @for (partner of partners(); track partner.logo) {
            <span class="ribbon__item">
              <img [src]="partner.logo" [alt]="partner.name" loading="lazy" decoding="async" />
            </span>
          }
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .ribbon {
      display: flex;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    }

    .ribbon__track {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: clamp(0.75rem, 2vw, 1.5rem);
      padding-right: clamp(0.75rem, 2vw, 1.5rem);
      animation: ribbon-slide var(--speed, 48s) linear infinite;
    }

    .ribbon--reverse .ribbon__track {
      animation-direction: reverse;
    }

    .ribbon__item {
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      width: clamp(108px, 12vw, 160px);
      aspect-ratio: 3 / 2;
      padding: clamp(0.6rem, 1.2vw, 1rem);
      border-radius: 14px;
      background: var(--paper);
      border: 1px solid var(--line);
    }

    .ribbon__item img {
      /* Voir references.scss : évite que l'intrinsèque impose la largeur. */
      min-width: 0;
      min-height: 0;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      mix-blend-mode: multiply;
    }

    @keyframes ribbon-slide {
      to {
        transform: translate3d(-100%, 0, 0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ribbon {
        overflow-x: auto;
      }

      .ribbon__track {
        animation: none;
      }
    }
  `,
})
export class LogoRibbon {
  readonly partners = input<readonly Partner[]>([]);
  readonly speed = input(48);
  readonly reverse = input(false);
}
